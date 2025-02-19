import  express from 'express';
import routes from './routes';
import cors from 'cors';
const port = 3336;

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(port, () => {
    console.log(`Clique em http://localhost:${port}`)
});
