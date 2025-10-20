'use client'

import React from "react";
import { BarChart3, Target, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Utility function for cn
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface TestResult {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  workType: string;
  timeSpent: number;
}

const mockTestResults: TestResult[] = [
  {
    id: "1",
    date: "2024-01-15",
    score: 85,
    totalQuestions: 20,
    workType: "Frontend Development",
    timeSpent: 25
  },
  {
    id: "2",
    date: "2024-01-10",
    score: 92,
    totalQuestions: 15,
    workType: "UX Design",
    timeSpent: 18
  },
  {
    id: "3",
    date: "2024-01-05",
    score: 78,
    totalQuestions: 25,
    workType: "Backend Development",
    timeSpent: 35
  }
];

export const InsightsInterface = () => {
  const averageScore = mockTestResults.reduce((acc, result) => acc + result.score, 0) / mockTestResults.length;
  const totalTests = mockTestResults.length;
  const improvementTrend = mockTestResults[0].score - mockTestResults[mockTestResults.length - 1].score;

  return (
    <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
      <div>
        <h1 className="text-2xl font-bold">Performance Insights</h1>
        <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
      </div>

      {/* Current Performance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(averageScore)}%</div>
            <p className="text-xs text-muted-foreground">
              {improvementTrend > 0 ? "+" : ""}{Math.round(improvementTrend)}% from last test
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTests}</div>
            <p className="text-xs text-muted-foreground">
              Across {new Set(mockTestResults.map(r => r.workType)).size} different areas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Trend</CardTitle>
            {improvementTrend >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className={cn(
              "text-2xl font-bold",
              improvementTrend >= 0 ? "text-green-600" : "text-red-600"
            )}>
              {improvementTrend >= 0 ? "Improving" : "Declining"}
            </div>
            <p className="text-xs text-muted-foreground">
              Based on recent performance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Test History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Test Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTestResults.map((result) => (
              <div key={result.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 p-3 sm:p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="font-medium">{result.workType}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(result.date).toLocaleDateString()} • {result.timeSpent} minutes
                  </div>
                </div>
                <div className="text-left sm:text-right space-y-1">
                  <div className="text-lg font-bold">{result.score}%</div>
                  <div className="text-sm text-muted-foreground">
                    {result.score}/{result.totalQuestions} correct
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Performance chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};