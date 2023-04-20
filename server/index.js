import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postsRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB_URL = "mongodb+srv://nathabolo:nathabolo@moviecatalog.rla8zan.mongodb.net/?retryWrites=true&w=majority";
// const CONECTION_URL = "mongodb+srv://<username>:33magalane23nm#@moviecatalog.rla8zan.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));