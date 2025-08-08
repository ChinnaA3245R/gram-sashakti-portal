import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, BookOpen, Heart, Award, Target } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Impact & Outcomes</h1>
          <p className="text-xl text-muted-foreground">
            Measuring the positive changes created through our community initiative
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Knowledge Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Understanding of Panchayat Functions</span>
                    <span className="font-bold text-primary">+65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Awareness of Available Services</span>
                    <span className="font-bold text-primary">+58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Knowledge of Application Processes</span>
                    <span className="font-bold text-primary">+72%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Understanding of Citizen Rights</span>
                    <span className="font-bold text-primary">+48%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Behavioral Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>87% of participants now know where to apply for certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Increased confidence in approaching Panchayat office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>More villagers asking questions about government schemes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Women showing greater interest in community participation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Social Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Increased Participation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <p className="text-muted-foreground">Increase in Gram Sabha meeting attendance</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>• From 12% to 47% regular attendance</p>
                  <p>• More questions asked in meetings</p>
                  <p>• Greater community engagement</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Improved Trust</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">42%</div>
                <p className="text-muted-foreground">Improvement in trust towards local governance</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>• Better understanding of Panchayat role</p>
                  <p>• Reduced misconceptions</p>
                  <p>• Increased cooperation</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-center">Enhanced Communication</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Improvement in Panchayat-citizen communication</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>• More people know contact details</p>
                  <p>• Increased feedback sharing</p>
                  <p>• Better information flow</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Student Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Student Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Leadership & Planning Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Project Management:</strong> Planned and executed 8-week initiative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Team Leadership:</strong> Coordinated activities among 12 student volunteers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Problem-Solving:</strong> Adapted strategies based on community feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Resource Management:</strong> Efficiently utilized time and materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Communication Skills:</strong> Interacted with diverse community members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Cultural Sensitivity:</strong> Learned to work within local customs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Social Responsibility:</strong> Developed commitment to community service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Empathy:</strong> Better understanding of rural challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Outcomes</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">25+</div>
                  <p className="text-sm text-muted-foreground">New Certificate Applications Filed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">40+</div>
                  <p className="text-sm text-muted-foreground">MGNREGA Job Card Registrations</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">15</div>
                  <p className="text-sm text-muted-foreground">Local Volunteers Trained</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Follow-up Sessions Planned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Long-term Impact */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Long-term Impact Potential
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For the Village:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sustained increase in civic participation</li>
                  <li>• Better utilization of government schemes</li>
                  <li>• Improved transparency in local governance</li>
                  <li>• Stronger community cohesion</li>
                  <li>• Model for other villages in the region</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">For the Institution:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Established community service framework</li>
                  <li>• Research opportunities in rural development</li>
                  <li>• Enhanced institutional reputation</li>
                  <li>• Student skill development program</li>
                  <li>• Potential for scaling to more villages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Impact;