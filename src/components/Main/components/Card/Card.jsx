import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
    const { name, link, isLiked, handleOpenPopup} = props.card;
    const imageComponent = {title:"Vista de imagen", children: <ImagePopup card={props.card} onClose={handleOpenPopup}/>}
  return (
    <li className="card">
      <img 
      className="card__image" 
      src={link} 
      alt={name}
      onClick={() => handleOpenPopup(imageComponent)}
       />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}