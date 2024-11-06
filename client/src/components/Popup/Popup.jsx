import { useRef } from "react";

import "./Popup.css";

export default function Popup(props) {
  const userNameRef = useRef(null);
  const overlayRef = useRef(null);
  const getUserName = () => {
    props.useName(userNameRef.current.value);
    localStorage.setItem("username", userNameRef.current.value);
    overlayRef.current.classList.remove("overlay--active");
    document.body.style.overflow = "auto";
  };
  return (
    <div className="overlay overlay--active" ref={overlayRef}>
      <div className="popup">
        <p className="popup__heading">Как тебя зовут?</p>
        <input
          ref={userNameRef}
          type="text"
          className="popup__user-name"
          placeholder="Ваше имя..."
        />
        <button onClick={getUserName} className="popup__confirm">
          Запомнить
        </button>
      </div>
    </div>
  );
}
