const Header = ({ onMenuClick }) => {
  const logoSrc =
    "https://s3-alpha-sig.figma.com/img/0aa6/e4cb/4892bb3c77e837c57c302d14ed1d280c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbJ0wQjp2fGKVtQ4QzIoSbBlKJGaHSjSQn6sEfoJPnZhpMOFv8Uh3Pn-QLW20l73AJRxJOs7Vmu1e1EboMQYM~RJkqeMVy3cAXuQVjXfNQHfKsA5D17LIa6EBSAYZXiPHzLewqanHzNGFJg0yxvGXQ0L06IYiUuhag-HhI33sl-ARxWhXh0g3SMTMDp0JGyYD3W4rP6KwHoETS5Uxf6wS5PAuswpYTajA0sgnCVNejSQ74v8P1bTWxx0qnlq0rzP-TWARZhTSu5mWQGarQWYW5M76CTH5rcNxTWugBmzpFKueU6xqBHMRHGhW2QeB~Ti6y7sg-13D5Gtk5xmJ-UrwA__";

  return (
    <header className="w-full h-[8vh] bg-[#650010] flex justify-between items-center p-2">
      <img src={logoSrc} alt="Logo" width="100vw" height="40vh" />
      <nav className="flex gap-5 pr-4">
        <button className="bg-transparent" aria-label="Search">
          {/* Search Icon */}
          <svg
            width="19"
            height="18"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 19L15.4158 14.657C16.1999 13.9142 16.8219 13.0322 17.2463 12.0616C17.6707 11.091 17.8891 10.0507 17.8891 9.00011C17.8891 7.94952 17.6707 6.90922 17.2463 5.9386C16.8219 4.96798 16.1999 4.08606 15.4158 3.34318C14.6316 2.6003 13.7007 2.01102 12.6762 1.60897C11.6516 1.20693 10.5535 1 9.44457 1C8.33561 1 7.23751 1.20693 6.21297 1.60897C5.18843 2.01102 4.25751 2.6003 3.47336 3.34318C1.88969 4.84349 1 6.87835 1 9.00011C1 11.1219 1.88969 13.1567 3.47336 14.657C5.05702 16.1574 7.20493 17.0002 9.44457 17.0002C11.6842 17.0002 13.8321 16.1574 15.4158 14.657Z"
              stroke="#FDFEFF"
              width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="bg-transparent"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H18M1 8H18M1 15H18"
              stroke="#FDFEFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
