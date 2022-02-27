import { useEffect } from 'react';

function Category() {

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
            params: { tags: 'breakfast', number: '4' },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then(response => {
            console.log('breakfast', response.data);
            setBreakfastRecipes(response.data.recipes);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <div>

        </div>
    )
}

export default Category;