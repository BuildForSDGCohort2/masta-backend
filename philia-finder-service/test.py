import json # to be able to use json data
import urllib.request # to be able to execute api endpoint

def apiCall(arg1,arg2):
    APP_ID='921ac300' # API ID change it with your own app id value
    APP_KEY='d423bdaa9ee114d5a908a4187a09038c' # API KEY change it with your own app key value
    endpoint = 'https://api.edamam.com/search?' # API ENDPOINT OR URL
    q = arg1 #API q param value
    diet = arg2 #API diet param value
    start = 0 #API from param value
    to = 5 #API to param value

    nav_request = 'q={}&app_id={}&app_key={}&from={}&to={}&diet={}'.format(q,APP_ID,APP_KEY,start,to,diet) #API params building
    request = endpoint + nav_request #API url to call it give use https://api.eda man.com/search?q="chicken"&ap_id='921ac300'.....
    execute = urllib.request.urlopen(request).read() # API call or execution
    result = json.loads(execute) # save API returned data to a variable
    
    #return the json data in python it is a dict type
    return {
        'statusCode': 200,
        'body':  result
    }


apiCall("chicken", "balanced")    