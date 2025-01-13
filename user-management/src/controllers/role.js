const Roles = require("../models/roles");
exports.get_roles = async (req,res,next) => {
    try{
        const roles = await Roles.findAll();
        return res.status(200).json({success:true,message:"Roller getirildi.",data:roles});
    }catch(err){
        next(err)
    }
}

exports.create_roles = async (req,res,next) => {
    const {name} = req.body;
    try{
        const existingRole = await Roles.findOne({where:{name}});
        if(existingRole){
            return res.status(400).json({success:false, message: 'Bu role zaten mevcut.'});
        }

        const newRole = await Roles.create({
            name
        });

        return res.status(201).json({success:true,message: 'Rol başarıyla oluşturuldu.',data:newRole});
    }catch(err){
        next(err);
    }
}

exports.delete_roles = async (req,res,next) => {
    const {roleId} = req.params;

    try{
        const role = await Roles.findByPk(roleId);

        if(!role){
            return res.status(404).json({success:false,message:"Role Bulunamadı!"});
        }

        await role.destroy();

        return res.status(200).json({success:true,message:"Role başarıyla silindi."});
    }catch(err){
        next(err)
    }

}

exports.update_roles = async (req,res,next) => {
    const {roleId} = req.params;
    const {name} = req.body;
    try{
        const role = await Roles.findByPk(roleId);
        if(!role){
            return res.status(404).json({success:false,message:"Role Bulunamadı!"});
        }

        role.name = name || role.name

        await role.save();

        return res.status(200).json({success:true,message:"Role başarıyla güncellendi.",data:role});
    }catch(err){
        next(err);
    }
}