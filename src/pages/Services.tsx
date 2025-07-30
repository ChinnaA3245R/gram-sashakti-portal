import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const schemes = [
    {
      title: "MGNREGA",
      description: "Mahatma Gandhi National Rural Employment Guarantee Act - Provides 100 days of guaranteed wage employment",
      category: "Employment",
      eligibility: "Rural households willing to do unskilled manual work"
    },
    {
      title: "PM-KISAN",
      description: "Direct income support to farmer families with landholding up to 2 hectares",
      category: "Agriculture",
      eligibility: "Small and marginal farmer families"
    },
    {
      title: "Ayushman Bharat",
      description: "Health insurance scheme providing coverage up to ₹5 lakh per family per year",
      category: "Healthcare",
      eligibility: "Families identified through SECC-2011"
    },
    {
      title: "PM Awas Yojana",
      description: "Housing scheme for economically weaker sections and low-income groups",
      category: "Housing",
      eligibility: "Households without pucca house"
    },
    {
      title: "Swachh Bharat Mission",
      description: "Clean India Mission focusing on sanitation and waste management",
      category: "Sanitation",
      eligibility: "All rural households"
    },
    {
      title: "Jan Dhan Yojana",
      description: "Financial inclusion program ensuring access to banking services",
      category: "Banking",
      eligibility: "All unbanked households"
    }
  ];

  const panchayatServices = [
    {
      title: "Birth/Death Certificates",
      description: "Registration and issuance of vital certificates"
    },
    {
      title: "Income Certificates",
      description: "Issuance of income certificates for various purposes"
    },
    {
      title: "Caste Certificates",
      description: "Verification and issuance of caste certificates"
    },
    {
      title: "Village Records",
      description: "Maintenance and access to village revenue records"
    },
    {
      title: "Development Works",
      description: "Planning and implementation of village development projects"
    },
    {
      title: "Grievance Redressal",
      description: "Resolution of village-level complaints and issues"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Government Schemes & Services</h1>
          <p className="text-xl text-muted-foreground">
            Explore various government schemes and panchayat services available for villagers
          </p>
        </div>

        {/* Government Schemes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Government Schemes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{scheme.title}</CardTitle>
                    <Badge variant="secondary">{scheme.category}</Badge>
                  </div>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Eligibility:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Panchayat Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Panchayat Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panchayatServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-sm text-muted-foreground">Create your account on our portal</p>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Choose Service</h3>
              <p className="text-sm text-muted-foreground">Select the scheme or service you need</p>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Submit Documents</h3>
              <p className="text-sm text-muted-foreground">Upload required documents and forms</p>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Track Status</h3>
              <p className="text-sm text-muted-foreground">Monitor your application progress</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;