import { useLocation } from 'react-router-dom';

function RecipeDetails() {
    const location = useLocation();
    const id = location.state;

    return (
        <div>
            <h1>Hello World {id}</h1>

        </div>
    )
}

export default RecipeDetails;