import { getUser } from './users';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/users/:id', getUser);

app.listen(port, () => console.log(`Listening on port ${port}`));

export {}