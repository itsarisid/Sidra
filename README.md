### SIDRA

This is a simple [Electron](https://electronjs.org/) + [React.js](https://reactjs.org/) template (with live reload). It was designed to work without the need of a development server running in the background, like so many other templates, and it's hence free of cross domain request constraints ([CORS](https://reactjs.org/)).

## Installing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/itsarisid/Sidra.git my-app
# Go into the repository
cd my-app
# Install dependencies
npm install
```

## Running

```
npm run start
```

## Testing

The tool of choice is [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) as used at Facebook. Create files with the extension `*.test.js` and they will be run through

```
npm run test
```

## Packaging

Replace the icon inside the `build` folder and run

```bash
npm run release
```

Check the `dist` folder for the app


## How Electron Works with React

This template compiles all `*.js` files in `src` into standard JS and copies it to `app`. There it includes `*.html` and `*.css` together with the `main.js` start file. From then it runs and packages using `gulp` as run through `npm`.

## Extending the Template

Some useful tools include:

1. [Spectron](https://electronjs.org/spectron)
2. [Karma](https://karma-runner.github.io/2.0/index.html) + [Jasmine](https://jasmine.github.io/)
3. [Ant Design](https://ant.design/) (a React based UI Framework)


## Copyright

The template is made available through the [Creative Commons Licence](https://creativecommons.org/publicdomain/zero/1.0/). The logo icon was provided by [Vecteezy](https://www.vecteezy.com/).

