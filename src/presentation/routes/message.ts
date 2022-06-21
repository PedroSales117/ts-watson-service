import { AssistantTextMessage } from '../controllers/message'
import { router } from '../../config/express.config'

export const AssistantMessageMakeRouter = router

AssistantMessageMakeRouter.post('/send', (request, response) => {
  try {
    const { message } = request.body
    if (message == null) {
      return response.status(400).json({
        error: 'Missing field \'message\''
      })
    }

    void new AssistantTextMessage().createSession().then(newSessionId => {
      void new AssistantTextMessage().send(message, newSessionId)
        .then(AssistantResponse => {
          return response.status(AssistantResponse.status).json({
            intents: AssistantResponse.result.output.intents,
            entities: AssistantResponse.result.output.intents,
            response: AssistantResponse.result.output.generic
          })
        })
    })
  } catch (error) {
    return response.status(500).json({
      error: error
    })
  }
})
