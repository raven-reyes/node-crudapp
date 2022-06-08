## This is a REST API crud application build using Nodejs libraries such as expressJS, morgan,dotenv, ejs , axios, mongoose, favicon and nodemon.
## In this project you can create new employee , read the employees , update existing employee and delete an employee. You can test this operations using POSTMAN which is an application used for API testing.
modules explanation
## expressJS-Express. js is a free and open-source web application framework for Node. js. It is used for designing and building web applications quickly and easily.
## morgan - used to generate logs. it is used as a logger
## dotenv - dotenv allows you to separate secrets from your source code. like passwords , apikeys 
## ejs - it is a templating engine for nodejs. allows you to generate html pages 
## axios - Axios is a simple promise based HTTP client for the browser and node.js. it is used to make http requests. it is like an intermediary between frontend and backend
## mongoose - Mongoose.js connects your MongoDB clusters or collections with your Node.js app. It enables you to create schemas for your documents
## favicon - favicon is used to create a logo for your application
## nodemon - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## The modules/dependencies are installed using - npm install.
## To run the application ,,, connect your server to any port eg 3000 or 8080 and thats it.
## Then run npm start or nodemon server.js or node server.js

##RESULTS
After running the application, you will see a page like(index.js_EIMS_homepage.png) on the browser which displays the details of all the employees in stored in the system.
On that page you can perform other CRUD Operations like ; Adding new employees using the(new employee button),
updating details existing employees  using the(pencil button) and delete employees usin the (X) button.
After adding an employee to your application , their information is stored in MongoDB Atlas which is a global cloud database service managed and run by the team  behind MongoDB.
The database i used in this project is called(users) and the collection is(userdbs) as shown in (database_image.png).
