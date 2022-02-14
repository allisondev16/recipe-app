import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Recipe(props) {


    return (
        <div className="recipeItem">
            <img src={props.image} alt={props.name}></img>
            <div className="recipeItem__card">
                <h3>{props.name}</h3>
                <span className="readyInMinutes">
                    <AccessTimeIcon className="icon" />
                    <span className='text'>{props.readyInMinutes} mins</span>
                </span>
            </div>
        </div>
    );
}


export default Recipe;