
import { useState, useEffect } from 'react'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import { api } from './utils/Api.jsx';
import CurrentUserContext from './contexts/CurrentUserContext.js';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
  api.loadCard()
    .then((data) => setCards(data))
    .catch((err) => console.error(err));
}, []);

const handleCardLike = async (card) => {
  const isLiked = card.isLiked;
  await api
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    })
    .catch((err) => console.error(err));
};

const handleCardDelete = async (cardId) => {
  await api
    .deleteCard(cardId)
    .then(() => {
      setCards((state) => state.filter((card) => card._id !== cardId));
    })
    .catch((err) => console.error(err));
};

const handleAddPlaceSubmit = (name, link) => {
  api.createCard(name, link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
    })
    .catch((err) => console.error(err));
};

  useEffect(() => {
  api
    .getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => console.error(err));
}, []);

const handleUpdateUser = (data) => {
  api.updateUserInfo(data)  
    .then((newData) => {
      setCurrentUser(newData);
    })
    .catch((err) => console.error(err));
};

const handleUpdateAvatar = (data) => {
  
    api.updateUserInfo(data.avatar)
    .then((newData) => {
      setCurrentUser(newData);
    })
    .catch((err) => console.error(err));
};

  return (
<CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar  }}>
   <div className="page__content">
    <Header />
    <Main
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      onAddPlaceSubmit={handleAddPlaceSubmit}
    />
    <Footer />
  </div>
</CurrentUserContext.Provider>
 );
}

export default App

