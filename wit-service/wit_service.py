import json
from wit import Wit

access_token = "2PLFUWBVVTYQCSEL6VDJ3AFQLUCTV7ZH"
client = Wit(access_token=access_token)

def wit_handler(event, context):
    utterance = 'good morning john'
    response = client.message(msg=utterance)
    intent = None
    entity = None

    try:
        intent = list(response['intents'])[0]
        entity = list(response['entities'])

    except:
        pass
    
    return {
        'statusCode': 200,
        'body': json.dumps(intent, entity)
    }
  

