const express  = require('express');
const userRouter = require('./userRouter')
const apiRouter = express.Router();

apiRouter.use('/users',userRouter)
apiRouter.get('/', (req,res)=>{
    res.send("aaaaaaaaa")
})
module.exports = apiRouter;
