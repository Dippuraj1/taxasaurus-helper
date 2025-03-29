
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  ArrowRight, 
  AlertCircle, 
  BarChart3, 
  Clock, 
  TrendingUp,
  RefreshCw,
  ExternalLink
} from "lucide-react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Slider } from "@/components/ui/slider";

// Sample data for charts
const filingActivityData = [
  { month: "Jan", filings: 3 },
  { month: "Feb", filings: 5 },
  { month: "Mar", filings: 2 },
  { month: "Apr", filings: 7 },
  { month: "May", filings: 4 },
  { month: "Jun", filings: 6 },
  { month: "Jul", filings: 8 },
  { month: "Aug", filings: 5 },
  { month: "Sep", filings: 4 },
  { month: "Oct", filings: 6 },
  { month: "Nov", filings: 3 },
  { month: "Dec", filings: 1 },
];

const UserDashboard = () => {
  return (
    <DashboardLayout userType="user">
      <div className="space-y-8">
        <div className="rounded-xl bg-gradient-to-r from-amber-100 to-amber-200 p-6">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-amber-900">Welcome, John</h1>
              <p className="text-amber-800">Here's your tax filing status</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-amber-600 hover:bg-amber-700">
                <FileText className="mr-2 h-4 w-4" />
                New Tax Filing
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid - First Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Filings</CardTitle>
              <RefreshCw className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,270</div>
              <p className="text-xs text-green-600">+4% from last month</p>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={40}>
                  <BarChart data={filingActivityData.slice(-5)} barSize={6}>
                    <Bar dataKey="filings" fill="#FFC107" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Actions</CardTitle>
              <RefreshCw className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7</div>
              <p className="text-xs text-amber-600">+2 this week</p>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={40}>
                  <BarChart data={[
                    {name: 'Mon', value: 1},
                    {name: 'Tue', value: 2},
                    {name: 'Wed', value: 0},
                    {name: 'Thu', value: 3},
                    {name: 'Fri', value: 1}
                  ]} barSize={6}>
                    <Bar dataKey="value" fill="#FFA000" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completed Tasks</CardTitle>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">101</div>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={60}>
                  <BarChart 
                    data={[
                      {hour: '09:00', tasks: 12},
                      {hour: '11:00', tasks: 18},
                      {hour: '13:00', tasks: 15},
                      {hour: '15:00', tasks: 20},
                      {hour: '17:00', tasks: 24},
                      {hour: '19:00', tasks: 12}
                    ]} 
                    barSize={4}
                  >
                    <XAxis dataKey="hour" tick={false} axisLine={false} />
                    <Bar dataKey="tasks" fill="#FFD54F" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Deduction / Income</CardTitle>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">75<span className="text-sm">%</span></div>
                  <p className="text-xs text-gray-500">Deductions</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-right">25<span className="text-sm">%</span></div>
                  <p className="text-xs text-gray-500 text-right">Income</p>
                </div>
              </div>
              <div className="mt-4">
                <Slider 
                  defaultValue={[75]} 
                  max={100} 
                  step={1} 
                  disabled 
                  className="h-1.5"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid - Second Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-sm lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Average Waiting Time</CardTitle>
              <RefreshCw className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">01:13</div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>00:00</span>
                  <span>00:20</span>
                  <span>00:40</span>
                  <span>01:00</span>
                  <span>01:20</span>
                  <span>01:40</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-200 to-amber-400" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm font-medium text-gray-600">Sentiment</CardTitle>
                <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                  <span>Week</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-4 grid grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div className="mb-2 text-xs text-gray-500">{day}</div>
                    <div className="flex flex-col gap-2">
                      <div className={`h-1 w-12 rounded-full ${index === 0 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 w-12 rounded-full ${index === 1 || index === 6 ? 'bg-gray-400' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 w-12 rounded-full ${index === 2 ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tax filing progress */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>FY 2023-24 Tax Filing</CardTitle>
              <CardDescription>Due in 31 days</CardDescription>
            </div>
            <AlertCircle className="h-5 w-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Filing Progress</span>
                <span className="text-sm text-gray-500">2/5 steps completed</span>
              </div>
              <Progress value={40} className="h-2 bg-gray-100" indicatorClassName="bg-amber-400" />
              <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-5">
                {["Income Details", "Deductions", "Investments", "Tax Calculation", "Review & Submit"].map(
                  (step, index) => (
                    <div
                      key={index}
                      className={`rounded-lg border ${
                        index < 2 ? "border-amber-300 bg-amber-50" : "border-gray-200"
                      } p-3 text-center`}
                    >
                      <div className="flex items-center justify-center">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            index < 2
                              ? "bg-amber-400 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium">{step}</p>
                    </div>
                  )
                )}
              </div>
              <Button className="mt-4 w-full bg-amber-500 hover:bg-amber-600">
                Continue Filing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-none shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="rounded-full bg-amber-100 p-3 mb-4">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle className="text-lg">Time Tracking</CardTitle>
            <CardDescription className="mb-4">
              Track time spent on tax preparation and filing
            </CardDescription>
            <Button variant="outline" className="mt-auto border-amber-200 text-amber-700 hover:bg-amber-50">
              Start Timer
            </Button>
          </Card>

          <Card className="border-none shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="rounded-full bg-amber-100 p-3 mb-4">
              <BarChart3 className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle className="text-lg">Tax Analytics</CardTitle>
            <CardDescription className="mb-4">
              View detailed analytics of your tax filings and payments
            </CardDescription>
            <Button variant="outline" className="mt-auto border-amber-200 text-amber-700 hover:bg-amber-50">
              View Reports
            </Button>
          </Card>

          <Card className="border-none shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="rounded-full bg-amber-100 p-3 mb-4">
              <TrendingUp className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle className="text-lg">Tax Optimization</CardTitle>
            <CardDescription className="mb-4">
              Get AI-powered recommendations to optimize your tax savings
            </CardDescription>
            <Button variant="outline" className="mt-auto border-amber-200 text-amber-700 hover:bg-amber-50">
              View Suggestions
            </Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
