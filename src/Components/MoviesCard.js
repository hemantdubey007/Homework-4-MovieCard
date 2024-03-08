import './MoivesCard.css'
import share from '../Logo/share.png'
import like from '../Logo/like.png'
import review from '../Logo/review.png'

function MoviesCard(props){
    return(
        <div className = 'container'>
            <div className = 'images'>
                <img src = {props.imgSrc}/>
            </div>

            <div className = 'details'>
                <h2 className = 'name'>{props.name}</h2>
                <p> {props.year},  {props.director}</p>
                <p className='time'>{props.duration}</p>
                <p>{props.type}</p>
                <p className = 'About'>About : {props.about}</p>

                <div className='icons'>
                <img src={share} alt = "icon" />
                <img src={like} alt = "icon" />
                <img src={review} alt = "icon" />
                </div>

            </div>
        </div>
    )
}

export default MoviesCard;
