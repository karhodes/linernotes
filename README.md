# LinerNotes
LinerNotes Application to search &amp; find new music  
Author:  Kelly Rhodes

## Configure Database:
1.  In a new terminal window, log into mysql:
  * ```$ mysql.server start```
2.  Log in as root: 
  * ```$ mysql -u root```
3.  Restart mysql server:
  * ```$ mysql.server restart```
4.  Create the database linernotes:
  * ```mysql> create database linernotes;```
5.  Create a .env file for your local environmental variables; store in the main directory.
```
DB_HOST = 127.0.0.1
DB_NAME = gravity
MYSQL_NAME = {local user} // usually root
MYSQL_PASS = {local password} // standard install set to blank
DB_PORT = {local port running mysql} // standard port is 3306
```    

## Initial Project Setup:
1. Clone the repo to your local machine
2. In a new terminal window, navigate to the repo folder; install NPM:
  * ```$ npm install```
3. Install Gulp globally:
  * ```$ npm install --g gulp```
4. Install Gulp locally:
  * ```$ npm install gulp --save```
5. Run Gulp
  * ```$ gulp```
6. Navigate in your browser to localhost:7000

## Update Database (after schema changes):
1.  From the terminal window running mysql, drop the previous database:
  * ```mysql> drop database linernotes;```
2.  Create the new database:
  * ```mysql> create database linernotes;```  

## To Run Tests (Development only):
1. Install Karma globally via terminal:
  * ```$ npm install --g karma-cli```
2. Navigate to repo folder via terminal & run Karma:
	* ```$ karma```

## Colophon:
1. MEAN Stack
  * [MySQL & Sequelize](http://docs.sequelizejs.com/en/latest/):  Database 
  * [AngularJS](https://angularjs.org/):  Front End Framework 
  * [Express](http://expressjs.com/):  Node Framework 
  * [NodeJS](https://nodejs.org/en/): Event Framework 
2. Package Managers and Dependencies
  * [Gulp](http://gulpjs.com/):  Package Manager 
  * [Bower](http://bower.io/):  Front End Package Manager 
  * [Body-Parser](https://github.com/expressjs/body-parser):  Node.js body parsing middleware 
3. Real Time Developement
  * [Nodemon](http://nodemon.io/): Automatic Server Restart based on changes  
  * [Socket.io](http://socket.io/):  Allows streaming 
4. CSS Tools
  * [Bootstrap](http://getbootstrap.com/):  Front End Framework
  * [SASS](http://sass-lang.com/):  Pre-compiled CSS
5. Testing Tools
  * [Karma](http://karma-runner.github.io/0.13/index.html): JS Test Runner
  * [Protractor](https://angular.github.io/protractor/#/):   End to end testing for Angular JS
  * [Chai](http://chaijs.com/):  Javascript Assertation Library  
  * [Mocha](https://mochajs.org/):  Javascript Testing Framework 


