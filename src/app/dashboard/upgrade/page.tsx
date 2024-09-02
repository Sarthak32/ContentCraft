"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent,CardFooter} from '@/components/ui/card';
import { Check } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Props = {};

const Upgrade = (props: Props) => {
    const router = useRouter();
    const handleOnClick = async() => {
        // Handle the purchase action
        const response = await axios.post("/api/upgrade/checkout");
        // push user to the stripe url
        router.push(response.data.url);
        alert('Purchased!');
      };
    
      return (
        <div className="mx-auto max-w-md py-6 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-center">Upgrade Your Credit</h2>
      </div>
      <Card className="flex flex-col mx-auto border border-gray-200 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">One-Time Purchase: $10</CardTitle>
          <CardDescription className="text-sm text-gray-500">10,000 AI Credit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <p className="flex items-center text-sm text-gray-700">
              <Check className="text-green-500 mr-2" /> 100,000 words/purchase
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <Check className="text-green-500 mr-2" /> All Template Access
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <Check className="text-green-500 mr-2" /> Retain All History
            </p>
          </div>
          <Button className="w-full mt-4  text-white" onClick={handleOnClick}>
            Purchase Now
          </Button>
        </CardContent>
      </Card>
    </div>
      );
    };

export default Upgrade;