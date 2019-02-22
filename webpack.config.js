const path = require(`path`);

module.exports = {
  mode: `development`, // режим сборки
  entry: `./src/main.js`, // точка входа
  output: { // 
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  }
};
