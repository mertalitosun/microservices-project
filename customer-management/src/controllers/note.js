const Notes = require("../models/notes");
const Customers = require("../models/customers");

exports.update_note = async (req,res,next) => {
    const {noteId} = req.params;
    const {title,content} = req.body;

    try{
        const note = await Notes.findByPk(noteId);

        if(!note){
            return res.status(404).json({success:false,message:"Not bulunamadı!"});
        }

        note.title = title || note.title;
        note.content = content || note.content;

        await note.save();
        return res.status(200).json({success:true,message:"Not başarıyla güncellendi.",data:note});
    }catch(err){
        next(err);
    }
}

exports.delete_note = async (req,res,next) => {
    const {noteId} = req.params;

    try{
        const note = await Notes.findByPk(noteId);

        if(!note){
            return res.status(404).json({success:false,message:"Not bulunamadı!"});
        }

        await note.destroy();
        return res.status(200).json({success:true,message:"Not başarıyla silindi."});
    }catch(err){
        next(err);
    }
}

exports.create_note = async (req,res,next) => {
    const {customerId} = req.params;
    const {title,content} = req.body;
    try{
        const customer = await Customers.findByPk(customerId);

        if(!customer){
            return res.status(404).json({success:false,message:"Müşteri bulunamadı"});
        }
        const newNote = await Notes.create({
            title,
            content,
            customerId
        });
        return res.status(201).json({success:true,message:"Not başarıyla eklendi.",data:newNote});
    }catch(err){
        next(err);
    }
}

exports.get_note_byId = async (req,res,next) => {
    const {noteId} = req.params;
    try{
        const note = await Notes.findByPk(noteId);

        if(!note){
            return res.status(404).json({success:false,message:"Not bulunamadı!"});
        }

        return res.status(200).json({success:true,message:"Not başarıyla getirildi.",data:note})
    }catch(err){
        next(err);
    }
}
