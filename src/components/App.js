import React from "react";

import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isZoomPopupOpen, setIsZoomPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (element) => {
    setSelectedCard(element);
    setIsZoomPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsZoomPopupOpen(false);
    //setSelectedCard(null);
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup cardData={selectedCard} onClose={closeAllPopups} isOpen={isZoomPopupOpen} />

      {/* Редактирование аватар */}

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} submitText="Сохранить" onClose={closeAllPopups}>
        <label for="avatar-input" className="popup__label"></label>
        <input name="avatarurl" required id="avatar-input" type="url" className="popup__input popup__input_avatar"
          placeholder="Ссылка на новый аватар" />
        <span className="popup__input-error popup__input-error_avatar-input" id="avatar-input-error">В этом
          поле ошибка</span>
      </PopupWithForm>

      {/* Редактировать профиль */}

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} submitText="Сохранить" onClose={closeAllPopups}>
        <label for="username-input" className="popup__label"></label>
        <input name="profilename" id="username-input" type="text" minlength="2" maxlength="40"
          className="popup__input popup__input_profilename" required />
        <span className="popup__input-error popup__input-error_username-input" id="username-input-error">В этом поле
          ошибка</span>

        <label for="about-input" className="popup__label"></label>
        <input name="profileabout" id="about-input" type="text" minlength="2" maxlength="200"
          className="popup__input popup__input_profileabout" required />
        <span className="popup__input-error popup__input-error_about-input" id="about-input-error">В этом поле
          ошибка</span>
      </PopupWithForm>

      {/* Добавить место */}

      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} submitText="Создать" onClose={closeAllPopups} >
        <label for="place-name-input" className="popup__label"></label>
        <input name="placetext" required id="place-name-input" type="text" minlength="2" maxlength="30"
          className="popup__input popup__input_place" placeholder="Какое место хотите добавить?" />
        <span className="popup__input-error popup__input-error_place-name-input" id="place-name-input-error">В этом
          поле ошибка</span>

        <label for="place-image-input" className="popup__label"></label>
        <input name="placeurl" required id="place-image-input" type="url"
          className="popup__input popup__input_place" placeholder="Есть ссылка на фото оттуда?" />
        <span className="popup__input-error popup__input-error_place-image-input" id="place-image-input-error">В
          этом поле ошибка</span>
      </PopupWithForm>

    </div>
  );
}
