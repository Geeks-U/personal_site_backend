module.exports = {
  apps: [
    {
      name: 'personal_site_backend', // 应用名称
      script: 'dist/index.js',       // 编译后的 JavaScript 文件路径
      instances: 'max',              // 启动最大实例数（'max' 表示根据 CPU 核心数自动设置）
      exec_mode: 'cluster',          // 使用 cluster 模式，支持负载均衡
      watch: ['dist'],               // 仅监控 dist 文件夹中的变化
      ignore_watch: ['node_modules', 'logs'], // 忽略 node_modules 和 logs 文件夹的变化
      env: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: 8000
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 8000
      },
    },
  ],
};
