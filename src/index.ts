import { AppDataSource } from './data-source'
import * as express from 'express'
import * as dotenv from 'dotenv'
import userRoutes from './routes/user.routes'
import periodRoutes from './routes/period.routes'
import regionRoutes from './routes/region.routes'
import priceRoutes from './routes/price.routes'
import keyRoutes from './routes/key.routes'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/periods', periodRoutes)
app.use('/regions', regionRoutes)
app.use('/prices', priceRoutes)
app.use('/keys', keyRoutes)

AppDataSource.initialize()
    .then(async () => {
        const port = Number(process.env.APP_PORT)
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
    })
    .catch(error => console.log(error))
