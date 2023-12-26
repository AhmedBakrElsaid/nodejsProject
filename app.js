const express = require("express")
const app = express()

app.set('view engine', 'ejs')



app.get('/',(req,res)=>{
  res.send('it is working from web')
})

const events = require('./routes/event-routes')
app.use('/events',events)

app.listen(3000,()=>{
  console.log("server is working on port 3000")
})