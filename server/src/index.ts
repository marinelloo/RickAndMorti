import express from 'express';
import mongoose from 'mongoose';
import { config } from "dotenv";
import EventEmitter from 'events';


config();
const PORT=5004;
const app = express();
const db = mongoose.connect('mongodb+srv://maryna_mandarynka:Mar10071996@cluster0.atvjsot.mongodb.net/?retryWrites=true&w=majority');

const userRoutes = require('./routes/user');

// middleware
app.use(express.json())

app.use((req: any, res: any, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/user', userRoutes)



const MONGO_URI='mongodb+srv://maryna_mandarynka:Mar10071996@cluster0.atvjsot.mongodb.net/?retryWrites=true&w=majority'

// connect to db
mongoose.connect(MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
