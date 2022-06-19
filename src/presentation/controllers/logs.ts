import { createAssistantV1 as AssistantV1 } from './assistant';

export class AssistantLogs {
    async listLogs(initialDateTime: any, endDateTime: any) {
        const newLogs = AssistantV1.listLogs({
            workspaceId: process.env.WATSON_WORKSPACE_ID,
            sort: "request_timestamp",
            filter: `request_timestamp>=${initialDateTime}, request_timestamp<=${endDateTime}`,
            pageLimit: 10,
        })
            .then((AssistantLogs: any) => {
                return AssistantLogs
            })
            .catch((AssistantLogsError: any) => {
                return AssistantLogsError
            });

        return await newLogs
    }
}
