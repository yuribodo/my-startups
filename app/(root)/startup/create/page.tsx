import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Image, Tags, MessageSquare, PresentationIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  p-8">
      <Card className="max-w-2xl mx-auto  backdrop-blur-sm shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-center mb-8">
            <Rocket className="w-8 h-8 text-purple-500 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Launch Your Startup
            </h1>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PresentationIcon className="w-5 h-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Title</h2>
              </div>
              <Input 
                className="border-2 border-purple-100 focus:border-purple-500 transition-colors" 
                placeholder="Enter your startup name"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Description</h2>
              </div>
              <Textarea 
                className="min-h-[120px] border-2 border-purple-100 focus:border-purple-500 transition-colors" 
                placeholder="Describe your startup in detail"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Tags className="w-5 h-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Category</h2>
              </div>
              <Input 
                className="border-2 border-purple-100 focus:border-purple-500 transition-colors" 
                placeholder="e.g., SaaS, FinTech, E-commerce"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Image className="w-5 h-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Media</h2>
              </div>
              <Input 
                className="border-2 border-purple-100 focus:border-purple-500 transition-colors" 
                placeholder="Paste your image or video URL"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PresentationIcon className="w-5 h-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Pitch</h2>
              </div>
              <Textarea 
                className="min-h-[150px] border-2 border-purple-100 focus:border-purple-500 transition-colors" 
                placeholder="Share your elevator pitch"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-2 rounded-full transform transition-transform hover:scale-105"
              >
                Submit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;