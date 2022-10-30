import express, { Express } from 'express';
import cors from 'cors';

import helloworldRoutes from './routes/helloworld';

const setupServer : Function = () => {

    const app: Express = express();

    app.use(cors())
    app.use('/helloworld', helloworldRoutes)

    return app
}

export default setupServer;