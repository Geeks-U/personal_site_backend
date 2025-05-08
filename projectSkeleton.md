my-express-app/
├── src/                             # 📁 所有源码都放在这里，构建产物不混杂
│   ├── index.ts                     # 🚀 程序入口：创建 HTTP 服务并监听端口
│   ├── app.ts                       # 🧠 Express 实例配置：中间件、路由挂载等
│
│   ├── routes/                      # 📁 路由定义目录，组织 URL 路径映射
│   │   └── user.route.ts            # 定义 `/users` 路由及其处理函数的绑定
│
│   ├── controllers/                 # 📁 控制器目录，处理请求并返回响应
│   │   └── user.controller.ts       # 用户相关接口的逻辑控制器
│
│   ├── services/                    # 📁 业务逻辑处理层，controller 会调用这里
│   │   └── user.service.ts          # 用户模块的业务处理，比如数据库操作封装
│
│   ├── models/                      # 📁 数据模型（如 Mongoose 或自定义结构）
│   │   └── user.model.ts            # 用户数据结构定义或数据库模型定义
│
│   ├── middlewares/                # 📁 中间件目录，处理权限、异常、日志等通用逻辑
│   │   └── error.middleware.ts      # 统一错误处理中间件
│
│   ├── config/                      # 📁 配置项，如数据库连接、第三方服务密钥等
│   │   └── db.ts                    # 数据库连接设置
│
│   ├── types/                       # 📁 自定义类型定义目录（特别适合 TS 项目）
│   │   └── express.d.ts             # 扩展 Express 的 Request 类型等（可选）
│
│   └── utils/                       # 📁 工具函数/类，比如日志、加密、校验等
│       └── logger.ts                # 日志工具封装（console/winston/pino 等）
│
├── public/                          # 📁 静态资源目录，可用于托管前端页面或图片等
│   └── ...                          # 例如 index.html、CSS 文件、图片等
│
├── .env                             # 🌱 环境变量文件，存放密钥、端口等敏感配置
├── .gitignore                       # 🙈 Git 忽略规则，防止上传 node_modules 等
├── tsconfig.json                    # ⚙️ TypeScript 编译配置文件
├── package.json                     # 📦 项目依赖、启动脚本、元信息等
├── nodemon.json                     # 🔁 nodemon 配置，开发时自动重启服务
└── README.md                        # 📘 项目文档，介绍用途、安装方法等
