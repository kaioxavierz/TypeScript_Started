import  express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.listen(3334, () => {
    console.log(`Clique em http://localhost:3334`)
});
