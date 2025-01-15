const express = require("express");
const router = express.Router();

const noteController = require("../controllers/note");
const { isAuth, isAdmin } = require("../middlewares/auth");


/**
 * @swagger
 * tags:
 *   name: Notlar
 */

/**
 * @swagger
 * /notes/{noteId}:
 *   patch:
 *     summary: Bir notu güncelle
 *     description: Belirli bir notu başlık ve içerik ile günceller.
 *     tags: [Notlar]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         description: Güncellenecek notun ID'si
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "John"
 *               content:
 *                 type: string
 *                 example: "Doe"
 *     responses:
 *       200:
 *         description: Not başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Not başarıyla güncellendi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Yeni Başlık"
 *                     content:
 *                       type: string
 *                       example: "Yeni içerik burada."
 *                     customer:
 *                          type: object
 *       404:
 *         description: Not bulunamadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Not bulunamadı!"
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
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.patch("/notes/:noteId",isAuth, isAdmin,noteController.update_note);

/**
 * @swagger
 * /notes/{noteId}:
 *   delete:
 *     summary: Bir notu sil
 *     description: Belirli bir notu siler.
 *     tags: [Notlar]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         description: Silinecek notun ID'si
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Not başarıyla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Not başarıyla silindi."
 *       404:
 *         description: Not bulunamadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Not bulunamadı!"
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
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.delete("/notes/:noteId",isAuth, isAdmin,noteController.delete_note);

/**
 * @swagger
 * /notes/{noteId}:
 *   get:
 *     summary: Bir notu getir
 *     description: Belirli bir notu getirir.
 *     tags: [Notlar]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         description: Getirilecek notun ID'si
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Not başarıyla getirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Not başarıyla getirildi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Not Başlığı"
 *                     content:
 *                       type: string
 *                       example: "Not içeriği burada."
 *                     customer:
 *                          type: object
 *       404:
 *         description: Not bulunamadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Not bulunamadı!"
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
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.get("/notes/:noteId",isAuth, isAdmin,noteController.get_note_byId);

/**
 * @swagger
 * /notes/{customerId}:
 *   post:
 *     summary: Yeni bir not oluştur
 *     description: Belirli bir müşteri için yeni bir not oluşturur.
 *     tags: [Notlar]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: Notun ilişkilendirileceği müşterinin ID'si
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Not başlığı
 *               content:
 *                 type: string
 *                 description: Not içeriği
 *     responses:
 *       201:
 *         description: Not başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Not başarıyla eklendi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Yeni Not Başlığı"
 *                     content:
 *                       type: string
 *                       example: "Yeni içerik burada."
 *                     customer:
 *                          type: object
 *       404:
 *         description: Müşteri bulunamadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Müşteri bulunamadı."
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
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.post("/notes/:customerId",isAuth, isAdmin,noteController.create_note);
module.exports = router;