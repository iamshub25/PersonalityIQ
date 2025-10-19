'use client'

import React, { useState, useEffect } from "react";
import { User, Mail, Calendar, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProfileInterface = () => {
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || localStorage.getItem('rememberedEmail');
    const name = localStorage.getItem('username');
    const data = localStorage.getItem('userData');
    
    if (email) setUserEmail(email);
    if (name) setUsername(name);
    if (data) {
      try {
        setUserData(JSON.parse(data));
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);

  return (
    <div className="p-4 sm:p-6 pt-6 sm:pt-8 space-y-4 sm:space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{username || 'User'}</h3>
              <Badge variant="outline">Active</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-base font-semibold">{userEmail || 'Not available'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Member Since</p>
                <p className="text-base font-semibold">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Shield className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Account Status</p>
                <p className="text-base font-semibold text-green-600">Verified</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
{/* 
      {userData && (
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )} */}
    </div>
  );
};
