import React from "react";


function Main({ doAvatarChanged, doProfileEdited, doCardAded, doCardSelected }) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [elements, setElements] = React.useState([]);

    React.useEffect(() => {

    })

    return (
        <main className="content">

            <section className='profile'>
                <div className='profile__avatar-container'>
                    <img src='{}' alt="фото пользователя"
                        className='profile__avatar' />
                    <img src='{}' alt='Кнопка редактирования аватара'
                        className='profile__avatar-edit' />
                </div>
                <div className="profile__info">
                    <div className="profile__wraper">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button" aria-label="исправить профиль"></button>
                    </div>
                    <p className="profile__about">Исследователь океана</p>
                </div>

                <button type="button" className="profile__add-button" aria-label="добавить новое место"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">

                </ul>
            </section>
        </main>
    );
}

export default Main;