import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { error } from 'console';
const app = express();

app.use(
  cors({
    credentials:true,
  })
);

app.use(compression());

app.use(cookieParser());
app.use(bodyParser.json());
const server= http.createServer(app);

const port = 8080;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript with Express!');
// });

const MONGO_URL='mongodb+srv://malay13pandit:5dYVzm6F9u6WUXJ3@cluster0.lxbf6xd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose.Promise=Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error:Error)=>console.log(error))