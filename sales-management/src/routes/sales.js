const express = require("express");
const router = express.Router();

const salesController = require("../controllers/sales");
const {isAuth,isSales} = require ("../../../common/middlewares/auth");

/**
 * @swagger
 * tags:
 *   - name: Sales
 */

/**
 * @swagger
 * /sales/{saleId}:
 *   patch:
 *     summary: "Belirtilen satış kaydını günceller"
 *     tags: 
 *       - Sales
 *     parameters:
 *       - in: path
 *         name: saleId
 *         required: true
 *         description: "Güncellenecek satış kaydının ID'si"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               note:
 *                 type: string
 *                 example: "Güncel not"
 *               status:
 *                 type: string
 *                 example: "Tamamlandı"
 *     responses:
 *       200:
 *         description: "Satış kaydı başarıyla güncellendi."
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
 *                   example: "Satış kaydı başarıyla güncellendi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     status:
 *                       type: string
 *                       example: "Kapandı"
 *                     note:
 *                       type: string
 *                       example: "Kapandı"
 *                     statusChangeDate:
 *                       type: date
 *                       example: "2025-01-14 15:58:07"
 *                     sale:
 *                          type: object
 *                  
 *       404:
 *         description: "Satış bilgileri bulunamadı!."
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
 *                   example: "Satış bilgileri bulunamadı!"
 *       500:
 *         description: "Sunucu hatası"
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
 *                   example: "Bir hata oluştu."
 *                 errMsg:
 *                   type: string
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.patch("/sales/:saleId",isAuth,isSales,salesController.update_sales);

/**
 * @swagger
 * /sales/{customerId}:
 *   get:
 *     summary: "Belirli bir müşteriye ait satış bilgilerini getirir"
 *     tags:
 *       - Sales
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: "Müşteri ID'si"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Satış bilgileri başarıyla getirildi."
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
 *                   example: "Satış bilgileri başarıyla getirildi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     status:
 *                       type: string
 *                       example: "Kapandı"
 *                     note:
 *                       type: string
 *                       example: "Kapandı"
 *                     statusChangeDate:
 *                       type: date
 *                       example: "2025-01-14 15:58:07"
 *                     sale:
 *                          type: object
 *       404:
 *         description: "Satış bilgileri bulunamadı."
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
 *                   example: "Satış bilgileri bulunamadı!"
 *       500:
 *         description: "Sunucu hatası"
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
 *                   example: "Bir hata oluştu."
 *                 errMsg:
 *                   type: string
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.get("/sales/:customerId",isAuth,isSales,salesController.get_sales_customer_byId);

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: "Yeni bir satış kaydı oluşturur"
 *     tags:
 *       - Sales
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: "Beklemede"
 *               note:
 *                 type: string
 *                 example: "İlk sipariş notu"
 *     responses:
 *       201:
 *         description: "Satış başarıyla kaydedildi."
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
 *                   example: "Satış başarıyla kaydedildi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     newSale:
 *                       type: object
 *                       properties:
 *                          id:
 *                              type: integer
 *                              example: 1
 *                          customerId:
 *                              type: integer
 *                              example: 1
 *                     newSalesStatus:
 *                        type: object
 *                        properties:
 *                          id:
 *                              type: integer
 *                              example: 1
 *                          status:
 *                              type: string
 *                              example: "Kapandı"
 *                          note:
 *                              type: string
 *                              example: "Kapandı"
 *                          statusChangeDate:
 *                              type: date
 *                              example: "2025-01-14 15:58:07"
 *                          saleId:
 *                              type: integer
 *                              example: 1
 * 
 *       404:
 *         description: "Müşteri bulunamadı."
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
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Bir hata oluştu."
 *                 errMsg:
 *                   type: string
 *                   example: "Bilinmeyen bir hata oluştu."
 */
router.post("/sales",isAuth,isSales,salesController.create_sales);

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: "Tüm satış bilgilerini getirir"
 *     tags:
 *       - Sales
 *     responses:
 *       200:
 *         description: "Satışlar başarıyla getirildi."
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
 *                   example: "Satışlar başarıyla getirildi."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        status:
 *                          type: string
 *                          example: "Kapandı"
 *                        note:
 *                          type: string
 *                          example: "Kapandı"
 *                        statusChangeDate:
 *                          type: date
 *                          example: "2025-01-14 15:58:07"
 *                        sale:
 *                          type: object
 *       404:
 *         description: "Satış bilgisi bulunamadı."
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
 *                   example: "Satış bilgisi bulunamadı!"
 *       500:
 *         description: "Sunucu hatası"
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
 *                   example: "Bir hata oluştu."
 *                 errMsg:
 *                   type: string
 *                   example: "Bilinmeyen bir hata oluştu."
 */

router.get("/sales",isAuth,isSales,salesController.get_sales);

module.exports = router;
