const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req,res,next) => {
    const token = req.headers["authorization"];
    if(!token){
        return res.status(403).json({success:false,message:"Token gerekli!"});
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=> {
        if(err){
            return res.status(403).json({ success: false, message: "Geçersiz token!" });
        }
        req.user = decoded;
        next();
    });
}

const isAdmin = (req,res,next) => {
    if(req.user.role !== "Admin"){
        return res.status(403).json({success:false,message:"Yetkisiz İşlem!"});
    }
    next();
}
module.exports = {isAuth,isAdmin}