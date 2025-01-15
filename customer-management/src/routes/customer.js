const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer");
const {isAuth,isAdmin} = require("../../../common/middlewares/auth");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Müşteri işlemleri
 */

/**
 * @swagger
 * /customers/{customerId}:
 *   delete:
 *     summary: Belirtilen müşteri ID'sine göre müşteri siler
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: Silinecek müşterinin benzersiz ID'si
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Müşteri başarıyla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Müşteri başarıyla silindi."
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
router.delete("/customers/:customerId",isAuth,isAdmin,customerController.delete_customers);

/**
 * @swagger
 * /customers/{customerId}:
 *   get:
 *     summary: Belirtilen müşteri ID'sine göre müşteri bilgilerini getirir
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: Müşterinin benzersiz ID'si
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Müşteri başarıyla getirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Müşteri başarıyla getirildi."
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
 *                     phone:
 *                       type: string
 *                       example: "111111"
 *                     company:
 *                       type: string
 *                       example: "company"
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
router.get("/customers/:customerId",isAuth,isAdmin,customerController.get_customer_byId);

/**
 * @swagger
 * /customers/{customerId}:
 *   patch:
 *     summary: Var olan müşteri bilgilerini günceller
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: Güncellenecek müşterinin benzersiz ID'si
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
 *                 description: Müşterinin adı
 *               surname:
 *                 type: string
 *                 description: Müşterinin soyadı
 *               email:
 *                 type: string
 *                 description: Müşterinin e-posta adresi
 *               phone:
 *                 type: string
 *                 description: Müşterinin telefon numarası
 *               company:
 *                 type: string
 *                 description: Müşterinin şirketi
 *     responses:
 *       200:
 *         description: Müşteri başarıyla güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Müşteri başarıyla güncellendi."
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
 *                     phone:
 *                       type: string
 *                       example: "111111"
 *                     company:
 *                       type: string
 *                       example: "company"
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
router.patch("/customers/:customerId",isAuth,isAdmin,customerController.update_customers);

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Yeni bir müşteri oluşturur
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - email
 *               - phone
 *               - company
 *             properties:
 *               name:
 *                 type: string
 *                 description: Müşterinin adı
 *               surname:
 *                 type: string
 *                 description: Müşterinin soyadı
 *               email:
 *                 type: string
 *                 description: Müşterinin e-posta adresi
 *               phone:
 *                 type: string
 *                 description: Müşterinin telefon numarası
 *               company:
 *                 type: string
 *                 description: Müşterinin bağlı olduğu şirket
 *     responses:
 *       201:
 *         description: Müşteri başarıyla oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Müşteri başarıyla kaydedildi."
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
 *                     phone:
 *                       type: string
 *                       example: "111111"
 *                     company:
 *                       type: string
 *                       example: "company"
 *       404:
 *         description: Bu e-posta zaten kayıtlı!
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
 *                   example: "Bu e-posta zaten kayıtlı!"
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
router.post("/customers",isAuth,isAdmin,customerController.create_customers);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Müşterileri listeler
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         required: false
 *         description: Sıralama kriteri
 *         schema:
 *           type: string
 *           default: createdAt
 *       - in: query
 *         name: order
 *         required: false
 *         description: Sıralama yönü
 *         schema:
 *           type: string
 *           default: ASC
 *       - in: query
 *         name: name
 *         required: false
 *         description: Müşterinin adı
 *         schema:
 *           type: string
 *       - in: query
 *         name: surname
 *         required: false
 *         description: Müşterinin soyadı
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         required: false
 *         description: Müşterinin e-posta adresi
 *         schema:
 *           type: string
 *       - in: query
 *         name: company
 *         required: false
 *         description: Müşterinin bağlı olduğu şirket
 *         schema:
 *           type: string
 *       - in: query
 *         name: phone
 *         required: false
 *         description: Müşterinin telefon numarası
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Müşteriler başarıyla listelendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Müşteri başarıyla getirildi."
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
 *                       phone:
 *                         type: string
 *                         example: "111111"
 *                       company:
 *                         type: string
 *                         example: "company"
 *       404:
 *         description: Müşteriler bulunamadı
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
 *                   example: "Müşteriler bulunamadı."
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
router.get("/customers",isAuth,isAdmin,customerController.get_customers);

module.exports = router;