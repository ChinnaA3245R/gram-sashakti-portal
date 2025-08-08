import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Users, MessageSquare, Eye, Quote } from 'lucide-react';

const Problems = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Problems Identified</h1>
          <p className="text-xl text-muted-foreground">
            Key challenges discovered through our community engagement in Yerraguntlapadu
          </p>
        </div>

        {/* Main Problems */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="w-6 h-6" />
                Low Awareness of Panchayat Functions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Survey Results:</strong> 68% of villagers were unaware of basic Panchayat services available to them.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Many didn't know they could get certificates from Panchayat</li>
                  <li>• Unaware of MGNREGA job opportunities</li>
                  <li>• Limited knowledge about government schemes</li>
                  <li>• Confusion about Panchayat vs. other government offices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <MessageSquare className="w-6 h-6" />
                Poor Communication Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Key Finding:</strong> 74% reported difficulty in reaching Panchayat representatives.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• No fixed office hours or contact information</li>
                  <li>• Limited use of notice boards</li>
                  <li>• Information not shared in local language</li>
                  <li>• No feedback mechanisms in place</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Users className="w-6 h-6" />
                Low Public Participation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Attendance Issue:</strong> Only 12% regularly attend Gram Sabha meetings.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Meetings not properly announced</li>
                  <li>• Inconvenient timing for farmers and workers</li>
                  <li>• People feel their voices aren't heard</li>
                  <li>• Women's participation particularly low</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Eye className="w-6 h-6" />
                Lack of Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Trust Issue:</strong> 81% expressed concerns about transparency in Panchayat activities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Budget allocations not publicly shared</li>
                  <li>• Development work progress unclear</li>
                  <li>• Decision-making process opaque</li>
                  <li>• No public access to records</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Villager Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Voices from the Village</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "I didn't know I could get my income certificate from the Panchayat. I was going to the Mandal office every time."
                </p>
                <p className="font-semibold text-sm">- Ramesh, Farmer</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "We never know when the Gram Sabha meetings happen. They should tell us in advance."
                </p>
                <p className="font-semibold text-sm">- Lakshmi, Self-Help Group Leader</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "I want to know where the money for road repair is going. The roads are still bad."
                </p>
                <p className="font-semibold text-sm">- Venkat, Shop Owner</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "My daughter wants to apply for scholarship, but we don't know the process."
                </p>
                <p className="font-semibold text-sm">- Bharathi, Mother</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "I heard about MGNREGA work but don't know how to register for a job card."
                </p>
                <p className="font-semibold text-sm">- Ravi, Daily Wage Worker</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Quote className="w-8 h-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "Women in our village don't feel comfortable speaking in meetings."
                </p>
                <p className="font-semibold text-sm">- Manjula, Anganwadi Worker</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Analysis */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Impact of These Problems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">On Citizens:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Miss out on rightful benefits and services</li>
                  <li>• Waste time and money going to wrong offices</li>
                  <li>• Feel disconnected from local governance</li>
                  <li>• Lose trust in democratic institutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">On Village Development:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Slower implementation of development projects</li>
                  <li>• Resources not utilized efficiently</li>
                  <li>• Community needs not properly identified</li>
                  <li>• Reduced accountability and transparency</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Problems;