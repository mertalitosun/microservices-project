const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role");
const { isAuth, isAdmin } = require("../middlewares/auth");

/**
 * @swagger
 * /roles/{roleId}:
 *   delete:
 *     tags:
 *       - Roles
 *     summary: "Rol Sil"
 *     description: "Belirtilen rolü siler."
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: Silinecek rolün ID'si
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Role başarıyla silindi."
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
 *                   example: "Role başarıyla silindi."
 *       404:
 *         description: "Role bulunamadı."
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
 *                   example: "Role bulunamadı."
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
router.delete("/roles/:roleId", isAuth, isAdmin, roleController.delete_roles);


/**
 * @swagger
 * /roles/{roleId}:
 *   put:
 *     tags:
 *       - Roles
 *     summary: "Rol Güncelle"
 *     description: "Mevcut rolü günceller."
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: Güncellenecek rolün ID'si
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
 *                 example: "roladı"
 *     responses:
 *       200:
 *         description: "Role başarıyla güncellendi."
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
 *                   example: "Role başarıyla güncellendi."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Admin"
 *       404:
 *         description: "Role Bulunamadı!"
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
 *                   example: "Role Bulunamadı!"
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
router.put("/roles/:roleId", isAuth, isAdmin, roleController.update_roles);

/**
 * @swagger
 * /roles:
 *   post:
 *     tags:
 *       - Roles
 *     summary: "Rol Ekle"
 *     description: "Yeni roller eklenir"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "roladı"
 *     responses:
 *       201:
 *         description: "Rol başarıyla oluşturuldu."
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
 *                   example: "Rol başarıyla oluşturuldu."
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Admin"
 *       400:
 *         description: "Bu role zaten mevcut."
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
 *                   example: "Bu role zaten mevcut."
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
router.post("/roles", isAuth, isAdmin, roleController.create_roles);

/**
 * @swagger
 * /roles:
 *   get:
 *     tags:
 *       - Roles
 *     summary: "Rol Listele"
 *     description: "Roller listelenir"
 *     responses:
 *       200:
 *         description: "Roller getirildi."
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
 *                   example: "Roller getirildi."
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
 *                         example: "Admin"
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
 *                   example: "Bilinmeyen bir hata oluştu"
 */
router.get("/roles", isAuth, isAdmin, roleController.get_roles);

module.exports = router;
