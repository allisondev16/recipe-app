# About This App

Deploy URL: https://recipe-app-olive.vercel.app/

- A responsive Recipe app using HTML, CSS, ReactJS, third-party API, and Axios
- Allowed users to search for a recipe
- Implemented a page component for the details of each recipe

# What I Learned

- use useEffect with an empty array as dependency to execute a method or function only once

```JS
useEffect(() => {
    axios.request(options).then(function (response) {
      fetchData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}, [])
```

- [How to Pass Props Through React Router's Link Component](https://ui.dev/react-router-pass-props-to-link/)

```JSX
{recipes.map((recipe, index) => <Link to="recipe" state={recipe.id} key={index}><Recipe name={recipe.name} image={recipe.image} /></Link>)}
```

```JSX
<Route path="recipe" element={<RecipeDetails />} />
```

```JSX
function RecipeDetails() {
    const location = useLocation();
    const id = location.state;

    return (
        <div>
            <h1>Hello World {id}</h1>

        </div>
    )
}
```

- [How to .split() and keep the delimiter(s) (Using Regular Expression)](https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65)

```JS
const test = information.instructions;
console.log(test.split(/(?=[.?!])|(?<=[.?!])/g));
```

- [I just learned that an ordered list needs padding to show the numbers.](https://www.sitepoint.com/community/t/ol-tag-not-displaying/5325)

- JavaScript String replace()

- [Newline in react string (string with \n)](https://forum.freecodecamp.org/t/newline-in-react-string-solved/68484)

```CSS
white-space: pre-wrap;
```

- [What is the difference between id and class in CSS, and when should I use them?](https://stackoverflow.com/questions/12889362/what-is-the-difference-between-id-and-class-in-css-and-when-should-i-use-them)

  > A good way to remember this is a class is a type of item and the id is the unique name of an item on the page.

- [Why do empty JavaScript arrays evaluate to true in conditional structures?](https://stackoverflow.com/questions/19146176/why-do-empty-javascript-arrays-evaluate-to-true-in-conditional-structures)

  > You should be checking the .length of that array to see if it contains any elements.

- [Never remove CSS outlines](https://www.a11yproject.com/posts/never-remove-css-outlines/#:~:text=Using%20the%20CSS%20rule%20%3Afocus,of%20focus%20for%20keyboard%20users.)

  > Using the CSS rule :focus { outline: none; } to remove an outline on an object causes the link or control to be focusable, but removes any visible indication of focus for keyboard users.

- [Set height as a ratio of width with only css](https://stackoverflow.com/questions/40062241/set-height-as-a-ratio-of-width-with-only-css)
  > CSS has a built-in property called aspect-ratio just assign it to the element after height or width has been defined.

```CSS
.recipeItem {
    margin-bottom: 50px;
    text-align: center;
    width: calc(25% - 1.5rem);
    aspect-ratio: 3/2;
}
```

- [How to get rid of extra space below svg in div element](https://stackoverflow.com/questions/24626908/how-to-get-rid-of-extra-space-below-svg-in-div-element)

  > You need `display: block;` on your svg.

- [Responsive Navbar Tutorial](https://www.youtube.com/watch?v=At4B7A4GOPg)

- [CSS The !important Rule](https://www.w3schools.com/css/css_important.asp)
  > The `!important` rule in CSS is used to add more importance to a property/value than normal.

```CSS
.navbar__main .search-icon {
    display: block !important;
}
```

- [Render HTML string as real HTML in a React component](https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component)
  > If you are dealing with HTML Entities, You need to decode them before sending them to dangerouslySetInnerHTML that's why it's called "dangerously" :)

```JSX
<div dangerouslySetInnerHTML={{ __html: information.summary }} className="summary" />
```

- [CSS styles disappear after refresh in React app](https://stackoverflow.com/questions/43763110/css-styles-disappear-after-refresh-in-react-app)
  from:

```HTML
<link rel="stylesheet" href="styles.css">
```

to:

```HTML
<link rel="stylesheet" href="/styles.css">
```

- [What is the difference between "screen" and "only screen" in media queries?](https://stackoverflow.com/questions/8549529/what-is-the-difference-between-screen-and-only-screen-in-media-queries)

- [Why does the order of media queries matter in CSS?](https://stackoverflow.com/questions/8790321/why-does-the-order-of-media-queries-matter-in-css)

- [React js: Error: useLocation() may be used only in the context of a <Router> component](https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com)

```JS
// So i fixed like this structure

// index.js

import { BrowserRouter } from 'react-router-dom'

...
    <BrowserRouter>
        <App />
    </BrowserRouter>
...
```

- [react-router scroll to top on every transition](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)

```JS
// Rather then doing it in every page you can do this in App.js

import { useLocation } from "react-router-dom";

const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);
// Setting location in useEffect will make sure to scroll to top on every path change.
```

- [`theme-color` changes the color of the mobile browser.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)

```html
<meta name="theme-color" content="#fff" />
```

- [RegExp](https://regex101.com/)
  `/` An unescaped delimiter must be escaped; in most languages with a backslash `\`

```JS
    // Remove the list tags
    const instruction = instruction0.replace(/(<ol>|<li>|<\/li>|<\/ol>)/g, "");
```

References:
https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
https://stackoverflow.com/questions/50158063/how-to-remove-from-string-in-javascript

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
