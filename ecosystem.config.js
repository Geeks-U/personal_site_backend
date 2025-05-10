module.exports = {
  apps: [
    {
      name: 'personal-site-backend',  // 应用名称
      script: 'dist/index.js',          // 编译后的 JavaScript 文件路径
      instances: 'max',               // 启动最大实例数（'max' 表示根据 CPU 核心数自动设置）
      exec_mode: 'cluster',           // 使用 cluster 模式，支持负载均衡
      watch: true,                    // 监听文件变化并重启应用
      env: {
        NODE_ENV: 'development',      // 开发环境变量
        HOST: '0.0.0.0',
        PORT: 9000
      },
      env_production: {
        NODE_ENV: 'production',       // 生产环境变量
        HOST: '0.0.0.0',
        PORT: 8000
      },
    },
  ],
};
