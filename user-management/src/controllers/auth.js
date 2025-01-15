const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users");
const Roles = require("../models/roles");
require("dotenv").config();


exports.login = async(req,res,next) => {
    const {email,password} = req.body;
    try{
        const user = await Users.findOne({where:{email},include:{model:Roles}});
        if(!user){
            return res.status(400).json({success:"false", message: 'Bu e-posta bulunamadı.'});
        }
        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({success:"false", message: 'Hatalı Parola!'})
        }

        if(match){
            const token = jwt.sign({id:user.id, email:user.email,role:user.roles[0].name},process.env.JWT_SECRET,{expiresIn:"1h"});
            return res.status(200).json({ success: "true", token, message: "Başarıyla giriş yapıldı." });
        }
    }catch(err){
        next(err);
    }
}
exports.logout = async (req,res) => {
    res.status(200).json({
        success:true,
        message:"Çıkış Başarılı",
    })
}
