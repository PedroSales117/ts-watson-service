import { app } from './config/express.config'
import { AssistantMessageMakeRouter, AssistantLogsMakeRouter } from './presentation/routes/index'


app.use('/message', AssistantMessageMakeRouter)
app.use('/logs', AssistantLogsMakeRouter)
app.listen(process.env.PORT, () => {
    console.log(`listen on http://localhost:${process.env.PORT}`)
})