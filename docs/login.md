# 📧 Login API 文档

登录接口。

---

## 📮 1. 发送邮箱验证码

* **URL**：`POST /api/send-email-captcha`
* **功能**：向用户邮箱发送验证码（验证码有效期为 5 分钟）
* **Content-Type**：`application/json`

### 🔸 请求参数

| 参数名   | 类型     | 是否必填 | 描述      |
| ----- | ------ | ---- | ------- |
| email | string | 是    | 用户的邮箱地址 |

### 🔹 请求示例

```json
{
  "email": "user@example.com"
}
```

### ✅ 响应示例（成功）

```json
{
  "success": true,
  "message": "验证码发送成功",
  "data": {}
}
```

### ❌ 响应示例（失败）

```json
{
  "success": false,
  "message": "发送失败原因",
  "data": {}
}
```

---

## ✅ 2. 验证邮箱验证码

* **URL**：`POST /api/verify-email-captcha`
* **功能**：验证用户提供的验证码是否正确
* **Content-Type**：`application/json`

### 🔸 请求参数

| 参数名     | 类型     | 是否必填 | 描述       |
| ------- | ------ | ---- | -------- |
| email   | string | 是    | 用户的邮箱地址  |
| captcha | string | 是    | 用户收到的验证码 |

### 🔹 请求示例

```json
{
  "email": "user@example.com",
  "captcha": "123456"
}
```

### ✅ 响应示例（验证成功）

```json
{
  "success": true,
  "message": "验证码验证成功",
  "data": {
    "cookie": "cook"
  }
}
```

### ❌ 响应示例（验证码错误）

```json
{
  "success": false,
  "message": "验证码错误",
  "data": {}
}
```

### ❌ 响应示例（验证码过期）

```json
{
  "success": false,
  "message": "验证码已过期或无效",
  "data": {}
}
```

---