import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes setup
app.use('/api/photos', photoRoutes);
app.use('/api/orders', orderRoutes);

//init-start listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});