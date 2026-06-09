import express, { Request, Response, NextFunction } from 'express'

const app = express()

app.use(express.json())


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => console.log(`Mock server running on http://localhost:${PORT}`))