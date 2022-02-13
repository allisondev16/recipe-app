

function Recipe(props) {


    return (
        <div className="recipeItem">
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
            <span>{props.readyInMinutes}</span>
        </div>
    );
}


export default Recipe;