import Link from "../Link/Link";

import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <h3 className="card__heading">Подписка</h3>
      <p className="card__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deserunt
        sequi. Maxime, consequatur? Quia ab a deleniti, ad labore vero,
        provident sequi in illum amet ipsa atque odio? Laboriosam, eius!
      </p>
      <p className="card__price">500 руб/мес</p>
      <Link href="#" text="Learn more" />
    </div>
  );
}
