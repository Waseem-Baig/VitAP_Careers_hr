const Navbar = () => {
  return (
    <div className="pl-5 flex items-center w-full h-10 gap-2">
      <button className="text-black font-montserrat text-xs font-medium">
        Home
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="5"
        viewBox="0 0 4 5"
        fill="none"
      >
        <path
          d="M1.26322 0L0.859375 0.416667L2.99399 2.5L0.859375 4.58333L1.26322 5L3.85937 2.5L1.26322 0Z"
          fill="black"
        />
      </svg>
      <button className="text-black font-montserrat text-xs font-medium">
        Career
      </button>
    </div>
  );
};

export default Navbar;
