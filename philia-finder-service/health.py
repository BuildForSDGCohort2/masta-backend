import json
from random import randrange
import urllib.request

def convert_list_to_string(org_list, seperator=' and '):
    return seperator.join(org_list)

def lambda_handler(event, context):
    APP_ID='921ac300'
    APP_KEY='d423bdaa9ee114d5a908a4187a09038c'
    endpoint = 'https://api.edamam.com/search?'
    q = event["params"]["querystring"]["q"]
    health = event["params"]["querystring"]["health"]
    start = 0
    to = 5

    index = randrange(5)

    nav_request = 'q={}&app_id={}&app_key={}&from={}&to={}&health={}'.format(q,APP_ID,APP_KEY,start,to,health)
    request = endpoint + nav_request
    execute = urllib.request.urlopen(request).read()
    result = json.loads(execute)
    
    recipeData = result["hits"][index]["recipe"]
    recipe = None
    ingredients = None
    response = None

    try:
        recipe = recipeData["label"]
        ingredients = recipeData["ingredientLines"]
        response = 'For a good diet meal to your taste, I recommend that you take the {} prepared with the following ingredients: {}'.format(recipe,convert_list_to_string(ingredients))

    except:
        pass
    
    return {
        'statusCode': 200,
        'body': response
    }