import { forwardRef } from "react";

import Card from "../Card/Card";
import "./Prices.css";

function Prices({ props }, ref) {
  return (
    <section className="prices" id="prices" ref={ref}>
      <div className="wrapper prices__wrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
export default forwardRef(Prices);
