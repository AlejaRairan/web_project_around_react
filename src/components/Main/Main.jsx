import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/form/NewCard/NewCard.jsx";
import NewProfile from "./components/form/NewProfile/NewProfile.jsx";
import NewAvatar from "./components/form/NewAvatar/NewAvatar.jsx";
import avatar from "../../images/JacquesCousteau.png";
import editIcon from "../../images/editicon.svg";
import addIcon from "../../images/addicon.svg";
import Card from "./components/Card/Card.jsx";
import { api } from "../Api/Api.jsx";
import { useState, useEffect, use } from "react";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState({ name: "", about: "" });
  const [avatar, setAvatar] = useState("");

  useEffect(() =>{
    api.loadCard()
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, [])
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserData(data);
        setAvatar(data.avatar);
      })
      .catch((err) => console.error("Error fetching user info:", err));
  }, []);


  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newProfilePopup = { title: "Editar perfil", children: <NewProfile /> };
  const newAvatarPopup = { title: "Actualizar avatar",children: <NewAvatar />};
 

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <div className="container">
        <div className="container__avatar">
          <img
            src={avatar}
            alt="Jacques Cousteau"
            className="container__image"
          />
          <button
            aria-label="Add image"
            className="container__avatar-button"
            type="button"
            onClick={() => handleOpenPopup(newAvatarPopup)}
          >
            <img
              src={editIcon}
              alt="Más opciones"
              className="container__edit-icon"
            />
          </button>
        </div>
        <div className="container__details">
          <div>
          <h2 className="container__subtitle" id="nameInput">
            {userData.name}
          </h2>
          <p className="container__description" id="aboutInput">
            {userData.about}
          </p>
          </div>

          <button
            aria-label="Edit profile"
            className="container__edit-button"
            type="button"
            onClick={() => handleOpenPopup(newProfilePopup)}
          >
            <img
              src={editIcon}
              alt="Editar"
              className="container__edit-icon"
              id="openForm"
            />
          </button>
        </div>

        <button
          aria-label="Add card"
          className="container__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={addIcon}
            alt="Más opciones"
            className="container__add-icon"
            id="addButton"
          />
        </button>
      </div>

      <section className="grid">
      {cards.map((card) => (
        <Card
          key={card._id}
          card={{ ...card, handleOpenPopup }}
        />
      ))}
    </section>

      {popup && (
        <Popup 
        onClose={handleClosePopup} 
        title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
