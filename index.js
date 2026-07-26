const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB= require('./config/db');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroutes');
const taskRoutes = require('./routes/taskroutes');
connectDB();
const app = express(); 
const PORT = process.env.PORT || 5000;
app.use(express.json());

// Home route yahan
app.get('/', (req,res)=>{
  res.send('Server is running!')
})
// API routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected ✅'))
.catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log('Server running on port' + PORT);
});


