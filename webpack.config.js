const path = require(`path`);

module.exports = {
  mode: `development`, // режим сборки
  entry: `./src/main.js`, // точка входа
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`, // подключение sourcemap
  devServer: {
      contentBase: path.join(_dirname, `public`), // Где искать сборку
      publicPath: `http://localhost:8080/`, // Веб адрес сборки
      hot: true,  // Автоматическая перезагрузка страницы
      compress: true
  }
};
