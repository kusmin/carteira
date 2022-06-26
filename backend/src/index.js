import { json } from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import routes from './routes'

const app = express()

app.use(cors())
app.use(morgan(':method :url :status :user-agent - :response-time ms'))
app.use(json())

app.use('/', routes)

app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000))
})
