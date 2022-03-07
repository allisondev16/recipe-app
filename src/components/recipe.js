import { AccessTime } from '@mui/icons-material';

function Recipe(props) {


    return (
        <div>
            <div className="recipeItem__img">
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className="recipeItem__card">
                <h3>{props.name}</h3>
                <span className="readyInMinutes">
                    <AccessTime className="icon" />
                    <span className='text'>{props.readyInMinutes} mins</span>
                </span>
            </div>
        </div>
    );
}


export default Recipe;