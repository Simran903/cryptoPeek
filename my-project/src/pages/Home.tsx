const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center pt-12">
        <img src="./home-logo.png" alt="" style={{ width: "250px" }} />
        <div className="flex flex-col justify-center items-center pt-6">
          <h1 className="text-7xl dark:text-lime-400 font-extrabold text-[#382C82]">
            LARGEST
          </h1>
          <h3 className="text-4xl tracking-widest font-semibold pb-8 dark:text-white text-[#9513a1]">
            CRYPTO MARKETPLACE
          </h3>
          <div className="flex flex-col justify-center items-center pt-6">
            <span className="text-sky-950 dark:text-lime-200">
              "Welcome to the world's largest cryptocurrency.
            </span>
            <span className=" text-fuchsia-800 dark:text-lime-200">
              Sign up to explore more about cryptos."
            </span>
          </div>
        </div>
      </div>
      <form className="max-w-md mx-auto pt-6">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 dark:text-lime-700 text-zinc-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(30,27,75,0.5)]"
            placeholder="Search crypto..."
            required
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 inline-flex cursor-pointer h-9 w-max items-center justify-center rounded-full dark:bg-lime-400 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 hover:bg-gradient-to-br text-white text-center"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
