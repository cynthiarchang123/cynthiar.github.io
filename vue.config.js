// const path = require('path')

// module.exports = {
//   chainWebpack: config => {
//     const apiClient = process.env.VUE_APP_API_CLIENT // mock or server
//     config.resolve.alias.set(
//       'api-client',
//       path.resolve(__dirname, `src/api/${apiClient}`)
//     );
//   }
//   // publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/'
// }
module.exports = {
  publicPath:process.env.NODE_ENV === 'production'
    ? '/cynthiar.github.io/www/'
    : '/'
}