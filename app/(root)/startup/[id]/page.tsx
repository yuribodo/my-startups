import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Link, MapPin, Users, Presentation } from 'lucide-react'

interface StartupPost {
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  teamSize?: string;
  location?: string;
  website?: string;
  founderImage?: string;
  founderName?: string;
  founderRole?: string;
  founderBio?: string;
  pitch?: string;
  pitchPoints?: string[];
}

export const experimental_ppr = true

const Page = async ({params} : {params: Promise<{id: string}>}) => {
  const id = (await params).id
  const post: StartupPost = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if(!post) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg">
        <CardHeader className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              {post?.category || 'Technology'}
            </Badge>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {post?.title}
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            {post?.description}
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {post?.image && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post?.title || 'Startup image'}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Team Size</h3>
                  <p className="text-gray-500">{post?.teamSize || '10-50 employees'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-500">{post?.location || 'San Francisco, CA'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Link className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Website</h3>
                  <a href={post?.website} className="text-blue-600 hover:text-blue-800">
                    {post?.website || 'Visit Website'}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Founder</h3>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post?.founderImage || "https://github.com/shadcn.png"} />
                  <AvatarFallback>FD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {post?.founderName || 'John Doe'}
                  </h4>
                  <p className="text-gray-500">
                    {post?.founderRole || 'CEO & Co-founder'}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {post?.founderBio || 'Passionate about building innovative solutions'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-12 border-t pt-8">
            <div className="flex items-center space-x-3 mb-6">
              <Presentation className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Startup Pitch</h2>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  {post?.pitch || `Nossa startup está revolucionando o mercado através de soluções inovadoras que 
                  combinam tecnologia de ponta com necessidades reais do mercado. Com uma abordagem única, 
                  estamos transformando a maneira como as pessoas interagem com [área de atuação].

                  Nossa solução não apenas resolve problemas existentes, mas também cria novas 
                  oportunidades para nossos usuários. Com métricas comprovadas de sucesso e um time 
                  altamente qualificado, estamos prontos para escalar e atingir novos mercados.

                  Buscamos parceiros estratégicos que compartilhem nossa visão de futuro e queiram 
                  fazer parte desta jornada de transformação.`}
                </p>
                {post?.pitchPoints && (
                  <ul className="mt-6 space-y-2">
                    {post.pitchPoints.map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm mr-3">
                          {index + 1}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page