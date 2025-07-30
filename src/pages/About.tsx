import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Village Panchayat</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the foundation of rural governance in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>What is a Village Panchayat?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A Village Panchayat is the basic unit of local self-governance in rural India. 
                It is a constitutional body that operates at the village level and is responsible 
                for the planning and implementation of development programs and schemes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Constitutional Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The 73rd Constitutional Amendment Act of 1992 gave constitutional status to 
                Panchayati Raj Institutions, making them the third tier of governance after 
                the Union and State governments.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Functions of Village Panchayat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Water Management",
                description: "Ensuring clean water supply and sanitation facilities"
              },
              {
                title: "Road Development",
                description: "Construction and maintenance of village roads"
              },
              {
                title: "Education",
                description: "Supporting primary education and literacy programs"
              },
              {
                title: "Healthcare",
                description: "Primary healthcare services and health awareness"
              },
              {
                title: "Agriculture",
                description: "Supporting agricultural development and farmers"
              },
              {
                title: "Women Empowerment",
                description: "Programs for women's social and economic empowerment"
              }
            ].map((function_, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{function_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {function_.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Structure of Panchayati Raj</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gram Panchayat</CardTitle>
                <CardDescription>Village Level</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The lowest tier, directly dealing with village-level issues and development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Panchayat Samiti</CardTitle>
                <CardDescription>Block Level</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The intermediate tier, coordinating between village and district levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zilla Panchayat</CardTitle>
                <CardDescription>District Level</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The highest tier, responsible for district-level planning and coordination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;