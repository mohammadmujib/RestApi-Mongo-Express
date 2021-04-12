import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

const app = express();

const PORT = 8080;

dotenv.config();
connectDB();

app.use(express.json());
app.use('/', (req, res) => {
  res.send('Api is Running');
});

app.listen(PORT, console.log(`server started on port ${PORT}`));
