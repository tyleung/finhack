# finhack
https://finhack.io

Thank you for giving us the opportunity to present our project on Green Finance : __MyCF__

# FinHack: Green Finance


# MyCF (My Carbon Footprint)
MyCF (My Carbon Footprint) is a mobile app built for HongKong’ese to measure their carbon footprint without the need of any physical hardware. Our app is built over a simple premise that when shopping, every responsible citizen can play a big role in reducing HongKong’s carbon footprint by simply scanning their shopping bills and generating a carbon footprint based on our AI capabilities. The users can also get rewarded in the process with 'whitepoints', cash rewards etc.

# Our Logo
For any project, it is important to have a logo that represents our vision and our project's mission. Here's our logo that encapsulates our goal with this app. By cutting down on grocery and buying alternative (recommended) items as part of your shopping, you can save a ton of carbon footprint by yourself. This contribution is what reflects through our logo with earthy colors.

![alt text](https://github.com/tyleung/finhack/blob/master/Files/img_logo_mycf.png "MyCF Logo")

# Our Team
* Abhishek Paryani (TL)
* Bikram Gangwar
* Terence Leung

And we are very proud to say that we are a team from HKUST, Clear Water Bay - Engineering School where we have just completed our 'Big Data Technology' program.

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

## Product Canvas
MyCF (My Carbon Footprint) is an app built for HongKong’ese to measure their carbon footprint without the need of any physical hardware. Our app is built over a simple premise that when shopping, every responsible citizen can play a big role in reducing HongKong’s carbon footprint by simply scanning their shopping bills and generating a carbon footprint based on our AI capabilities. 

A carbon footprint is the total greenhouse gas (GHG) emissions caused directly and indirectly by an individual, organization, event or product.

# Target Audience

Age Groups and their preferences (based on our research about the Hong Kong market):
•	23 – 33
Smartphone savvy millenials who have an environment conscience.

•	33- 50
Those people who are passionate about saving the environment and giving a safer environment to their future generations.

## Screenshots
Tutorial / Splash screen when you start the MyCF app: 
<br/>
![alt text](https://github.com/tyleung/finhack/blob/master/Files/img_cf_all.jpg) <br/>

##  Project / Problem Type: Green Finance
Since this is a projects that generates environmental benefits for Hong Kong residents, we are categorizing this as Green Finance.

##  Problem (Top 3)
- Citizens / residents / households do not have any understanding of their own carbon footprint
- There’s no motivation / incentive to save the environment
- Complex calculations to understand CF of products

## Solution
Our solution is technology based with the front-end being an app that can be easily accessible to the public. 

- A centralised database that stores an absolute value of a product (packed / manufactured) along with its carbon footprint.
- App provides a user-friendly UI to scan receipts/bills from grocery or capture text from digital receipts (like emails) and validate this against purchase (SMS, AliPay, PayMe etc.)
- Scalable systems that can be applied to other services like transportation (MTR), water & electricity, food delivery (e.g.: cutlery), electronics (disposable / recyclable ratings)

## Unique Selling Proposition (USP)
- Environment conscience app - Cuts consumption levels
- Gamification based on user generated data (peer pressure through social media)
- Inclusive (anyone with a smartphone that has a camera function)
- Scalable (AWS environment with Elastic Beanstalk) - This gives us an immense advantage when scaling the application.
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
- Initial reaction to the app maybe that it makes you feel guilty
- Lack of carbon labeling on foods (packaged and non-packed foods)

## Market and Legal Risk
- Plastic and other industries directly impacted and their strong lobbyists
- Supermarket chains opposing to data provided by the app

## Financial Risks
- Failure to generate revenue due to lack of adoption from end-users

## Existing Alternatives
With an idea and app today, there are bound to be direct and indirect competitors to your business idea. We have identified the following __indirect__ competitors since none of them offer a real-time CF based on receipt scanning. Most of the apps are __survey-driven__ that try to estimate based on user input, which we can all agree is not that most accurate form of providing the CF values.

- Oroeco - https://www.oroeco.com/
- Better World Shopper - https://apps.apple.com/us/app/better-world-shopper/id318369598 (Offers a static list of companies and their issues related to environment)
- Carbon - https://apps.apple.com/us/app/carbon-know-your-footprint/id1186053939
- offCents - https://apps.apple.com/us/app/offcents/id1241497942 (Only offers travel related Carbon Emissions)

## Revenue/Gain Structure
- Data Monetization
-- Lease data (anonymized) to consultants, NGO’s and Government entities on consumer habits and purchasing behaviour
-- Lease data (anonymized) to manufacturers through our safe and secure dashboards
- Targeted ads with recommendations of alternative products (those products that are heavily vetted by our compliance teams)
- Partnership with Payment providers such as credit card companies (issuers), wallet companies (Google Pay, Apple Pay, Samusung Pay, AliPayHK, WeChat Pay etc.)

## Motivation to End-users and other stakeholders
- Whitepoints (that can be converted into discounts, coupons, good conduct certificates etc.)
- Rewards (through payment providers like AliPay, PayMe, WeChat Pay etc.)
- Gamified Experience (leaderboards etc.)

# Getting our first 100 users
- During the Alpha and Beta launches, 
- Just like our challenge yesterday to get the fastest LinkedIn invite, we are going to throw a challenge to the user who gets the first ten installs. We have 150 people in the room - This would give us an approximate 50 users initially :)
- Force our friends to download the app and make them feel guilty of their own spending habits
- Launch the app via beta-program at HKUST University so this can reach a wider audience. HKUST just launched a hyper airpollution / AQI measuring app called PRAISE HK via the sustainability programs who is in partnership with WHO 

## Costs Structure
- Design and Testing
- Channel testing
- Development
- Cloud Hosting Costs (AWS)
- Initial social media marketing
- Operational Costs
- Salaries (to feed us developers) :pig_nose: :cow:

# Mockup (rapid prototype on Sketch)
- https://github.com/tyleung/finhack/blob/master/Files/MyCF.sketch

![alt text](https://github.com/tyleung/finhack/blob/master/Files/iphone_mockup.png) <br/>

# Technology Architecture 
- AWS / Azure Hosting (at the moment, we are running this on our local machines)
- Technology stack (system architecture) <br/>
![alt text](https://github.com/tyleung/finhack/blob/master/Files/Architecture_MyCF.png)

## Technical Considerations

* Feature List
- __Core__
-- Scanned Receipts to OCR (English)
-- Carbon Footprint Generator
-- Immediate Score Generator
-- Targeted Ads
-- Message from co-founders (environment, privacy, data protection etc.)
-- Survey to understand the end-user, their habits, shopping behaviour, and total spend per week and month along with their dietary consumption (meat etc.) (LINK)

- __Advanced__
-- Scanned Receipts to OCR (Chinese - Cantonese)
-- Community Comparison (Mei Foo vs. Kowloon Tong vs. Ma On Shan etc.)
-- Combine electricity and water carbon Footprint (like DEWA example)
-- Show list of responsible merchants (Google, Apple, etc.)
-- Suggest alternatives for shopping (beef vs. soy)

- __Experimental Features__
-- Conveyor Belt scan items
-- Tailored Fun Facts within App (Curiously, texting creates less CO2 than a voice call; 1 kg of cheese generate the same amount of CO2 as a car travelling for 6 km) related to your shopping cart

# References
- https://finhack.io/

## Future Work
- Add a full-fledged wallet management service module
- Connect to more payment types

## THANK YOU
Thank you to all the FINHACK organizers, Mentors, and Judges
- __Entire FinHack Team__
- __Sponsors__
- Eric RABIN
- Thomas DECOUVELAERE
- Jean Brice LOMBARD
- Maggie Law
- Karen Contet FARZAM

***-The End of ReadMe-**
