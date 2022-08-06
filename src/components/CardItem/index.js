
import  './index.css'

const cardItem = props => {
    const { cardDetails } = props 
    const { className, imgUrl, heading, description} = cardDetails 

    return { 
        <li className = {${className} card-item}>
            <h1 className = "card-heading">{ heading }</h1>
            <p className = "card-description"> { description }</p>
            <div className = "img-container">
                <img src = {imgUrl} className = "logo" alt = {heading}/>
            </div>
        </li>
    }
}

export default cardItem
