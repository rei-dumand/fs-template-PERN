import express from 'express';
import cors from 'cors';
import helloworldRoutes from './routes/helloworld';
const setupServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/helloworld', helloworldRoutes);
    return app;
};
export default setupServer;
