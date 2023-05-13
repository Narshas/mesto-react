import React from "react";
import Card from "./Card"
import { Api } from "../utils/Api";
import { avatarButton } from '../images/Vector.svg'



export function Main({ onEditProfile, onAddPlace, onEditAvatar, onZoomClick }) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [elements, setElements] = React.useState([]);

    React.useEffect(() => {

        //api здесь

        const elementsList = elements.map((element) => {
            return (
                (<Card
                    key={element._id}
                    onZoomClick={onZoomClick}
                    element={element}
                />)
            )
        });
    })

    return (
        <main className="content">

            <section className='profile'>
                <div className='profile__avatar-container'>
                    <img src={userAvatar} alt="фото пользователя"
                        className='profile__avatar' />
                    <img src={avatarButton} alt='Кнопка редактирования аватара'
                        className='profile__avatar-edit' onClick={onEditAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__wraper">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" aria-label="исправить профиль" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userAbout}</p>
                </div>

                <button type="button" className="profile__add-button" aria-label="добавить новое место" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {elementsList}
                </ul>
            </section>
        </main>
    );
}