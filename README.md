# Geekpad

<img width="385" alt="ReactNotepadApp-HomeImage" src="https://github.com/MarcoAG-115/ReactNotepadApp/assets/57389247/347eddfa-04db-4712-b714-ed63384dda7a">

A small web / mobile app that brings notepad calculator features to mobile devices. Inspired by the Numi macOS app, Geekpad allows mobile users to create and edit notes while taking advantage of built-in, native calculator features. Small, everyday calculations and note taking can become less brainy with Geekpad. 

Some uses consist of:

Maintain shopping lists with automatically calculated totals,

<img width="443" alt="ReactNotepadApp-ListImage" src="https://github.com/MarcoAG-115/ReactNotepadApp/assets/57389247/990cd65b-3d4d-4b9e-836a-e8a32e5c8c34">


Type out entire equations for visualization & get the result,

<img width="443" alt="ReactNotepadApp-EquationImage" src="https://github.com/MarcoAG-115/ReactNotepadApp/assets/57389247/9192266d-4333-4bba-bb58-7fc3d216a607">


Separate important numbers from your wall of text,

<img width="443" alt="ReactNotepadApp-RecipeImage" src="https://github.com/MarcoAG-115/ReactNotepadApp/assets/57389247/32dcbcc2-7457-44cb-9680-64fa3cc214f6">


& more.

## Preview

The following video provides a brief preview of the application's complete functionality.

https://github.com/MarcoAG-115/ReactNotepadApp/assets/57389247/28f4c47f-855f-43fa-8fe0-ab02051478f2

## Description

A Native React application that has been primarily developed to work on mobile devices, specifically the latest iPhone models (12, 13, & 14). The Notepad app takes the framework of a basic note app and adds calculator functionality. Aside from creating, searching, & editing notes, users can type out numeric equations to see the results. The calculator functionality is limited to mostly arithmetic operations (/, *, +, -, %, ^).
The following characters and phrases can be used:

Addition
```
5+5
5 plus 5
```
Subtraction
```
4-1
4 minus 1
```
Multiplication
```
4*4
4 times 4
```
Division
```
10/2
10 divided by 2
```
Exponential
```
2^3
```
Remainder / mod
```
6 mod 3
```
The application will follow the standard order of operations (PEMDAS). Additionally, the app will keep track of a total sum at the bottom of each note. This sum is calculated by using all the numbers displayed on the right side of the notepad text area. The app can be downloaded as an iPhone app if it is ran through Xcode, but it can also work as a web app.

## Download (TBC)

The plan is to make this project available on the App Store as a free download.


## Project Installation

The project folder can be downloaded from this page and executed through the command line with the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Additional Commands

In the project directory, you can also run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Frameworks

The foundation of this application is mainly sourced by bootstrapping Create React App (Native React). Some of the original code for the note functionality is sourced from a tutorial (https://www.youtube.com/watch?v=_3ooazcK4TI). Otherwise, the UI/UX design and the majority of the functionality are proprietary.

## Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Authors
* **Marco Gonzalez** - *Initial work* - [MarcoAG-115](https://github.com/MarcoAG-115)

## Acknowledgements

* [Tutorial for basic notes app](https://www.youtube.com/watch?v=_3ooazcK4TI)
* Inspired by [Numi](https://numi.app/) for Mac
