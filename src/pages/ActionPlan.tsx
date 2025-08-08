import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Target, Users, Globe, Smartphone, School } from 'lucide-react';

const ActionPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Action Plan</h1>
          <p className="text-xl text-muted-foreground">
            Our roadmap for sustainable Panchayat awareness and community empowerment
          </p>
        </div>

        {/* Short-Term Goals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Short-Term Goals (Next 6 Months)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Media Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Local Radio Programs</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Weekly 15-minute awareness segments</li>
                      <li>• Q&A sessions with Panchayat officials</li>
                      <li>• Success stories from villagers</li>
                      <li>• Information about new schemes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Village Notice Boards</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Monthly information updates</li>
                      <li>• Visual guides and infographics</li>
                      <li>• Contact information display</li>
                      <li>• Meeting announcements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Feedback Collection System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Community Feedback Mechanism</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Monthly feedback sessions</li>
                      <li>• Anonymous suggestion boxes</li>
                      <li>• Regular satisfaction surveys</li>
                      <li>• Follow-up on raised issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Monitoring</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Track service delivery improvements</li>
                      <li>• Monitor attendance in meetings</li>
                      <li>• Assess awareness levels quarterly</li>
                      <li>• Document success stories</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Medium-Term Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Medium-Term Vision (1-2 Years)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <School className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Educational Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold">Panchayat Awareness in Schools</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Include civic education in curriculum</li>
                    <li>• Student Panchayat programs</li>
                    <li>• School-community interaction events</li>
                    <li>• Teacher training on governance topics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Local Committees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold">Village Awareness Committees</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Form volunteer groups</li>
                    <li>• Regular training sessions</li>
                    <li>• Peer-to-peer education</li>
                    <li>• Community event organization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Digital Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold">Technology Integration</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• WhatsApp groups for information</li>
                    <li>• Mobile app for services</li>
                    <li>• Online grievance portal</li>
                    <li>• Digital literacy programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Long-Term Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Long-Term Vision (3-5 Years)</h2>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Government Integration & Scaling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Policy Integration</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>State Government Partnership:</strong> Integrate awareness programs into official Panchayat policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Standardized Training:</strong> Develop standard training modules for all Panchayats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Resource Allocation:</strong> Secure dedicated budget for awareness activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Impact Assessment:</strong> Regular evaluation and improvement of programs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Regional Expansion</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>District-Wide Implementation:</strong> Replicate model across Guntur district</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>State-Level Recognition:</strong> Become a model for Andhra Pradesh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Inter-State Sharing:</strong> Share best practices with other states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Academic Research:</strong> Document and publish research findings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Implementation Timeline</h2>
          <div className="space-y-6">
            {[
              {
                period: "Months 1-3",
                title: "Foundation Building",
                activities: [
                  "Establish local volunteer network",
                  "Set up feedback mechanisms",
                  "Launch radio programs",
                  "Create digital presence"
                ]
              },
              {
                period: "Months 4-6",
                title: "Community Engagement",
                activities: [
                  "Regular awareness sessions",
                  "School program initiation",
                  "Government partnership discussions",
                  "Impact assessment baseline"
                ]
              },
              {
                period: "Months 7-12",
                title: "Expansion & Integration",
                activities: [
                  "Scale to neighboring villages",
                  "Technology platform development",
                  "Training program standardization",
                  "Policy advocacy initiation"
                ]
              },
              {
                period: "Years 2-3",
                title: "Institutionalization",
                activities: [
                  "Government policy integration",
                  "District-wide implementation",
                  "Sustainable funding secured",
                  "Impact evaluation and refinement"
                ]
              },
              {
                period: "Years 4-5",
                title: "Regional Leadership",
                activities: [
                  "State-level recognition",
                  "Inter-state collaboration",
                  "Research publication",
                  "National best practice model"
                ]
              }
            ].map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    {phase.period}: {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Awareness Metrics</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 90% awareness of Panchayat services</li>
                  <li>• 75% regular Gram Sabha attendance</li>
                  <li>• 80% knowledge of application processes</li>
                  <li>• 70% citizen satisfaction rate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Participation Metrics</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 50% increase in service applications</li>
                  <li>• 100+ active community volunteers</li>
                  <li>• 25+ villages covered in district</li>
                  <li>• 5+ government partnerships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Impact Metrics</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Improved transparency scores</li>
                  <li>• Faster service delivery times</li>
                  <li>• Reduced corruption complaints</li>
                  <li>• Enhanced community cohesion</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActionPlan;