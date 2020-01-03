import { login } from './users';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/user/login', login);

app.listen(port, () => console.log(`Listening on port ${port}`));

export {};
