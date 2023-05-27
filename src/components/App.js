import React from "react";

import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { api } from "../utils/Api";

export function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isZoomPopupOpen, setIsZoomPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useEffect({})

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error) => console.log(`ошибка: ${error}`))
  } 

  const handleCardClick = (element) => {
    setSelectedCard(element);
    setIsZoomPopupOpen(true);
  }

  function handleDeleteClick(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card.id))
      })
      .catch((error) => console.log(`ошибка: ${error}`))
  }

  function handleUpdateUser() {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => console.log(`ошибка: ${error}`));
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsZoomPopupOpen(false);
  }
  
  React.useEffect(() => {

    api.getUserInfo()
        .then(({ name, about, avatar }) => {
            setUserName(name);
            setUserAbout(about);
            setUserAvatar(avatar);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
            {/* Поддерево, в котором будет доступен контекст */}

      <div className="root">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteClick}/>
        <Footer />
        <ImagePopup cardData={selectedCard} onClose={closeAllPopups} isOpen={isZoomPopupOpen} />

        {/* Редактирование аватар */}

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} submitText="Сохранить" onClose={closeAllPopups}>
          <label className="popup__label"></label>
          <input name="avatarurl" required id="avatar-input" type="url" className="popup__input popup__input_avatar"
            placeholder="Ссылка на новый аватар" />
          <span className="popup__input-error popup__input-error_avatar-input" id="avatar-input-error">В этом
            поле ошибка</span>
        </PopupWithForm>

        {/* Редактировать профиль */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        {/* Добавить место */}

        <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} submitText="Создать" onClose={closeAllPopups} >
          <label className="popup__label"></label>
          <input name="placetext" required id="place-name-input" type="text" minLength="2" maxLength="30"
            className="popup__input popup__input_place" placeholder="Какое место хотите добавить?" />
          <span className="popup__input-error popup__input-error_place-name-input" id="place-name-input-error">В этом
            поле ошибка</span>

          <label className="popup__label"></label>
          <input name="placeurl" required id="place-image-input" type="url"
            className="popup__input popup__input_place" placeholder="Есть ссылка на фото оттуда?" />
          <span className="popup__input-error popup__input-error_place-image-input" id="place-image-input-error">В
            этом поле ошибка</span>
        </PopupWithForm>

      </div>
    </CurrentUserContext.Provider>  
  );
}
