import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Users, MessageSquare, Camera, CheckCircle } from 'lucide-react';

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Activities Conducted</h1>
          <p className="text-xl text-muted-foreground">
            Our 8-week journey of community engagement and awareness building
          </p>
        </div>

        {/* Timeline View */}
        <div className="space-y-8">
          {/* Week 1-2: Initial Assessment */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                1-2
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Week 1-2: Community Assessment</h2>
                <p className="text-muted-foreground">Understanding the current landscape</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 ml-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Household Surveys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Surveyed 150 households</li>
                    <li>• Assessed current awareness levels</li>
                    <li>• Identified key demographic groups</li>
                    <li>• Documented existing challenges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Focus Group Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 8 focus groups conducted</li>
                    <li>• Separate sessions for women, youth, elderly</li>
                    <li>• In-depth problem identification</li>
                    <li>• Cultural and social context understanding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Week 3-4: Material Development */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                3-4
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Week 3-4: Educational Material Development</h2>
                <p className="text-muted-foreground">Creating accessible learning resources</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 ml-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Telugu Brochures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Simple language explanations</li>
                    <li>• Visual illustrations</li>
                    <li>• Step-by-step guides</li>
                    <li>• 500 copies printed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Poster Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Colorful, eye-catching designs</li>
                    <li>• Key services highlighted</li>
                    <li>• Contact information included</li>
                    <li>• Displayed at 15 key locations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Audio Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Local dialect recordings</li>
                    <li>• Information in Q&A format</li>
                    <li>• Used in community gatherings</li>
                    <li>• Shared via local speakers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Week 5-6: Community Workshops */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                5-6
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Week 5-6: Interactive Workshops</h2>
                <p className="text-muted-foreground">Direct engagement and education</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 ml-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Community Meetings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">General Sessions (5 conducted)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 40-60 participants each</li>
                        <li>• Basic Panchayat functions explained</li>
                        <li>• Q&A sessions</li>
                        <li>• Live demonstrations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Women-Only Sessions (3 conducted)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 25-35 women participants</li>
                        <li>• Focus on welfare schemes</li>
                        <li>• Encouraging participation</li>
                        <li>• Safe space for questions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Q&A Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Popular Questions Addressed:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• How to apply for caste certificate?</li>
                        <li>• What is MGNREGA job card process?</li>
                        <li>• When are Gram Sabha meetings held?</li>
                        <li>• How to file complaints?</li>
                        <li>• What services are free?</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm font-semibold text-primary">200+ Questions Answered</p>
                      <p className="text-xs text-muted-foreground">Individual consultations provided</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Week 7-8: Impact Assessment */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                7-8
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Week 7-8: Assessment & Follow-up</h2>
                <p className="text-muted-foreground">Measuring impact and planning ahead</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 ml-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Post-Activity Survey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 120 households re-surveyed</li>
                    <li>• Knowledge improvement measured</li>
                    <li>• Feedback on activities collected</li>
                    <li>• Future needs identified</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Sustainability Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Local volunteers identified</li>
                    <li>• Resource sharing setup</li>
                    <li>• Follow-up schedule created</li>
                    <li>• Contact networks established</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Activity Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Community meeting in village center",
                  "Women's awareness session",
                  "Material distribution drive",
                  "Student volunteers conducting survey",
                  "Interactive Q&A session",
                  "Group discussion with village elders"
                ].map((caption, index) => (
                  <div key={index} className="bg-muted rounded-lg p-6 text-center">
                    <div className="w-full h-32 bg-secondary rounded-lg mb-3 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">{caption}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                * Photo documentation available for project records
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Activity Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-sm text-muted-foreground">Workshops Conducted</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-muted-foreground">People Directly Reached</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">500</div>
                <p className="text-sm text-muted-foreground">Educational Materials Distributed</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <p className="text-sm text-muted-foreground">Weeks of Dedication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;