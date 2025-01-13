const Users = require("../models/users");
const Roles = require("../models/roles");

exports.get_users = async (req,res,next) => {
    try{
        const users = await Users.findAll({include:{model:Roles}});
        
        if(!users){
            return res.status(404).json({success:false,message:"Kullanıcı Bulunamadı!"});
        }

        return res.status(200).json({success:true,message:"Kullanıcılar başarıyla getirildi.",data:users})
    }catch(err){
       next(err)
    }
}

exports.get_user_byId = async (req,res,next) => {
    const {userId} = req.params;

    try{
        const user = await Users.findByPk(userId,{include:{model:Roles}});

        if(!user){
            return res.status(404).json({success:false,message:"Kullanıcı Bulunamadı!"});
        }

        if(userId !== req.user.id.toString()){
            return res.status(403).json({ success: false, message: "Sadece kendi bilgilerinizi görüntüleyebilirsiniz!"});
        }

        return res.status(200).json({success:true,message:"Kullanıcı başarıyla getirildi.",data:user});
    }catch(err){
        next(err)
    }
}

exports.create_users = async (req,res,next) => {
    const {name,surname,email,password,role} = req.body;

    try{
        //kullanıcı kontrol
        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({success:false, message: 'Bu e-posta zaten kullanılıyor.' });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        // rol kontrol

        if (!role) {
            return res.status(400).json({
                success: false,
                message: "Rol seçilmedi."
            });
        }

        const roleData = await Roles.findByPk(role);  
        if (!roleData) {
        return res.status(400).json({success:false, message: 'Geçersiz rol.' });
        }

        const newUser = await Users.create({
            name,
            surname,
            email,
            password: hashedPassword,
        });
        await newUser.addRole(roleData);    

        return res.status(201).json({success:true,message: 'Kullanıcı başarıyla oluşturuldu.',data:newUser});
    }catch(err){
        next(err)
    }
}

exports.update_user = async (req,res,next) => {
    const {userId} = req.params;
    const { name, surname, email, password, role } = req.body;
    try{
        const user = await Users.findByPk(userId,{include:{model:Roles}});
        if(!user){
            return res.status(404).json({success:false,message:"Kullanıcı Bulunamadı!"});
        }

        if(userId !== req.user.id.toString()){
            return res.status(403).json({ success: false, message: "Sadece kendi bilgilerinizi güncelleyebilirsiniz!"});
        }

        user.name = name || user.name;
        user.surname = surname || user.surname;
        user.email = email || user.email;
        
        if (role) {
            const roleData = await Roles.findByPk(role);
            if (!roleData) {
                return res.status(404).json({
                    success: false,
                    message: "Geçersiz rol."
                });
            }

            await user.setRoles([]);  

            await user.addRole(roleData);  
        }

        await user.save();
        return res.status(200).json({success: true,message: "Kullanıcı başarıyla güncellendi.",data: user});
    }catch(err){
        next(err)
    }
}

exports.delete_user = async (req,res,next) => {
    const {userId} = req.params;

    try{
        const user = await Users.findByPk(userId);

        if(!user){
            return res.status(404).json({success:false,message:"Kullanıcı bulunamadı!"});
        }
        if(userId !== req.user.id.toString()){
            return res.status(403).json({ success: false, message: "Sadece kendi bilgilerinizi silebilirsiniz!"});
        }
        await user.destroy();

        return res.status(200).json({success:true,message:"Kullanıcı başarıyla silindi."});
    }
    catch(err){
        next(err)
    }
}