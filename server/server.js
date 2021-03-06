const express = require('express');
const cors = require('cors');

const connectDB = require('./config/mongoDB');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


app.use(cors());
app.use(express.json({ extended: false }));

routes(app);

app.listen(PORT, () => {
  console.log(`server running on port: '${PORT}'`);
});
