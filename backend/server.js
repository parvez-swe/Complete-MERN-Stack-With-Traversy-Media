const express =require('express');
const { getGoals } = require('./controllers/goalController');
const dotenv = require('dotenv').config();
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT ||  5000;


connectDB();

const app = express();

//middleware for Row json
app.use(express.json());
//middleware for extended url data
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',goalRoutes);
app.use('/api/users',userRoutes);


app.use(errorHandler)



app.listen(port,()=>console.log(`listening on port ${port}`))