const Sales = require("../models/sales");
const SalesStatuses = require("../models/salesStatuses");
const axios = require("axios");

exports.update_sales = async (req,res,next) => {
    const {saleId} = req.params;
    const {note,status} = req.body;
    try{
        const sale = await SalesStatuses.findOne(saleId);

        if(!sale){
            return res.status(404).json({success:false,message:"Satış bilgileri bulunamadı!"});
        }
        
        sale.note = note || sale.note;
        sale.status = status || sale.status;
        sale.statusChangeDate = new Date().toISOString();
        
        await sale.save();
        return res.status(200).json({success:true,message:"Satış kaydı başarıyla güncellendi.",data:sale})
    }catch(err){
        next(err);
    }
}
exports.get_sales_customer_byId = async (req,res,next) => {
    const {customerId} = req.params;
    try{
        const sales = await Sales.findAll({where:{customerId},include:{model:SalesStatuses}});

        if(!sales){
            return res.status(404).json({success:false,message:"Satış bilgileri bulunamadı!"});
        }

        return res.status(200).json({success:true,message:"Satış bilgileri başarıyla getirildi.",data:sales});
    }catch(err){
        next(err);
    }
}
exports.get_sales = async (req,res,next) => {
    try{
        const sales = await Sales.findAll({include:{model:SalesStatuses}});

        if(!sales){
            return res.status(404).json({success:false, message:"Satış bilgisi bulunamadı!"});
        }
        return res.status(200).json({success:true,message:"Satışlar başarıyla getirildi.",data:sales});
    }catch(err){
        next(err);
    }
}
exports.create_sales = async (req,res,next) => {
    const {customerId,status,note} = req.body;

    try{

        const customer = await axios.get(`http://localhost:3003/customers/${customerId}`);

        if(!customer.data.success){
            return res.status(404).json({success:false,message:"Müşteri Bulunamadı!"});
        }
        
        const newSale = await Sales.create({
            customerId
        });

        const newSalesStatus = await SalesStatuses.create({
            saleId:newSale.id,
            status,
            note,
            statusChangeDate: new Date().toISOString()
        });

        return res.status(201).json({success:true,message:"Satış başarıyla kaydedildi.",data:{newSale,newSalesStatus}});
    }catch(err){
        next(err);
    }
}