import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Panchayat Awareness
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-primary-foreground/80">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary-foreground/80">
              About Project
            </Link>
            <Link to="/panchayat-101" className="hover:text-primary-foreground/80">
              Panchayat 101
            </Link>
            <Link to="/problems" className="hover:text-primary-foreground/80">
              Problems
            </Link>
            <Link to="/activities" className="hover:text-primary-foreground/80">
              Activities
            </Link>
            <Link to="/impact" className="hover:text-primary-foreground/80">
              Impact
            </Link>
            <Link to="/action-plan" className="hover:text-primary-foreground/80">
              Action Plan
            </Link>
            <Link to="/get-involved" className="hover:text-primary-foreground/80">
              Get Involved
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/dashboard" className="hover:text-primary-foreground/80">
                  Dashboard
                </Link>
                <Button variant="secondary" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="secondary" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;