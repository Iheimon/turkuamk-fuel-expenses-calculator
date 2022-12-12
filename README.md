# turkuamk-fuel-expenses-calculator

### How to setup

First install all the required modules for the project by running the following command:

```cmd
npm install
```

Then start the project by running the following command:

```cmd
npm start
```

### Project structure

    .
    ├── node_modules            # Node modules required for the project to run
    ├── public                  # Public files that needs to be accessible from the web
    ├── src                     # Source files (*.js|*.jsx|*.css)
    │   ├── components          # Contains all components for the application (every components is inside a its own folder)
    │   ├── context             # Contains context providers for the application
    │   ├── hooks               # Contains hooks for the application
    │   ├── style               # Contains global styles for the application (component specific stylesheets are inside a component folder)
    │   ├── views               # Contains view components (view components does not have any children or styling, only logic)
    │   └── index.js            # The start point of the application (contains only components, nothing else!)
    ├── package.json            # Config file that contains information about the required node modules
    └── README.md               # README file that contains information about the .git project

### TODO's

- [ ] The application fills all requirements that are related to totaling over all cars (2 points)
- [ ] The application fulfills are requirement that are related to totaling over each car separately (6 points)
- [x] The application is divided into components in a justified way (2 points)
- [x] The components are functional components (2 points)
- [x] React hooks are used (3 points)
- [ ] Context API is used to manage state (2 points)
- [x] The application functions without exceptions (2 points)
- [x] The application is styled with css and looks good and specific (3 points)
- [x] Git is used by the group (2 points)
- [x] create_react_app is used (1 point)
- [ ] A new requirement has appeared: Extend the application so that it can also handle nicely the expenses related to the electric cars (it should possible to calculate expenses to both electric and other cars at the same time)(5 points
