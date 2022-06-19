import * as dotenv from 'dotenv';
import AssistantV2 from 'ibm-watson/assistant/v2'
import AssistantV1 from 'ibm-watson/assistant/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

dotenv.config({ path: '.env' });

export const createAssistantV2 = new AssistantV2({
    version: '2021-06-14',
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_API_KEY
    }),
    serviceUrl: process.env.WATSON_SERVICE_URL
});

export const createAssistantV1 = new AssistantV1({
    version: '2021-06-14',
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_API_KEY
    }),
    serviceUrl: process.env.WATSON_SERVICE_URL
});
