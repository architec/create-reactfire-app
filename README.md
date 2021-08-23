# Create Reactfire App

- [User Guide](https://github.com/FirebaseExtended/reactfire/blob/main/docs/quickstart.md/) – How to develop apps using React web app and Firebase by Reactfire.
- [Template Repo](https://github.com/arctdav/react-web-firebase-starter)
Create Reactfire App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/arctdav/create-reactfire-app/issues/new).<br>
If you have questions or need help, please email [arctdav](mailto:arctdav@gmail.com).

## Quick Overview

> Copy config from [Download Firebase config file or object](https://support.google.com/firebase/answer/7015592)

Before starting, please change the following files according to your projects on Firebase website. <br>
**Change /src/firebaseConfig.js and /firebaserc**

```sh
npx create-reactfire-app my-app
cd my-app
npm install --g firebase-tools
firebase login
firebase init
npm start
```

If you've previously installed `create-reactfire-app` globally via `npm install -g create-reactfire-app`, we recommend you uninstall the package using `npm uninstall -g create-reactfire-app` or `yarn global remove create-reactfire-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

Then, run `npm run deploy`, then `npm run deploy` to start hosting on firebase.

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine**. We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-reactfire-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm i -g create-reactfire-app
create-reactfire-app my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── firebaseConfig.json
    └── setupTests.js
    └── reportWebVitals.js
```

**Please change firebaseConfig.json according to your Firebase project, before starting**
No complicated folder structures.
<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start`

### `npm run build`

### `npm deploy`

## Credits

This project exists thanks to all the people who [contribute](https://github.com/arctdav).<br>

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

- https://github.com/w3cj/create-express-api
- https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/
- https://github.com/FirebaseExtended/reactfire/blob/main/docs/quickstart.md/
- https://github.com/facebook/create-react-app/blob/main/README.md
- https://github.com/arctdav/react-web-firebase-starter

## License

Create Reactfire App is open source software [licensed as MIT](https://github.com/facebook/create-reactfire-app/blob/main/LICENSE).
