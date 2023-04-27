import express from 'express';
import carRoutes from './Routes/CarRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';
import motorcycleRoutes from './Routes/MotorcycleRoutes';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
