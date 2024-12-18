import express, {Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';
import userRoute from './routes/userRoutes';
import createDbRoutes from './routes/createDbRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes setup
app.use('/api/photos', photoRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoute);
app.use('/createDb', createDbRoutes);

//init-start listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});