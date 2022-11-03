controlers
    | all of controller js files. controller acceprs request, validates 
    | data and talks to model to fetch/delete data
    | users.js 
    | products.js

models
    | define schemas
    | users.js
    | products.js

views
    | define hbs layous and templates
    | layouts
        | dashboard
        | home pae
    | users.hbs
    | homepage.hbs
    | search.hbs
    | admin.hbs
    | profile.hbs

another route 

user_module
    | controller
    | models
    | service
    | constants

news_module
    | controller
        | static.js - here add a (/news/static/:filename) route, get all the files in the public folder, match the name with the request route and send the file
    | models
    | service
    | constants

products_module
    | controller
    | models
    | service
    | constants

pets_module
    | controller
    | models
    | service
    | constants

client
    | public
        | news.js (in this JS file we are making calls to a third party server)
        | news.css

// advanced

client 
    | news - js, css, images specific for news page
        | index.js (in this JS file we are making calls to a third party server)
        | css
    | home - js, css, images specific to home page
        | index.js
        | index.css
        | png
    | public - shared JS, css, images
        | icon.png - used in every page
        | css - some shared css, maybe you created a button class you want to use every where
        | js - js for showing errors, you want to use every where

views
    | define hbs layous and templates
    | layouts
        | dashboard
        | home pae
    | users.hbs
    | homepage.hbs
    | search.hbs
    | admin.hbs
    | profile.hbs

