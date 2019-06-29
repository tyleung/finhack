# -*- coding: utf-8 -*-
"""
Created on Sat Jun 29 12:30:46 2019

@author: bikra
"""

import plotly.plotly as py
import plotly.graph_objs as go
from plotly.offline import *
import pandas as pd
import plotly

mapbox_access_token = 'pk.eyJ1IjoiYmlrcmFtMjAiLCJhIjoiY2pvbGhsMWJ5MGUwNzNxbXhjeGx2a21qaSJ9.TJTSR3CYLIcWaPtUtyprvQ'


def plot_loc(df_lat_lon,f_name,latd,lond):

    worst_scores = df_lat_lon[df_lat_lon['ranking']>10]
    best_scores = df_lat_lon[df_lat_lon['ranking']<=10]
    
    data = [
            go.Scattermapbox(
                lat=worst_scores['latitude'],
                lon=worst_scores['longitude'],
                mode='markers',
                marker=dict(
                    size=15,
                    opacity=0.9,
                    color='rgb(255,0,0)',
                ),
                name='Worst CF Scores - Trainee Cadets',
                text=worst_scores[['name','cf_score']]
            ),
    
            go.Scattermapbox(
                lat=best_scores['latitude'],
                lon=best_scores['longitude'],
                mode='markers',
                marker=dict(
                    size=15,
                    opacity=0.9,
                    color='rgb(34,139,34)',
                ),
                name='Best CF Scores - Captains',
                text=best_scores[['name','cf_score']]
            )
    
    
    
        ]
    
    layout = go.Layout(
            autosize=True,
            hovermode='closest',
            mapbox=dict(
                accesstoken=mapbox_access_token,
                bearing=0,
                center=dict(
                    lat=latd,
                    lon=lond
            ),
            pitch=0,
            zoom=10
        ),
    )
    
    fig = dict(data=data, layout=layout)
    py.iplot(fig, filename=f_name)
#    plotly.offline.plot(fig, filename=f_name)


df = pd.read_csv('users_location.csv')


plot_loc(df,'Users Location Map.html',22.3193, 114.1694)
