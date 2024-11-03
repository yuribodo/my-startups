import { p } from "framer-motion/client";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{query: string}>
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 34,
      author: {_id: 1, name: 'Eduard'},
      _id: 1,
      description: "Description",
      image: "https://www.fumec.br/wp-content/uploads/2024/07/team_party2-01-2048x970.jpg",
      category: "Robots",
      title: "Our Robots",
    }
  ]

  return (
    <>
      <section className="w-full pattern-diagonal bg-blue-950 min-h-[530px] flex justify-center items-center flex-col py-10 px-6">
        <h2 className="px-6 uppercase py-3 font-bold text-black bg-green-500 animate-slideUp">
          Connect with Entrepreneurs
        </h2>

        <h1 className="heading text-center text-white mt-4 animate-fadeIn">
          Discover New Startups, <br /> Find the Next Opportunity
        </h1>

        <p className="bg-white px-6 py-1 text-black font-semibold mt-4 animate-slideUp">
          Show your business to the world 🌍
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-30 font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="grid grid-cols-5">
            {posts?.length > 0 ? (
                posts.map((post: StartupCardType, index: number) => (
                    <StartupCard key={post?._id} post={post}/>
                ))
            ) : (
                <p>No startups found</p>
            )}
        </ul>
      </section>
    </>
  );
}