const Customers = require("../models/customers");
const Notes = require("../models/notes");
const {Op} = require("sequelize");
exports.create_customers = async (req,res,next) => {
    const {name,surname,email,phone,company} = req.body;

    try{
        const existingCustomer = await Customers.findOne({where:{email}});

        if(existingCustomer){
            return res.status(400).json({success:false,message:"Bu e-posta zaten kayıtlı!",data:existingCustomer});
        }

        const newCustomer = await Customers.create({
            name,
            surname,
            email,
            phone,
            company
        });

        return res.status(201).json({success:true,message:"Müşteri başarıyla kaydedildi.",data:newCustomer});
    }catch(err){
        next(err);
    }
}

exports.delete_customers = async (req,res,next) => {
    const {customerId} = req.params;
    try{
        const customer = await Customers.findByPk(customerId);

        if(!customer){
            return res.status(404).json({success:false,message:"Müşteri bulunamadı!"});
        }

        await customer.destroy();
        return res.status(200).json({success:true,message:"Müşteri başarıyla silindi."});
    }catch(err){
        next(err);
    }
}

exports.update_customers = async (req,res,next) => {
    const {customerId} = req.params;
    const {name,surname,email,phone,company} = req.body;

    try{
        const customer = await Customers.findByPk(customerId);

        if(!customer){
            return res.status(404).json({success:false,message:"Müşteri Bulunamadı!"});
        }

        customer.name = name || customer.name;
        customer.surname = surname || customer.surname;
        customer.email = email || customer.email;
        customer.phone = phone || customer.phone;
        customer.company = company || customer.company;

        await customer.save();

        return res.status(200).json({success:true,message:"Müşteri başarıyla güncellendi.",data:customer});
    }catch(err){
        next(err)
    }
}

exports.get_customer_byId = async (req,res,next) => {
    const {customerId} = req.params;
    try{
        const customer = await Customers.findByPk(customerId,{include:{model:Notes}});

        if(!customer){
            return res.status(404).json({success:false,message:"Müşteri Bulunamadı!"});
        }

        return res.status(200).json({success:true,message:"Müşteri başarıyla getirildi.",data:customer})
    }catch(err){
        next(err);
    }
}

exports.get_customers = async (req,res,next) => {
    const {sortBy = "createdAt", order = "ASC",name,email,surname,company,phone} = req.query;
    try{
        const customers = await Customers.findAll({where:{
            ...(name && {name:{[Op.like] : `%${name}%`}}),
            ...(surname && {surname:{[Op.like] : `%${surname}%`}}),
            ...(company && {company:{[Op.like] : `%${company}%`}}),
            ...(phone && {phone:{[Op.like] : `%${phone}%`}}),
            ...(email && {email:{[Op.like] : `%${email}%`}}),
        },order:[[sortBy, order.toUpperCase()]]});

        if(!customers){
            return res.status(404).json({success:false,message:"Müşteriler bulunamadı"});
        }

        return res.status(200).json({success:true,message:"Müşteriler başarıyla getirildi.",data:customers})
    }catch(err){
        next(err);
    }
}