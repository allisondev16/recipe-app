

function Recipe(props) {


    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} width="500px" />
        </div>
    );
}


export default Recipe;