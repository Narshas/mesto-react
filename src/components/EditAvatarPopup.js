import React from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = React.useRef();
    
    React.useEffect(() => {
        avatarRef.current.value = ''
      }, [currentUser]); 

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      } 

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} submitText="Сохранить" onClose={onClose} onSubmit={handleSubmit}>
          <label className="popup__label"></label>
          <input ref={avatarRef} name="avatarurl" required id="avatar-input" type="url" className="popup__input popup__input_avatar"
            placeholder="Ссылка на новый аватар" />
          <span className="popup__input-error popup__input-error_avatar-input" id="avatar-input-error">В этом
            поле ошибка</span>
        </PopupWithForm>
    )
}