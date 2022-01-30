

function Recipe(props) {


    return (
        <div className="recipe__container">
            <img src={props.image} alt={props.name}></img>
            <h2 className="recipe__name">{props.name}</h2>
        </div>
    );
}


export default Recipe;