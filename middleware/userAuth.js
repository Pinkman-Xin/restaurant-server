module.exports = options=>{
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const NormalUser = require('../models/NormalUser')
    return async(req,res,next)=>{
       console.log(req);
        const token = String(req.headers.authorization).split(' ').pop()
        assert(token,401,'请先登录')
        const {id} = jwt.verify(token,req.app.get('secret'))
        assert(id,401,'请先登录')
          req.user = await NormalUser.findById(id)
          assert(req.user,401,'请先登录')
        
        await next()
      }
}