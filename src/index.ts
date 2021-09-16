import express from 'express';

import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 8080;

app.use('/api', apiRouter);

app.use(express.static('client/build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server running on port ${port}`));