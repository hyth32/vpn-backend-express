import { AppDataSource } from './data-source'
import * as express from 'express'
import * as dotenv from 'dotenv'
import userRoutes from './routes/user.routes'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/users', userRoutes)

AppDataSource.initialize()
    .then(async () => {
        const port = Number(process.env.APP_PORT)
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
    })
    .catch(error => console.log(error))
