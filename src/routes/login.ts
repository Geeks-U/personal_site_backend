import { Router } from "express"

// 控制逻辑
import { ctrlSendEmailCaptcha, ctrlVerifyEmailCaptcha, ctrlVerifyToken } from "../controllers/login"

const router = Router()

// 发送邮箱验证码
router.post('/send-emailcaptcha', ctrlSendEmailCaptcha)

// 验证邮箱验证码
router.post('/verify-emailcaptcha', ctrlVerifyEmailCaptcha)

// 验证登录token
router.post('/verify-token', ctrlVerifyToken)

export default router