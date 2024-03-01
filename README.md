1. npm init -y
2. npm install eslint eslint-config-airbnb-base eslint-plugin-import --save-dev
3. npm install eslint-plugin-prettier --save-dev
4. npm install eslint-config-prettier --save-dev
5. npm install webpack webpack-cli --save-dev
6. npm install --save-dev style-loader css-loader
7. npm install --save-dev csv-loader xml-loader
8. npm uninstall IF ANYTHING is not needed

9. npm install --save-dev webpack-dev-server
10. npm run build

11. remember to add a .gitignore file

.eslintrc.js ...

module.exports = {
env: {
browser: true,
es2021: true,
},
extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
overrides: [
{
env: {
node: true,
},
files: ['.eslintrc.{js,cjs}'],
parserOptions: {
sourceType: 'script',
},
},
],
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
},
rules: {
quotes: ['error', 'single'],
},
};

.eslintignore ...

./node_modules
./dist

.gitignore ...

node_modules/
node/
