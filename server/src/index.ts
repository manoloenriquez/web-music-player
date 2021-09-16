import express from 'express';

import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 8080;

app.use('/api', apiRouter);

app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// })



app.listen(port, () => console.log(`Server running on port ${port}`));