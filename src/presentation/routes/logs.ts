import { AssistantLogs } from '../controllers/logs'
import { router } from '../../config/express.config'

export const AssistantLogsMakeRouter = router
AssistantLogsMakeRouter.get('/listAll', (request, response) => {
  try {
    const { endDateTime, initialDateTime }: any = request.query
    const requiredFields = ['initialDateTime', 'endDateTime']
    for (const field of requiredFields) {
      if (!request.query[field]) {
        return response.status(400).json({ error: `Missing param ${field}` })
      }
    }
    void new AssistantLogs().listLogs(initialDateTime, endDateTime)
      .then(logsFound => {
        if (logsFound.result.logs == null) {
          return response.status(logsFound.code).json({
            error: {
              message: logsFound.message,
              statusCode: logsFound.code
            }
          })
        }
        return response.status(logsFound.status).json({
          data: logsFound.result
        })
      })
  } catch (error) {
    return response.status(500).json({
      error: error
    })
  }
})
