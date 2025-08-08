import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Briefcase, Vote, Building, Wrench } from 'lucide-react';

const Panchayat101 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Panchayat 101</h1>
          <p className="text-xl text-muted-foreground">
            Understanding your village governance - Simple, clear, and accessible
          </p>
        </div>

        {/* What is a Panchayat */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                What is a Panchayat?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Panchayat</strong> is your village's local government - the closest form of democracy to your daily life. It's a group of elected representatives who work to solve local problems and improve village life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The word "Panchayat" comes from Sanskrit meaning "assembly of five" - representing the traditional council of five wise people who would make decisions for the community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Panchayat Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Sarpanch</CardTitle>
                <CardDescription className="text-center">Village Head</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Leader of the Panchayat</li>
                  <li>• Elected directly by villagers</li>
                  <li>• Chairs Panchayat meetings</li>
                  <li>• Represents village in official matters</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Ward Members</CardTitle>
                <CardDescription className="text-center">Area Representatives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Represent different areas (wards)</li>
                  <li>• Elected by ward residents</li>
                  <li>• Bring local issues to Panchayat</li>
                  <li>• Help implement decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Secretary</CardTitle>
                <CardDescription className="text-center">Administrative Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Government-appointed officer</li>
                  <li>• Handles paperwork and records</li>
                  <li>• Guides Panchayat on procedures</li>
                  <li>• Ensures proper implementation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Water & Sanitation",
                description: "Ensuring clean drinking water, proper drainage, and toilet facilities",
                icon: "💧"
              },
              {
                title: "Roads & Infrastructure",
                description: "Building and maintaining village roads, streetlights, and public buildings",
                icon: "🛣️"
              },
              {
                title: "Education Support",
                description: "Supporting schools, monitoring attendance, and promoting literacy",
                icon: "📚"
              },
              {
                title: "Healthcare Services",
                description: "Primary health center management and health awareness programs",
                icon: "🏥"
              },
              {
                title: "Agriculture Support",
                description: "Helping farmers with schemes, irrigation, and agricultural development",
                icon: "🌾"
              },
              {
                title: "Social Welfare",
                description: "Implementing government schemes for different sections of society",
                icon: "🤝"
              }
            ].map((responsibility, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-3xl mb-2">{responsibility.icon}</div>
                  <CardTitle className="text-lg">{responsibility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {responsibility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Available */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Services You Can Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificates & Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Birth and Death Certificates</li>
                  <li>• Income Certificates</li>
                  <li>• Caste Certificates</li>
                  <li>• Residence Certificates</li>
                  <li>• No Objection Certificates (NOC)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Development Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• MGNREGA job cards and work</li>
                  <li>• Pension applications</li>
                  <li>• Housing scheme applications</li>
                  <li>• Self-Help Group formation</li>
                  <li>• Grievance redressal</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Citizen Participation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Vote className="w-6 h-6 text-primary" />
              Your Role as a Citizen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Attend Gram Sabha Meetings:</strong> These are monthly meetings where all adult villagers can participate. You can raise issues, ask questions, and contribute to decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Use Your Voice:</strong> Report problems like broken roads, water issues, or corruption. Your Panchayat representatives work for you!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Stay Informed:</strong> Know about government schemes, your rights, and how to access services. Knowledge is power!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Participate in Elections:</strong> Vote for representatives who will work for your village's development.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Panchayat101;