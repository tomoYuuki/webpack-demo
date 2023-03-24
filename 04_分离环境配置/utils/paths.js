const path = require("path");
function resolveApp(relativePath = "") {
  // 当前进程的工作目录
  const appDir = process.cwd();

  return path.resolve(appDir, relativePath);
}

module.exports = {
  resolveApp,
};
