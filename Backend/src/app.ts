import express from 'express'
import catchAll from './3-middlewares/catch-all'
import routeNotFound from './3-middlewares/route-not-found'
import giftsController from './6-controllers/gifts-controller'
import cors from 'cors'
import sanitize from './3-middlewares/sanitize'
import expressRateLimit from 'express-rate-limit'
import appConfig from './2-utils/app-config'
import dal from './2-utils/dal'

dal.connect()

const server = express()

server.use("/api/", expressRateLimit({
    max: 1,
    windowMs: 1000
}))

server.use(cors({origin: appConfig.frontEndUrl}))

server.use(express.json())

server.use(sanitize)

server.use("/api", giftsController)
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, ()=>console.log(`Listen on port ${appConfig.port}`))