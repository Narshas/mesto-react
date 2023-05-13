import React from "react";

import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  //const [doPopup]

  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      <ImagePopup></>

      {/* Редактирование профиля */}
      <PopupWithForm></>

      {/* Редактировать аватар */}
      <PopupWithForm></>

      {/* Удалить карточку */}

    </div>
  );
}

export default App;
