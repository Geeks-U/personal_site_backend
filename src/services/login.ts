import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import crypto from 'crypto'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.qq.com'
const SMTP_PORT = process.env.SMTP_PORT || 587
const SMTP_USER = process.env.SMTP_USER || '1728392583@qq.com'
const SMTP_PASS = process.env.SMTP_PASS || 'gxatpkvnquwhdfij'
const FROM_EMAIL = process.env.FROM_EMAIL || '1728392583@qq.com'

// 生成验证码
const generateCaptcha = (): string => {
  return crypto.randomBytes(3).toString('hex').toUpperCase() // 生成 6 位验证码
}

// 发送验证码到邮箱
const sendVerificationCaptcha = async (email: string, captcha: string): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  } as SMTPTransport.Options)

  const mailOptions = {
    from: FROM_EMAIL,
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${captcha}`
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

// 主函数，接收邮箱，生成验证码并发送
export const servSendEmailCaptcha = async (email: string): Promise<{ captcha: string, success: boolean, message: string }> => {
    const captcha = generateCaptcha()
    const success = await sendVerificationCaptcha(email, captcha)
    if (success) {
      return { captcha: captcha, success: true, message: '发送成功' }
    } else {
      return { captcha: '', success: false, message: '发送失败' }
    }
}
