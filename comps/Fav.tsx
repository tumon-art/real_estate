const Fav = ({ noBorder }: { noBorder?: boolean }) => {
  return (
    <div>
      <button className="hidden sm:block">
        <svg
          className={`cursor-pointer hover:opacity-90 hover:scale-110 transition-opacity
        ${
          noBorder !== true
            ? "bg-sky-500 outline-3 outline outline-sky-200 p-1 rounded-full h-6"
            : "h-4"
        } `}
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={2}
        >
          <title> Demo </title>
          <path
            d="M4.318 6.318a4.5 
        4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
        7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
};
export default Fav;
