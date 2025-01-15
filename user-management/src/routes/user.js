const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const {isAuth, isAdmin} = require("../../../common/middlewares/auth");

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     tags:
 *       - Users
 *     summary: "Kullanıcıyı ID'ye göre getir"
 *     description: "Belirtilen kullanıcıyı ID'ye göre getirir."
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: "Kullanıcının ID'si"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Kullanıcı başarıyla getirildi."
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
 *                   example: "Kullanıcı başarıyla getirildi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 101
 *                     name:
 *                       type: string
 *                       example: "John"
 *                     surname:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "john.doe@example.com"
 *                     role:
 *                       type: object
 *       404:
 *         description: "Kullanıcı bulunamadı."
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
 *                   example: "Kullanıcı Bulunamadı!"
 *       403:
 *         description: "Kendi bilgilerinizi görüntüleyebilirsiniz."
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
 *                   example: "Sadece kendi bilgilerinizi görüntüleyebilirsiniz!"
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
router.get("/users/:userId",isAuth,isAdmin,userController.get_user_byId);

/**
 * @swagger
 * /users/{userId}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: "Kullanıcı bilgilerini güncelle"
 *     description: "Mevcut kullanıcıyı günceller."
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: "Güncellenecek kullanıcının ID'si"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John"
 *               surname:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *              
 *               role:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: "Kullanıcı başarıyla güncellendi."
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
 *                   example: "Kullanıcı başarıyla güncellendi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 101
 *                     name:
 *                       type: string
 *                       example: "John"
 *                     surname:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "john.doe@example.com"
 *                     role:
 *                       type: object
 *       404:
 *         description: "Kullanıcı bulunamadı."
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
 *                   example: "Kullanıcı Bulunamadı!"
 *       403:
 *         description: "Kendi bilgilerinizi güncelleyebilirsiniz."
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
 *                   example: "Sadece kendi bilgilerinizi güncelleyebilirsiniz!"
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
router.patch("/users/:userId",isAuth,isAdmin,userController.update_user);

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: "Kullanıcıyı sil"
 *     description: "Belirtilen kullanıcıyı siler."
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: "Silinecek kullanıcının ID'si"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Kullanıcı başarıyla silindi."
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
 *                   example: "Kullanıcı başarıyla silindi."
 *       404:
 *         description: "Kullanıcı bulunamadı."
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
 *                   example: "Kullanıcı bulunamadı!"
 *       403:
 *         description: "Sadece kendi bilgilerinizi silebilirsiniz."
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
 *                   example: "Sadece kendi bilgilerinizi silebilirsiniz!"
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
router.delete("/users/:userId",isAuth,isAdmin,userController.delete_user);

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     summary: "Kullanıcı oluştur"
 *     description: "Yeni bir kullanıcı oluşturur."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John"
 *               surname:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               role:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: "Kullanıcı başarıyla oluşturuldu."
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
 *                   example: "Kullanıcı başarıyla oluşturuldu."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 101
 *                     name:
 *                       type: string
 *                       example: "John"
 *                     surname:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "john.doe@example.com"
 *                     role:
 *                       type: object
 *                   
 *       400:
 *         description: "Bu e-posta zaten kullanılıyor."
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
 *                   example: "Bu e-posta zaten kullanılıyor."
 *       
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
router.post("/users",isAuth,isAdmin,userController.create_users);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: "Kullanıcıları listele"
 *     description: "Tüm kullanıcıları listeler."
 *     responses:
 *       200:
 *         description: "Kullanıcılar başarıyla getirildi."
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
 *                   example: "Kullanıcılar başarıyla getirildi."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 101
 *                       name:
 *                         type: string
 *                         example: "John"
 *                       surname:
 *                         type: string
 *                         example: "Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *                       role:
 *                         type: object
 *                         
 *       404:
 *         description: "Kıullanıcı Bulunamadı!"
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
 *                   example: "Kullanıcı Bulunamadı!"
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
router.get("/users",isAuth,isAdmin,userController.get_users);
module.exports = router;