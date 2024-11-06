import { pageConfig } from "../../config/pages.config";
import Link from "../Link/Link";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="header__nav">
          <Link href={pageConfig.home} text="Главная" />
          <Link href={pageConfig.prices} text="Прайс" />
          <Link href={pageConfig.contacts} text="Контакты" />
        </nav>
      </div>
    </header>
  );
}
