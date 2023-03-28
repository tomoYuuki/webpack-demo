module.exports = {
  projectName: '06_vue-app',
  privateKey: '/Users/yuki/.ssh/id_rsa',
  passphrase: '',
  readyTimeout: 20000,
  cluster: [],
  prod: {
    name: 'prod-env',
    script: 'npm run build',
    host: '114.132.204.237',
    port: 22,
    username: 'root',
    password: 'Login@2022',
    distPath: 'dist',
    webDir: '/www/server/nginx/html/yuki/my-test-project',
    bakDir: '/www/server/nginx/html/backup',
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true
  }
}
