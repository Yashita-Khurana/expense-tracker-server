// require express for setting up the express server
const express = require('express');
const cors = require('cors');
//requiring the registerUser function from userCtrl.js to pass in the post req.
const {registerUser} = require('./controllers/users/usersCtrl');
const {errorHandler,notFound} = require("./middlewares/errorMiddleware");
const userRoute = require('./routes/users/usersRoute');
const dotenv=require("dotenv");
//importing the database into the server
const dbConnect = require('./config/dbConnect');
const incomeRoute = require('./routes/income/incomeRoute');
const expenseRoute = require('./routes/income/expenseRoute');
const accountStatsRoute = require('./routes/accountStatsRoute/accountStatsRoute');
// using express
const app = express();

//env
dotenv.config();

//connecting the db
dbConnect();


//middlewares
app.use(express.json());

//cors middleware
app.use(cors());

app.get('/',(req,res) => {
    res.json({msg:"Welcome To Expense Tracker!!"});
})

//users' routes
app.use('/api/users',userRoute);

//account stats
app.use('/',accountStatsRoute);

//income routes
app.use('/api/income',incomeRoute);

//expense Routes
app.use('/api/expenses',expenseRoute);

//404 error
app.use(notFound);
//error
app.use(errorHandler);

module.exports=app;

//lprArypKGVp4DN0c

//mongodb+srv://Yashita:<password>@cluster0.mn1pf.mongodb.net/?retryWrites=true&w=majority