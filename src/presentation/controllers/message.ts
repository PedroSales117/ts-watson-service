import { createAssistantV2 as AssistantV2 } from './assistant'

export class AssistantTextMessage {
  async createSession (): Promise<void> {
    try {
      const newSessionCreated: any = await AssistantV2.createSession({
        assistantId: process.env.WATSON_ASSISTANT_ID
      })
      return newSessionCreated.result.session_id
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async send (message: string, newSessionId: any): Promise<any> {
    try {
      const newAssistantMessage = AssistantV2.message({
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: newSessionId,
        input: {
          message_type: 'text',
          text: message
        }
      })
      return await newAssistantMessage
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
