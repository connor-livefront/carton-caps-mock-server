import express, { Request, Response, NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const app = express()

// Host the API Swagger doc on the server
const swaggerDocument = YAML.load('./spec/api.yaml')
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => console.log(`Mock server running on http://localhost:${PORT}`))