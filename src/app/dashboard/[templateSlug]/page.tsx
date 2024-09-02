"use client";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { contentTemplates } from '@/lib/content-templates';
import React, { useState } from 'react';
import { Loader } from "lucide-react";
import { Input } from '@/components/ui/input';
import Editor from '@/components/Editor';
import { chatSession } from '@/lib/gemini-ai';
import axios from 'axios';
import { title } from 'process';

interface templateCategoryProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateCategoryProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );
  const generateAIcontent = async(formData: FormData)=>{
    setisLoading(true);
    try {
      let dataset = {
        title: formData.get('title'),
        description: formData.get('description'),
      }
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalPrompt = JSON.stringify(dataset) + ", " + selectedPrompt;

      const res = await chatSession.sendMessage(finalPrompt);
      setAIOutput(res.response.text());

      const response = await axios.post("/api/",{
        title: dataset.title,
        description: res.response.text(),
        templateUsed: selectedTemplate?.name,
      
      })
      console.log("response : ", response);
      setisLoading(false);

    } catch (error) {
      console.log(error);
    }

  }
  const onSubmit = async (formData: FormData) => {
    generateAIcontent(formData);
    console.log("form Submitted");
  };

  return (
    <div className="mx-auto max-w-4xl py-8 px-5">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="flex justify-center items-center text-xl font-semibold mb-4 gap-2">
          {selectedTemplate?.icon  && <selectedTemplate.icon />} {selectedTemplate?.name}</h2>
        <form action={onSubmit} className="space-y-6">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug} className="space-y-2">
              <label className="text-sm font-medium">{form.label}</label>
              {form.field === "input" ? (
                <Input name="title" className="w-full mt-1" />
              ) : (
                <Textarea name="description" className="w-full mt-1" />
              )}
            </div>
          ))}
          <div className="text-right">
            <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
              {isLoading ? (
                <Loader className="animate-spin mr-2" />
              ) : (
                "Generate Content"
              )}
            </Button>
          </div>
        </form>
      </div>
      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput}/>
      </div>
    </div>
  );
};

export default TemplatePage;
