# finhack
https://finhack.io

# FinHack: Green Finance
FinHack WIP

# MyCF (My Carbon Footprint)

**WIP**

# Logo
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/tyleung/finhack/blob/master/Files/img_logo_mycf.png "MyCF Logo")

## Getting Started

### Prerequisites

What things you need to install the software and how to install them

```
import json
import os
import requests
import pandas as pd
import pickle
import flask
import flask_bootstrap
```

### Installing
Most of the libraries will be installed automatically with Anaconda. Flask needs to be installed separately by the following:
```
pip install flask
pip install flask_bootstrap
```

## To Run
```
python MyCF.py
```

# How does this work?


# Target Audience

Age Groups and their preferences (based on our research):
•	23 – 33
Smartphone savvy millenials

•	33- 50
Those are passionate about saving the environment


## Screenshots
Tutorial / splash screen when you start the app: 
<br/>
![alt text](https://cdn1.imggmi.com/uploads/2019/6/29/a1d12322cc1a9c344fde698c4e4dbbbb-full.jpg) <br/>
New
<br/>
![alt text](https://github.com/tyleung/finhack/blob/master/Files/img_cf_all.jpg) <br/>

## Product Canvas
MyCF (My Carbon Footprint) is an app built for HongKong’ese to measure their carbon footprint without the need of any physical hardware. Our app is built over a simple premise that when shopping, every responsible citizen can play a big role in reducing HongKong’s carbon footprint by simply scanning their shopping bills and generating a carbon footprint based on our AI capabilities. 

A carbon footprint is the total greenhouse gas (GHG) emissions caused directly and indirectly by an individual, organization, event or product.

##  Project / Problem Type: Green Finance
Projects generating environment benefits.

##  Problem (Top 3)
- Citizens / residents / households do not have any understanding of their own carbon footprint
- There’s no motivation / incentive to save the environment

## Solution
- Centralised database that stores an absolute value of a product (packed / manufactured) along with its carbon footprint.
- App provides a user-friendly UI to scan receipts/bills from grocery or capture text from digital receipts (like emails) and validate this against purchase (SMS, AliPay, PayMe etc.)
- Scalable systems that can be applied to other services like transportation (MTR), water & electricity, food delivery (e.g.: cutlery), electronics (disposable / recyclable ratings)

## Unique Selling Proposition (USP)
- Environment conscience app - Cuts consumption levels
- Gamification based on user generated data (peer pressure through social media)
- Inclusive (anyone with a smartphone that has a camera function)
- Scalable (AWS environment with Elastic Beanstalk)
- Proprietary algorithms to match item on shopping list with a direct carbon footprint number
- Generates data related to habits for environment improving reasons

## Customer Segments
- End-users (content generators)
-- New
-- Existing
-- Lapsed
- Manufacturers (those who can reduce carbon footprint by changing manufacturing process)

## Channels
- Mobile App
- SDK on Mini App on Payment Apps (AliPay, PayMe, WeChat Pay etc.)
- Website (to see advanced analytics on your CF)

## Key Metrics
- Reduction in CF month on month of our existing end-users

## Risks
## Product Risk
Initial reaction to the app maybe that it makes you feel guilty
Lack of carbon labeling on foods (packaged and non-packed foods)

## Market and Legal Risk
Plastic and other industries directly impacted and their strong lobbyists
Supermarket chains opposing to data provided by the app

## Financial Risks
Failure to generate revenue due to lack of adoption from end-users.

## Existing Alternatives

- Oroeco - https://www.oroeco.com/
- Better World Shopper - https://apps.apple.com/us/app/better-world-shopper/id318369598 (Offers a static list of companies and their issues related to environment)
- Carbon - https://apps.apple.com/us/app/carbon-know-your-footprint/id1186053939
- offCents - https://apps.apple.com/us/app/offcents/id1241497942 (Only offers travel related Carbon Emissions)

## Revenue/Gain Structure
- Data Monetization
-- Sell data (anonymized) to consultants, NGO’s and Government entities on consumer habits and purchasing behaviour
-- Sell data (anonymized) to manufacturers
- Targeted ads with recommendations of alternative products (those products that are heavily vetted by our compliance teams)


## Motivation to End-users and other stakeholders
- Whitepoints (that can be converted into discounts, coupons, good conduct certificates etc.)
- Rewards (through payment providers like AliPay, PayMe, WeChat Pay etc.)
- Gamified Experience (leaderboards etc.)

## Costs Structure
- Design and Testing
- Channel testing
- Development
- Cloud Hosting Costs (AWS)


# Mockup (rapid prototype)
https://marvelapp.com/478f0id

# Technology Architecture 
- Hosting
- Technology stack (system architecture) <br/>
![alt text](https://i.ibb.co/Bc7S8SN/System-Architecture.png)

## Technical Considerations

* Feature List
- Core
-- Scanned Receipts to OCR (English)
-- Carbon Footprint Generator
-- Immediate Score Generator
-- Targeted Ads
-- Message from co-founders (environment, privacy, data protection etc.)
-- Survey to understand the end-user, their habits, shopping behaviour, and total spend per week and month along with their dietary consumption (meat etc.) (LINK)

- Advanced
-- Scanned Receipts to OCR (Chinese - Cantonese)
-- Community Comparison (Mei Foo vs. Kowloon Tong vs. Ma On Shan etc.)
-- Combine electricity and water carbon Footprint (like DEWA example)
-- Show list of responsible merchants (Google, Apple, etc.)
-- Suggest alternatives for shopping (beef vs. soy)

- Experimental Features
-- Conveyor Belt scan items
-- Tailored Fun Facts within App (Curiously, texting creates less CO2 than a voice call; 1 kg of cheese generate the same amount of CO2 as a car travelling for 6 km) related to your shopping cart


# References
- https://finhack.io/

## Future Work
- Add a full-fledged wallet management service module
- Connect to more payment types
