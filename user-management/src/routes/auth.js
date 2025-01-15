const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: "Kullanıcı Girişi"
 *     description: "Kullanıcı sisteme giriş yapar"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: "Başarılı giriş"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 message:
 *                   type: string
 *                   example: "başarıyla giriş yapıldı."
 *       400:
 *         description: "kullanıcı bulunamadı"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "false"
 *                 message:
 *                   type: string
 *                   example: "Bu e-posta bulunamadı."
 *       401:
 *         description: "hatalı parola"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "false"
 *                 message:
 *                   type: string
 *                   example: "Hatalı Parola!"
 *       500:
 *         description: "Sunucu hatası"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "false"
 *                 message:
 *                   type: string
 *                   example: "Bir hata oluştu."
 *                 errMsg:
 *                   type: string
 *                   example: "Bilinmeyen bir hata oluştu"
 */
router.post("/login",authController.login);

/**
 * @swagger
 * /logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: "Kullanıcı Çıkışı"
 *     description: "Kullanıcı sistemden çıkış yapar"
 *  
 *     responses:
 *       200:
 *         description: "Çıkış Başarılı"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 message:
 *                   type: string
 *                   example: "Çıkış Başarılı."
 */
 
router.post("/logout",authController.logout);
module.exports = router;