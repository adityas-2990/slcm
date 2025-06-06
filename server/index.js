import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import adminRoutes from './routes/adminRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/admin' , adminRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Running on port 3000');
})
