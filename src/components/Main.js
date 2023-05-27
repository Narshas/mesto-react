import React from "react";
import { Card } from "./Card"
import { api } from "../utils/Api";
import avatarButton from "../images/Vector.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
    //const [userName, setUserName] = React.useState('');
    //const [userAbout, setUserAbout] = React.useState('');
    //const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    // React.useEffect(() => {

    //     api.getUserInfo()
    //         .then(({ name, about, avatar }) => {
    //             setUserName(name);
    //             setUserAbout(about);
    //             setUserAvatar(avatar);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    React.useEffect(() => {

        api.getDefoltElements()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);



    const cardsList = cards.map((card) => {
        return (
            (<Card key={card._id} onCardClick={onCardClick} card={card} onCardLike={onCardLike} onCardDelete={onCardDelete}/>)
        )
    });

    return (
        <main className="content">

            <section className='profile'>
                <div className='profile__avatar-container'>
                    <img src={currentUser.avatar} alt="фото пользователя"
                        className='profile__avatar' />
                    <img src={avatarButton} alt='Кнопка редактирования аватара'
                        className='profile__avatar-edit' onClick={onEditAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__wraper">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" aria-label="исправить профиль" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__about">{currentUser.about}</p>
                </div>

                <button type="button" className="profile__add-button" aria-label="добавить новое место" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cardsList}
                </ul>
            </section>
        </main>
    );
}