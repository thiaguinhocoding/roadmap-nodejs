import express from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 8080;

app.get('/', async (req: express.Request, res: express.Response) => {
  res.json({ hello: 'world' });
});

app.listen(SERVER_PORT, () => console.log(`Server ready at *:${SERVER_PORT}`));
