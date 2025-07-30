import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  village: string | null;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .maybeSingle();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch profile",
          variant: "destructive",
        });
        return;
      }

      setProfile(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Mock data for applications - in real app, this would come from database
  const applications = [
    {
      id: 1,
      scheme: "PM-KISAN",
      status: "Approved",
      appliedDate: "2024-01-15",
      amount: "₹2,000"
    },
    {
      id: 2,
      scheme: "MGNREGA",
      status: "Pending",
      appliedDate: "2024-01-20",
      amount: "N/A"
    },
    {
      id: 3,
      scheme: "Ayushman Bharat",
      status: "Under Review",
      appliedDate: "2024-01-25",
      amount: "N/A"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome, {profile?.full_name || user.email}</h1>
          <p className="text-muted-foreground">Manage your applications and access services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{applications.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">
                {applications.filter(app => app.status === 'Approved').length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">
                {applications.filter(app => app.status === 'Pending').length}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="font-semibold">Email:</label>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <div>
                <label className="font-semibold">Full Name:</label>
                <p className="text-muted-foreground">{profile?.full_name || 'Not provided'}</p>
              </div>
              <div>
                <label className="font-semibold">Phone:</label>
                <p className="text-muted-foreground">{profile?.phone || 'Not provided'}</p>
              </div>
              <div>
                <label className="font-semibold">Village:</label>
                <p className="text-muted-foreground">{profile?.village || 'Not provided'}</p>
              </div>
              <Button variant="outline" className="w-full">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common services and applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                Apply for New Scheme
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Download Certificates
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Submit Grievance
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Check Scheme Status
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Village Development Updates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Applications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>My Applications</CardTitle>
            <CardDescription>Track your scheme applications and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{app.scheme}</h3>
                    <p className="text-sm text-muted-foreground">Applied on: {app.appliedDate}</p>
                    {app.amount !== 'N/A' && (
                      <p className="text-sm text-muted-foreground">Amount: {app.amount}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              
              {applications.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No applications found</p>
                  <Button className="mt-4">Apply for First Scheme</Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;