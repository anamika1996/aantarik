# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
git remote set-url origin https://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@github.com/Aantarik/aantarik.git
ng serve --proxy-config proxy.conf.json
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
cart ->
product count increment, decrement -> done
delete from cart, total price change based on products addition or deletion -> pending

product->
add product to cart, modal appears after adding -> done
add to wishlist, adding duplicate items -> pending

wishlist ->
wishlist icon addition in header
delete -> pending

For deploying frontend on netlifly:

Build command: ng build --prod
Publish directory: dist/MyApp (you can get this from angular.json file, follow this directory, projects-> architect -> build ->options->utputpath, here it is "MyApp")

if node version used in your project and node version used in netlifly do not match then declare eenvironment variables
NODE_VERSION and NPM_VERSION.

For deploying backend on render:

Build Command: npm install
Start Command: node server.js
mention repository and branch name

if services are deployed in different domain(ex:render.com) and frontend is deployed in another domain(ex:netlifly.com) then we have to use _redirects file to manage api calls from frontend to backend.

/api/*  https://aantarik.onrender.com/api/:splat  200 (this is for routing api calls from frontend to backend)
/*  /index.html 200  (this is for SPA)
