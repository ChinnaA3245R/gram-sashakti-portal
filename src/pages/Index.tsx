import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Users, BookOpen, Lightbulb, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Villages Through Panchayat Awareness
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A community service initiative by Narasaraopeta Engineering College students to bridge the gap between local governance and rural citizens
          </p>
          <div className="space-x-4">
            <Link to="/panchayat-101">
              <Button size="lg" variant="secondary">
                Learn About Your Panchayat
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                About Our Initiative
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Government Schemes</CardTitle>
                <CardDescription>
                  Learn about various government schemes and how to apply for them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access comprehensive information about central and state government schemes
                  available for rural development and welfare.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Panchayat Functions</CardTitle>
                <CardDescription>
                  Understand the roles and responsibilities of your village panchayat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about local governance, how decisions are made, and how you can
                  participate in village development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Services</CardTitle>
                <CardDescription>
                  Access online services and submit applications digitally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use our digital platform to access services, submit applications,
                  and track the status of your requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Register today to access all services and stay updated with your village development
          </p>
          <Link to="/auth">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
