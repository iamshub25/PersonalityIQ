'use client'

import React, { useState } from "react";
import { Calendar, Flame, Award, Target, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Utility function for cn
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const TrackingInterface = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const currentStreak = 7;
  const longestStreak = 15;
  const totalTests = 23;

  // Mock calendar data
  const testDates = [
    "2024-01-15", "2024-01-14", "2024-01-13", "2024-01-12", 
    "2024-01-11", "2024-01-10", "2024-01-09", "2024-01-05",
    "2024-01-03", "2024-01-01"
  ];

  const generateCalendarDays = () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push({
        day,
        date: dateStr,
        hasTest: testDates.includes(dateStr),
        isToday: day === today.getDate()
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
      <div>
        <h1 className="text-2xl font-bold">Test Tracking</h1>
        <p className="text-muted-foreground">Monitor your testing consistency and streaks</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{currentStreak}</div>
            <p className="text-xs text-muted-foreground">
              days in a row
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">{longestStreak}</div>
            <p className="text-xs text-muted-foreground">
              personal best
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
            <Target className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{totalTests}</div>
            <p className="text-xs text-muted-foreground">
              tests completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Weekly Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Test Calendar - January 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-xs sm:text-sm font-medium text-muted-foreground p-1 sm:p-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={cn(
                    "aspect-square flex items-center justify-center text-xs sm:text-sm rounded-lg cursor-pointer transition-colors",
                    day === null ? "" : "hover:bg-accent",
                    day?.isToday ? "bg-primary text-primary-foreground font-bold" : "",
                    day?.hasTest && !day?.isToday ? "bg-green-100 text-green-800 font-medium" : "",
                    !day?.hasTest && day !== null && !day?.isToday ? "text-muted-foreground" : ""
                  )}
                  onClick={() => day && setSelectedDate(new Date(day.date))}
                >
                  {day?.day}
                  {day?.hasTest && (
                    <div className="absolute w-1 h-1 bg-green-500 rounded-full mt-6" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-100 rounded" />
                <span className="text-muted-foreground">Test completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded" />
                <span className="text-muted-foreground">Today</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card>
          <CardHeader>
            <CardTitle>This Week's Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => {
                const completed = index < 5; // Mock data
                return (
                  <div key={day} className="flex items-center justify-between py-1">
                    <span className="font-medium">{day}</span>
                    <div className="flex items-center gap-2">
                      {completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {completed ? "Completed" : "Pending"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};