import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [placeName, setPlaceName] = React.useState('');
    const [placeLink, setPlaceLink] = React.useState('');

    React.useEffect(() => {
        setPlaceName('');
        setPlaceLink('');
      }, [isOpen]);

    function handleNameChange(e) {
        setPlaceName(e.target.value);
    }

    function handleLinkChange(e) {
        setPlaceLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({
          name: placeName,
          link: placeLink
        });
      } 

    return (
        <PopupWithForm name="place" title="Новое место" isOpen={isOpen} submitText="Создать" onClose={onClose} onSubmit={handleSubmit}>
          <label className="popup__label"></label>
          {/* value={placeName} */}
          <input onChange={handleNameChange} name="placetext" required id="place-name-input" type="text" minLength="2" maxLength="30"
            className="popup__input popup__input_place" placeholder="Какое место хотите добавить?" />
          <span className="popup__input-error popup__input-error_place-name-input" id="place-name-input-error">В этом
            поле ошибка</span>

          <label className="popup__label"></label>
          {/* value={placeLink}  */}
          <input onChange={handleLinkChange} name="placeurl" required id="place-image-input" type="url"
            className="popup__input popup__input_place" placeholder="Есть ссылка на фото оттуда?" />
          <span className="popup__input-error popup__input-error_place-image-input" id="place-image-input-error">В
            этом поле ошибка</span>
        </PopupWithForm>
    )

}