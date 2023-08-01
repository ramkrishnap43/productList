# ProductList Web App

This web application allows users to view a  list of products and perform CRUD operations (Create, Read, Update, Delete) on the product list.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB


## Installation

1. Clone the repository
2. Create Two folders one is for Frontend (Client) And Another is for Backend

## Client =>

Create three pages a) index.html  b) index.css  c)index.js

## a) index.html -> 
Here I create form tag and inside that tag some input and button tags are there.

## b) index.css -> 
Link index.html to index.css file and write css properties in the index.css file

## c) index.js -> 
Firstly call all the element with the help of their id. Write a fetch function which return all the data. Also create one submit button. when user click on the submit button it send the data to the server via POST method.

## Backend =>
## npm Packages -> 
  1. express
  2. mongoDB
  3. mongoose (MongoDB driver for Node.js)
  4. dotenv

     In this backend file which creates some end points for our application. I create MVC pattern so our code looks good.
     ## Folder Structure
     
     ## 1. Model folder ->
             Where schema is created it defines the structure of our application.
     ## 2. Routes folder ->
             It creates some endpoints
     ## 3. Config folder ->
             It gives connection to our mongoDB database
     ## 4. index.js ->
             Wrap all the application into this folder and run the application on given localhost


     ## API Endpoints =>

      * GET /: Fetches a list of all products.
      * POST /create: Adds a new product to the list.
      * PATCH /update/:id: Updates an existing product by ID.
      * DELETE /delete/:id: Deletes a product by ID.
       


## App Functionality

- Create a new product: Fill out the form on the web page and click the "Submit" button to add a new product to the list.
- Update an existing product: Click the "Edit" button next to a product, make the desired changes, and click the "Submit" button to update the product.
- Show product list: The product list will be displayed on the main page of the web application.
- Delete a product: Click the "Delete" button next to a product to remove it from the list.
