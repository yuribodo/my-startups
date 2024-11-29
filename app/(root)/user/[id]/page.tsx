
import React from "react";
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { Camera, Linkedin, Twitter, MapPin, Briefcase, StarIcon } from "lucide-react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  const userData = {
    name: "João Silva",
    role: "Startup Founder & Innovator",
    profileImage: "https://utfs.io/f/sgFqvRaqcKuwTmRWPh0BCdF9bIapE7m5AsWitDBRSYeNuMVQ",
    backgroundImage: "/api/placeholder/1200/400",
    bio: "Transforming ideas into revolutionary digital solutions",
    stats: {
      startups: 3,
      totalFunding: "R$ 2.5M",
      industries: ["Tech", "AI", "Sustainability"],
    },
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  };

  const startups = [
    {
      id: 1,
      name: "QuantumAI",
      description: "Revolucionando inteligência artificial",
      heroImage: "/api/placeholder/1000/600",
      technologies: ["Machine Learning", "Deep Tech"],
      status: "Scaling",
    },
    {
      id: 2,
      name: "EcoTech Solutions",
      description: "Inovação sustentável para um futuro verde",
      heroImage: "/api/placeholder/1000/600",
      technologies: ["Green Tech", "Renewable Energy"],
      status: "Funding",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
   
      <motion.div
        className="relative h-[500px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 transform scale-105 blur-sm"
          style={{
            backgroundImage: `url(${userData.backgroundImage})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="relative z-10 container mx-auto px-4 pt-24 flex flex-col items-center">
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={userData.profileImage}
              alt={userData.name}
              className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-3 rounded-full">
              <Camera className="text-white" size={24} />
            </div>
          </motion.div>
          <motion.div
            className="text-center mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {userData.name}
            </h1>
            <p className="text-xl text-gray-300 mt-2">{userData.role}</p>
            <p className="max-w-2xl mx-auto text-center mt-4 text-gray-400">
              {userData.bio}
            </p>
          </motion.div>
        </div>
      </motion.div>

    
      <motion.div
        className="bg-gray-900/50 py-12 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: Briefcase, label: "Startups", value: userData.stats.startups },
            { icon: StarIcon, label: "Total Funding", value: userData.stats.totalFunding },
            { icon: MapPin, label: "Industries", value: userData.stats.industries.join(", ") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="mx-auto text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-blue-300">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

  
      <motion.div
        className="container mx-auto px-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Minhas Startups
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <motion.div
              key={startup.id}
              className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
      
              <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={startup.heroImage}
                  alt={startup.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
                    {startup.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mt-2 line-clamp-2">
                    {startup.description}
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {startup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      startup.status === "Scaling"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    } px-3 py-1 rounded-full text-xs md:text-sm`}
                  >
                    {startup.status}
                  </span>
                  <div className="flex space-x-4">
                    <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="text-gray-400 hover:text-blue-400" size={20} />
                    </a>
                    <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="text-gray-400 hover:text-blue-400" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default page;
