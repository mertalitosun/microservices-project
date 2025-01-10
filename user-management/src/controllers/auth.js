const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/users");
const Roles = require("../models/roles");
require("dotenv").config();


exports.login = async(req,res) => {
    const {email,password} = req.body;

    try{
        const user = await Users.findOne({where:{email}});
        if(!user){
            return res.status(400).json({success:"false", message: 'Bu e-posta bulunamadı.'});
        }
        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({success:"false", message: 'Şifre yanlış.'})
        }

        if(match){
            const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"1h"});
            return res.status(200).json({ success: "true", token, message: "Başarıyla giriş yapıldı." });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ success:"false", message: 'Bir hata oluştu.', errMsg: err.message });
    }
}

exports.register = async (req,res) => {
    const {name,surname,email,password,role} = req.body;

    try{
        //kullanıcı kontrol
        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({success:"false", message: 'Bu e-posta zaten kullanılıyor.' });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        // rol kontrol
        const roleData = await Roles.findByPk(role);  
        if (!roleData) {
        return res.status(400).json({success:"false", message: 'Geçersiz rol.' });
        }

        const newUser = await Users.create({
            name,
            surname,
            email,
            password: hashedPassword,
            roleId: roleData.id
        });

        res.status(201).json({success:"true",
            message: 'Kullanıcı başarıyla oluşturuldu.',
        });
    }catch(err){
        console.error(err);
        res.status(500).json({success:"false", message: 'Bir hata oluştu.', errMsg: err.message});
    }
}