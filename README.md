# Galbraith Society Website
- Server: Node, Express
- Templating: Jade
- Styles: Sass
- Build System: Gulp

# Development Requirements
- Git
- NodeJS (0.12.X or newer preferred)
- Bower
- Heroku Toolbelt
- Ruby and scss-lint gem

# Development Set Up
- `git clone` the repo
- `npm install` to install node modules (make sure your `NODE_ENV` is set to development and not production or you will not install `devDependencies` in `package.json`)
- `bower install` to install bower packages
- `export PORT=4000` (or whatever port you want) in your terminal
- run `gulp serve` and make changes to the website as needed
- when finished run `gulp build` again just to make sure
- once finished `git commit` to the origin remote
- when you want to push the website live `git commit` to the heroku remote

# Commands
- `gulp build` to `clean` all existing `dist` files and `build` from scratch
- `gulp serve` to host a local server that will serve the website and refresh itself automatically when a file is changed (via BrowserSync)