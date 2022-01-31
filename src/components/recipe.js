

function Recipe(props) {


    return (
        <div className="recipeItem">
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
        </div>
    );
}


export default Recipe;