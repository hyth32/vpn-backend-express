import { AppDataSource } from './data-source'
import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

AppDataSource.initialize()
    .then(async () => {
        const port = Number(process.env.APP_PORT)
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
    })
    .catch(error => console.log(error))
