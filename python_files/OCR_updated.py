# -*- coding: utf-8 -*-
"""
Created on Sat Jun 29 16:35:46 2019

@author: bikra
"""

import requests as rq
import json
import os
import time
import pandas as pd

api_key = 'oMz3YXcxrqRfYejC9E7ZmdD11ZeityaTuXqI6j2muNTDTCWTjd3sMb60Ri9IAJ4o'

final_billed_items = []

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
    
    return final_billed_items

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

db_cf = pd.read_csv('datasheet_cf.csv', header=0, delimiter=',')

def calc_cf():
    global api_key
    global db_cf
    global final_billed_items
    receipt_cf = []
#    print(db_cf[0])
    for i in range(len(db_cf)):
        for j in range(len(final_billed_items)):
            if db_cf['Item'][i] in final_billed_items[j]:
#                temp_list = [db_cf['Item'][i],db_cf['Carbon Dioxide Emissions'][i]]
#                print(db_cf.iloc[i,:])
#                receipt_cf.append(db_cf.iloc[i,:])
                receipt_cf.append(list(db_cf.iloc[i,:]))
                break
    return(receipt_cf)
  
items = upload_rec()
receipt_cf = calc_cf()


receipt_df = pd.DataFrame(receipt_cf) 
receipt_df.to_csv('receipt_cf.csv',index=False,header=['Items','CF Score'])
          