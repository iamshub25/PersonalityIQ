"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { 
  FileText, 
  BarChart3, 
  Calendar, 
  User, 
  Settings, 
  LogOut
} from "lucide-react";
import { TestInterface } from "@/components/blocks/test-interface";
import { InsightsInterface } from "@/components/blocks/insights-interface";
import { TrackingInterface } from "@/components/blocks/tracking-interface";
import { ProfileInterface } from "@/components/blocks/profile-interface";
import { AnimatedThemeToggler } from "@/components/blocks/animated-theme-toggler";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}const ProfessionalDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"test" | "insights" | "tracking" | "profile">("test");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'profile') {
      setActiveTab('profile');
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#EF4444',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      position: 'top-end',
      toast: true,
      width: '350px'
    });

    if (result.isConfirmed) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userData');
      
      await Swal.fire({
        icon: 'success',
        title: 'Logged out successfully',
        timer: 1500,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      });
      
      router.push('/login');
    }
  };

  const links = [
    {
      label: "Test",
      href: "#",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      label: "Insights",
      href: "#",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      label: "Tracking",
      href: "#",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "test":
        return <TestInterface />;
      case "insights":
        return <InsightsInterface />;
      case "tracking":
        return <TrackingInterface />;
      case "profile":
        return <ProfileInterface />;
      default:
        return <TestInterface />;
    }
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col bg-background mt-14">
      {/* Mobile Floating Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg z-40 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Fullscreen Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <div className="flex items-center gap-3">
                <AnimatedThemeToggler />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-6">
              <div className="space-y-4">
                {links.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (link.label.toLowerCase() === "test") setActiveTab("test");
                      if (link.label.toLowerCase() === "insights") setActiveTab("insights");
                      if (link.label.toLowerCase() === "tracking") setActiveTab("tracking");
                      if (link.label.toLowerCase() === "profile") setActiveTab("profile");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                      (link.label.toLowerCase() === "test" && activeTab === "test") ||
                      (link.label.toLowerCase() === "insights" && activeTab === "insights") ||
                      (link.label.toLowerCase() === "tracking" && activeTab === "tracking") ||
                      (link.label.toLowerCase() === "profile" && activeTab === "profile")
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-2 border-blue-200"
                        : "hover:bg-gray-50 border-2 border-transparent"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      (link.label.toLowerCase() === "test" && activeTab === "test") ||
                      (link.label.toLowerCase() === "insights" && activeTab === "insights") ||
                      (link.label.toLowerCase() === "tracking" && activeTab === "tracking") ||
                      (link.label.toLowerCase() === "profile" && activeTab === "profile")
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}>
                      {link.icon}
                    </div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t">
              <button onClick={handleLogout} className="w-full flex items-center gap-4 p-4 rounded-xl text-left hover:bg-red-50 transition-colors">
                <div className="p-2 rounded-lg bg-red-100">
                  <LogOut className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-lg font-medium text-red-600">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full">
          <div className="p-4 flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
              <AnimatedThemeToggler />
            </div>
            <div className="space-y-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (link.label.toLowerCase() === "test") setActiveTab("test");
                    if (link.label.toLowerCase() === "insights") setActiveTab("insights");
                    if (link.label.toLowerCase() === "tracking") setActiveTab("tracking");
                    if (link.label.toLowerCase() === "profile") setActiveTab("profile");
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left cursor-pointer transition-colors ${
                    (link.label.toLowerCase() === "test" && activeTab === "test") ||
                    (link.label.toLowerCase() === "insights" && activeTab === "insights") ||
                    (link.label.toLowerCase() === "tracking" && activeTab === "tracking") ||
                    (link.label.toLowerCase() === "profile" && activeTab === "profile")
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-left cursor-pointer transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${activeTab === 'test' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
