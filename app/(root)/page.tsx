
export default function Home() {
  return (
    <>
      <section className="w-full bg-blue-950 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        
        
        <h2 className="px-6 uppercase py-3 font-bold text-black bg-green-500 animate-slideUp">
          Connect with Entrepreneurs
        </h2>

        
        <h1 className="heading text-center text-white mt-4 animate-fadeIn">
          Discover New Startups, <br /> Find the Next Opportunity
        </h1>

        
        <p className="bg-white px-6 py-1 text-black font-semibold mt-4 animate-slideUp">
          Show your business to the world 🌍
        </p>

        <div className="relative w-full max-w-md mt-8 animate-fadeIn">
          <input
            type="text"
            placeholder="Search for startups, opportunities..."
            className="w-full py-3 pl-10 pr-4 text-black rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
