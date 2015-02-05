# StealJS Progressive Loading

Go to [StealJS.com](http://stealjs.com/) for step-by-step instructions to create this app from scratch.


## Instructions
Prerequities: Ensure [Node.js](http://nodejs.org/) along with NPM are properly installed. You will also need a webserver. If you don't have one, you can install this simple command-line [http-server](https://www.npmjs.com/package/http-server).

##### Clone
Clone the repo to your local machine.

```
> git clone https://github.com/stealjs/progressive-loading.git
```

##### Install
Install Node modules and Bower components

```
> cd progressive-loading
> npm install
> bower install
```

##### Build
Run the `steal build` task to have steal-tools analyze the page and create progressive loading bundles.

```
> ./node_modules/steal-tools/bin/steal build --main=app --config=site/config.js
```

##### Serve
Spin up your webserver or run `http-server`

```
> http-server
```

Open `http://localhost:8080/site/site.html` in browser.

Open the Network panel in Developer Tools and click the `signup` and `login` links. Steal-tools builds a graph of the required files, minifies and concatenates then into progressively loaded bundles.
