import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Users, MessageSquare, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: '',
    motivation: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });

  const { toast } = useToast();

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for volunteering!",
      description: "We'll contact you soon with more information about upcoming opportunities.",
    });
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      location: '',
      skills: '',
      availability: '',
      motivation: ''
    });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback submitted!",
      description: "Thank you for your valuable feedback. We'll review it carefully.",
    });
    setFeedbackForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            Join our mission to empower rural communities through Panchayat awareness
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-center">Volunteer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Join our team of dedicated volunteers and make a direct impact in rural communities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Community outreach programs</li>
                <li>• Educational workshop facilitation</li>
                <li>• Material development and distribution</li>
                <li>• Translation and local language support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-center">Community Partner</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Partner with us to extend our reach and impact in your local area.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Identify community needs</li>
                <li>• Organize local events</li>
                <li>• Connect us with village leaders</li>
                <li>• Provide local insights and feedback</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-center">Share Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Help us improve our initiatives by sharing your thoughts and suggestions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Program effectiveness feedback</li>
                <li>• Suggestions for improvement</li>
                <li>• Community needs assessment</li>
                <li>• Success story sharing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Sign-up Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="volunteer-name">Full Name</Label>
                  <Input
                    id="volunteer-name"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="volunteer-email">Email</Label>
                  <Input
                    id="volunteer-email"
                    type="email"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="volunteer-phone">Phone Number</Label>
                  <Input
                    id="volunteer-phone"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="volunteer-location">Location</Label>
                  <Input
                    id="volunteer-location"
                    placeholder="City, State"
                    value={volunteerForm.location}
                    onChange={(e) => setVolunteerForm({...volunteerForm, location: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="volunteer-skills">Skills & Expertise</Label>
                  <Input
                    id="volunteer-skills"
                    placeholder="Teaching, Telugu translation, technology, etc."
                    value={volunteerForm.skills}
                    onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="volunteer-availability">Availability</Label>
                  <Select onValueChange={(value) => setVolunteerForm({...volunteerForm, availability: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="weekdays">Weekday evenings</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                      <SelectItem value="monthly">Monthly commitment</SelectItem>
                      <SelectItem value="events">Special events only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="volunteer-motivation">Why do you want to volunteer?</Label>
                  <Textarea
                    id="volunteer-motivation"
                    placeholder="Share your motivation for joining our cause..."
                    value={volunteerForm.motivation}
                    onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Register as Volunteer
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Feedback Form */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback & Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="feedback-name">Name (Optional)</Label>
                  <Input
                    id="feedback-name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="feedback-email">Email (Optional)</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="feedback-type">Feedback Type</Label>
                  <Select onValueChange={(value) => setFeedbackForm({...feedbackForm, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="suggestion">Suggestion</SelectItem>
                      <SelectItem value="appreciation">Appreciation</SelectItem>
                      <SelectItem value="concern">Concern</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="feedback-subject">Subject</Label>
                  <Input
                    id="feedback-subject"
                    value={feedbackForm.subject}
                    onChange={(e) => setFeedbackForm({...feedbackForm, subject: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="feedback-message">Message</Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Share your thoughts, suggestions, or concerns..."
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    required
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">panchayat.awareness@necollege.edu</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 9876543210</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">Narasaraopeta Engineering College, Guntur</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 5 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Coordinators */}
        <Card>
          <CardHeader>
            <CardTitle>Project Coordinators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Student Coordinator</h4>
                <p className="text-muted-foreground">Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Final Year, Computer Science</p>
                <p className="text-sm text-muted-foreground">Email: rajesh.cse@necollege.edu</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Faculty Advisor</h4>
                <p className="text-muted-foreground">Dr. Priya Sharma</p>
                <p className="text-sm text-muted-foreground">Professor, Social Sciences</p>
                <p className="text-sm text-muted-foreground">Email: priya.sharma@necollege.edu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetInvolved;