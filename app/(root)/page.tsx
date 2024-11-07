import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}: {
  searchParams: Promise<{query: string}>
}) {

  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });
  console.log(JSON.stringify(posts, null, 2))
    
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

        <ul className="grid grid-cols-3 gap-12">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p>No startups found</p>
            )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}