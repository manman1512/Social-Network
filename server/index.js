const express = require('express');
const http = require('http');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const categoryRouter = require('./routes/category');

const multer = require('multer');

const middleware = require('./middleware');

const app = express();
const server = http.createServer(app);

const MONGO_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connect database successfully!');
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File da duoc uploaded!")
})

app.use('/api/auth', authRouter);
app.use(middleware);
app.use('/api/users', userRouter);
app.use('/api/post', postRouter);
app.use('/api/categories', categoryRouter);

server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
