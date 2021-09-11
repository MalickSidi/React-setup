git init
npx gitignore node
mkdir src build
npm init -y
touch src/index.html
npm i react react-dom
npm i -D typescript @types/react @types/react-dom
npx tsc --init
touch src/index.tsx src/App.tsx
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
touch babel.config.json
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader webpack-merge
npm i -D css-loader style-loader sass-loader sass
#npm i -D eslint-plugin-react eslint-plugin-hooks
#npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npx eslint --init
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npx prettier-init