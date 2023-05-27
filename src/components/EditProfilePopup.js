import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup({isOpen, onClose}) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleNameChange(e) {
        setUserName(e.target.value);
    }

    function handleAboutChange(e) {
        setUserAbout(e.target.value);
    }

    function handleSubmit() {
        // тут надо проверить наоменования полей
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} submitText="Сохранить" onClose={onClose} onSubmit={handleSubmit}>
                <label className="popup__label"></label>
                <input value={userName} onChange={handleNameChange} name="profilename" id="username-input" type="text" minLength="2" maxLength="40"
                    className="popup__input popup__input_profilename" required />
                <span className="popup__input-error popup__input-error_username-input" id="username-input-error">В этом поле
                    ошибка</span>

                <label className="popup__label"></label>
                <input value={userAbout} onChange={handleAboutChange} name="profileabout" id="about-input" type="text" minLength="2" maxLength="200"
                    className="popup__input popup__input_profileabout" required />
                <span className="popup__input-error popup__input-error_about-input" id="about-input-error">В этом поле
                    ошибка</span>
            </PopupWithForm>
    )
}