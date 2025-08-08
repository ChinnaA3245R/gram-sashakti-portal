import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Target, Eye, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Project</h1>
          <p className="text-xl text-muted-foreground">
            A community service initiative bridging the gap between governance and citizens
          </p>
        </div>

        {/* Project Introduction */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Community Service Initiative
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This project represents a dedicated effort by students of <strong>Narasaraopeta Engineering College</strong> to create meaningful change in rural communities. Through direct engagement with villagers in <strong>Yerraguntlapadu village, Phirangipuram Mandal, Guntur District</strong>, we aim to enhance understanding of local governance and strengthen the bond between citizens and their Panchayat representatives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our initiative focuses on education, awareness, and empowerment, recognizing that informed citizens are the foundation of effective democracy at the grassroots level.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the knowledge gap between rural citizens and their local governance systems by providing comprehensive education about Panchayat functions, citizen rights, and available services, thereby promoting active community participation in democratic processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create empowered rural communities where every citizen understands their rights, actively participates in local governance, and works collaboratively with Panchayat institutions to achieve sustainable development and improved quality of life.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Location */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Project Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Village</h4>
                  <p className="text-muted-foreground">Yerraguntlapadu</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mandal</h4>
                  <p className="text-muted-foreground">Phirangipuram</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">District</h4>
                  <p className="text-muted-foreground">Guntur District, Andhra Pradesh</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">8-Week Project Timeline</h2>
          <div className="grid gap-6">
            {[
              {
                week: "Week 1-2",
                title: "Community Assessment",
                description: "Initial surveys and interviews to understand current awareness levels and identify key challenges."
              },
              {
                week: "Week 3-4",
                title: "Educational Material Development",
                description: "Creation of informative content, brochures, and presentation materials in local language."
              },
              {
                week: "Week 5-6",
                title: "Community Workshops",
                description: "Interactive sessions with villagers explaining Panchayat functions, rights, and services."
              },
              {
                week: "Week 7-8",
                title: "Impact Assessment & Follow-up",
                description: "Evaluation of learning outcomes and establishment of long-term engagement strategies."
              }
            ].map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    {phase.week}: {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* College Involvement */}
        <Card>
          <CardHeader>
            <CardTitle>Narasaraopeta Engineering College</CardTitle>
            <CardDescription>Fostering Social Responsibility Through Education</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This initiative is part of our college's commitment to social service and community development. Our students have dedicated their time and skills to create meaningful impact in rural areas, developing leadership qualities, practical problem-solving skills, and a deeper understanding of social responsibility. The project aligns with our institution's values of using technical education for societal benefit.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;