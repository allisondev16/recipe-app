# What i Learned

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
