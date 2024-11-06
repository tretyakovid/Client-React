import { forwardRef, useState } from "react";

import Clock from "../Clock/Clock";
import Popup from "../Popup/Popup";
import "./Welcome.css";

function Welcome({ props }, ref) {
  const [userName, setUserName] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : null
  );
  const getUserName = () => {
    if (!localStorage.getItem("username")) {
      return <Popup useName={setUserName} />;
    } else {
      document.body.style.overflow = "auto";
      return;
    }
  };
  const timeOfDay = (() => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 4) return ["night", "Доброй ночи"];
    if (hour >= 4 && hour < 12) return ["morning", "Доброе утро"];
    if (hour >= 12 && hour < 17) return ["afternoon", "Добрый день"];
    if (hour >= 17 && hour <= 23) return ["evening", "Добрый вечер"];
  })();
  return (
    <>
      <section
        style={{ backgroundImage: `url(/assets/img/${timeOfDay[0]}.jpg)` }}
        className="welcome"
        id="home"
        ref={ref}
      >
        <div className="gradient">
          <div className="wrapper welcome__wrapper">
            <div className="welcome__text">
              <h1 className="welcome__heading">
                {timeOfDay[1]}, {userName}!
              </h1>
              <p className="welcome__subheading">
                Спасибо, что посетили наш сайт.
              </p>
            </div>
          </div>
          <Clock />
        </div>
      </section>
      {getUserName()}
    </>
  );
}
export default forwardRef(Welcome);
