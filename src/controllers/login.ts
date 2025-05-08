import { Request, Response } from "express"

// 业务逻辑
import { servSendEmailCaptcha } from "../services/login"

// 用于存储邮箱和验证码的映射关系
const captchaStore = new Map<string, string>()

// 控制器：发送验证码并返回验证码
export const ctrlSendEmailCaptcha = async (req: Request, res: Response) => {
  const email = req.body.email

  const { captcha, success, message } = await servSendEmailCaptcha(email)

  if (success) {
    captchaStore.set(email, captcha)
    console.log('验证码为：', captcha)

    // 设置定时器：5分钟后删除验证码
    setTimeout(() => {
      captchaStore.delete(email)
    }, 5 * 60 * 1000)

    res.status(200).json({
      success: true,
      message,
      data: {}
    })
  } else {
    res.status(500).json({
      success: false,
      message,
      data: {}
    })
  }
}

// 校验验证码，使用req和res作为参数
export const ctrlVerifyEmailCaptcha = (req: Request, res: Response): void => {
    const { email, captcha } = req.body
  
    const storedCaptcha = captchaStore.get(email)
    if (!storedCaptcha) {
        res.status(400).json({ success: false, message: '验证码已过期或无效', data:{} })
    } else if (storedCaptcha !== captcha) {
      res.status(400).json({ success: false, message: '验证码错误', data:{} })
    } else {
      res.status(200).json({ success: true, message: '验证码验证成功', data:{cookie: 'cook'} })
    }
}
