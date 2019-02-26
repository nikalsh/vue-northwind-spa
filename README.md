# northwind-spa

- A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

- For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Developing Vue.js + Express
In our case we're building a RESTful API with Express.  
Locally this poses a problem, since we'd want to simulate the production
strucutre as closely as possible while still having the beneift of utilizing
the incredible webpack dev server. 

Two servers running locally at different ports
will make the browser go crazy and prevent API calls to due to CORS. 
Instead of messing with source code in the server app, the best
solution is to set up a proxyTable in vue directly.

Add the following to your ..config/index.js 
```javascript
proxyTable: {
      '/api': {
      target: 'http://localhost:8001',
      changeOrigin: true
      },
```
Add as many URLs as nessecary

## Deploying Vue.js + Express
Build your vue code using npm run build command. 
This will create a folder dist which should have index.html file and static folder.
Copy dist folder into your server code repository.

These 2 lines make sure that vue and express app are coming from the same server. 

```javascript
   app.use(express.static(path.join(__dirname, '/public')));
   app.use('/static', express.static(path.join(__dirname, "../public/dist/static/"))); 
   
   app.get('/', function(req,res) {
      res.sendFile('index.html', { root: path.join(__dirname, '../public/dist/') });
   });
```
