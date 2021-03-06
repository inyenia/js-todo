java script development environment 
================
This is only a test, not a functional application, you can view this demo in http://js-dev-evn.jit.su/

###Stack

* Node.js -> http://nodejs.org/
* Swagger -> https://helloreverb.com/developers/swagger
* mongoDB -> http://www.mongodb.org/
* Angular.js -> https://angularjs.org/
* Bootstrap -> http://getbootstrap.com/
* bower.io -> http://bower.io/

####Manager dependencies
<pre>
	> npm install
	> bower install
</pre>

####Run Data Base
<pre>
	> mongod
</pre>

####Run Server
<pre>
	> node server.js
</pre> 

####Project architecture
<pre>
	+ public 				(frontend folder)
		+ bower_components
			\ angular
			\ bootstrap
			\ jquery
			\ swagger-ui
			
		\ stylesheets
		\ images
		+ app
		    + contact
		        - controller.js 		(angular.js controllers)
		        - services.js 			(angular.js services)
		        \ views 			    (angular.js views)
		            - edit.html
		            - list.html
		    + home
		    + carrier
		    + docs

		app.js 				(routers and swagger doc reader)
		
	+ model 				(data base and swagger models)
	\ services 				(rest services)

	bower.js                (frontend dependencies)
	package.json 			(node dependencies)
	config.js 				(configure enviroment)
	db.js 					(data base manager)
	server.js 				(node.js server)
</pre> 

####Interesting links to install environment

* Install node.js -> http://nodejs.org/download/
* Install mongoDB in OSX -> http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
* Webstorm debugging -> http://blog.jetbrains.com/webstorm/2014/02/running-and-debugging-node-js-application/

####Interesting links to learn

* http://mean.io
* http://carlosazaustre.es/blog/tutorial-ejemplo-de-aplicacion-web-con-angular-js-y-api-rest-con-node/
* https://github.com/wordnik/swagger-node-express
* https://github.com/dgiul/node-swagger-express-mongodb
* https://github.com/Dayde/angularjs-frontend-using-swagger-documentation
* https://github.com/zkirill/nodejs-mongo-angular-crud

* https://github.com/hadiariawan/monode-crud
* https://github.com/juanghurtado/ngbp
* https://github.com/ngbp/ngbp
* https://www.twilio.com/blog/2013/12/votr-part-5-angularjs-crud-restful-apis.html

####Hosting
* https://www.nodejitsu.com

<pre>
	> sudo npm install jitsu -g
	> jitsu deploy
</pre> 

