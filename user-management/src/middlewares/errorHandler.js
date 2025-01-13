const handleError = (err, req, res, next) => {
    console.error("Hata:", err);
    return res.status(500).json({
        success: false,
        message: "Bir hata oluştu.",
        errMsg: err.message || "Bilinmeyen hata"
    });
};

module.exports = handleError;
