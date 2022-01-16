# Documentation
- *install dependencies:* npm install
- *main command:* node app.js
     - this will run the server on http://localhost:3000/
     - to register, navigate to http://localhost:3000/account/signup
        - will check validity of inputs, and log errors
        - once frontend is developed, will flash alerts on the form itself (flash middleware is already integrated, just need to access it)
     - successful registration will redirect to home page
- Uses express routing and middleware
- Uses Model View Controller architecture
    - Models to define collections schemas in the database
    - Routes to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
    - Controllers (functions) to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
    - Views (templates) used by the controllers to render the data.
        - We use the EJS templating engine

## Authentication
### Routes
- /account/login
- /account/signup
- There are others, defined in /routes/account.js

## Database
- Currently connected to a mongodb atlas database
- The connection URL is defined in .env.auth
- If you have been invited to the mongodb atlas project, you can access the dashboard here: https://cloud.mongodb.com/v2#/org/61e337ec3e411279740705df/projects
- This dashboard allows manual manipulation of the database, but is not necessary

*Collections:*
    - users

## Running Databse Locally
- If you want to host a mongodb database locally instead of using the one connected to mongodb atlas, you should make the mongoose connection prioritize LOCAL_URI
- This should be the path to a local mongodb database set up in the following way:
    - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
    - brew services start mongodb-community@5.0
    - mongosh
    - Note: make sure to kill the sever when you are done
        - brew services stop mongodb-community@5.0 
