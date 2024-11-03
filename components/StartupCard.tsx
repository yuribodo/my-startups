import { EyeIcon, Share2Icon, BookmarkIcon, CalendarIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const formattedDate = new Date(post?._createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Card className="w-[340px] border border-gray-200 shadow-sm hover:shadow-lg rounded-lg transition-all duration-300 group">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
            <CalendarIcon className="w-4 h-4 mr-1" /> {formattedDate}
          </span>
          <div className="flex items-center space-x-1 text-gray-600">
            <EyeIcon className="w-4 h-4" />
            <span className="text-sm">{post?.views?.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="space-y-2">
         
          
          <div className="flex items-center justify-between">
            <div>
              <p>{post?.author?.name}</p>
              <CardTitle className="text-2xl font-bold leading-tight text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                <Link href="/user/name">
                  {post?.title}
                </Link>
              </CardTitle>
            </div>
            
            <Avatar className="border border-gray-200 ml-2">
              <AvatarImage src={post?.author?.image || "https://github.com/shadcn.png"} />
              <AvatarFallback>{post?.author?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <CardDescription className="text-gray-500 font-medium">
            {post?.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src="/startupimg.jpg" 
            alt={post?.title || "Startup image"} 
            layout="fill"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-4 text-gray-600">
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          Ler mais
        </button>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Share2Icon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <BookmarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default StartupCard
