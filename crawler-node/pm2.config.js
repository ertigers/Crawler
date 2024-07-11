// 名称任意，按照个人习惯来
module.exports = {
  apps: [
    {
      name: 'crawler-app-node', // 应用名称
      script: './app.js', // 启动文件地址
      cwd: './', // 当前工作路径
      watch: true,
      ignore_watch: [
        // 忽视这些目录的变化
        'node_modules',
        'logs',
        'public',
      ],
      exec_mode: "cluster_mode",     // 应用启动模式，支持 fork 和 cluster 模式
      env: {
        NODE_ENV: 'development', // 设置运行环境，此时process.env.NODE_ENV的值就是development
        ORIGIN_ADDR: ''
      },
      env_production: {
        NODE_ENV: 'production',
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      instances: 'max',  // 启动两个实例
      max_restarts: 10,  // 最大重启次数
    },
  ],
};