# -*- coding: utf-8 -*-
"""
Created on Sat Jun 29 03:38:08 2019

@author: bikra
"""

import requests as rq
import json
import os
from flask import Flask, render_template, request, url_for
from flask_bootstrap import Bootstrap
import time
import pandas as pd

app = Flask(__name__)

Bootstrap(app)

@app.route('/')
def index():
    return render_template('index.html')

api_key = 'R2xCL1rctlPOrWTEjlyJLHOlSLHZ2umpN3bxl47imB3hIjuttl8KA6tLTJonD5GY'

final_billed_items = []


### For uploading the receipts

@app.route('/upload_receipt', methods=['POST'])
def upload_rec():
    global api_key
    global final_billed_items
    token = ''
    post_url = 'https://api.tabscanner.com/{}/process/'.format(api_key)
    PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__)) + '\\'
    
    frame = 'Receipt_SeveralItems.png'
    files = {'receiptImage': open(PROJECT_ROOT+frame, 'rb')}
    response_result = rq.post(post_url, files=files, headers={})
    json_result = json.loads(response_result.text)
    token = json_result['token']
    final_billed_items = get_items(token)
    
    return render_template('uploaded_scan.html', final_billed_items=final_billed_items)




### For downloading the OCR data
def get_items(token):
    time.sleep(5) 
    global final_billed_items
    global api_key
    temp_url = 'https://api.tabscanner.com/{}/result/'.format(api_key)
    get_url = temp_url+'{}'.format(token)
    
    get_response_result = rq.get(get_url, headers={})
    get_json_result = json.loads(get_response_result.text)
    
    final_billed_items = []
    for i in range(0,len(get_json_result['result']['lineItems'])):
        final_billed_items.append(get_json_result['result']['lineItems'][i]['desc'])
        
    return final_billed_items

### Database 
db_cf = pd.read_csv('datasheet_cf.csv', header=0, delimiter=',')
@app.route('/uploaded_scan', methods=['POST'])
def calc_cf():
    global api_key
    global db_cf
    global final_billed_items
    receipt_cf = []
    
    for i in range(len(db_cf)):
        for j in range(len(final_billed_items)):
            if db_cf['Item'][i] in final_billed_items[j]:
                receipt_cf.append(db_cf['Item'][i])
                break

    print(receipt_cf)
            
            
                
    
    