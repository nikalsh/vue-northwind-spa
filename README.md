# northwind-spa

- A Vue.js project

## Build Setup

``` bash
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


## Easy deployment
``` Deployment
Build your vue code using npm run build command. 
This will create a folder dist which should have index.html file and static folder.
Copy dist folder into your server code repository.

These 2 lines make sure that vue and express app are coming from the same server. 
   app.use('/static', express.static(__dirname + "../public/dist/static/")); 
   app.get('/', function(req,res) {
      res.sendFile('index.html', { root: __dirname + '../public/dist/' });
   });