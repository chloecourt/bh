import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Tickets</a>
          <a href="#">Merch</a>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};
