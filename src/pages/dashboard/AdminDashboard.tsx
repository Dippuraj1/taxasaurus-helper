
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, Users, FileText, Shield, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-8">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Monitor platform usage and security</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              Export Reports
            </Button>
            <Button className="bg-tax-primary hover:bg-tax-primary/90">
              System Settings
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                12% from last month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Filings</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">783</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                23% from last week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Premium Users</CardTitle>
              <Shield className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">428</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                8% from last month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <div className="flex items-center text-xs text-red-500">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                3 resolved today
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>
              Real-time monitoring of system performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Response Time</span>
                  <span className="text-sm text-gray-500">320ms avg</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Server Load</span>
                  <span className="text-sm text-gray-500">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database Performance</span>
                  <span className="text-sm text-gray-500">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Storage Capacity</span>
                  <span className="text-sm text-gray-500">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities & Security Alerts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Latest system events and user activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    action: "User login",
                    description: "admin@taxasaurus.com logged in",
                    time: "2 minutes ago",
                    icon: <Users className="h-5 w-5 text-blue-500" />,
                  },
                  {
                    action: "System update",
                    description: "Tax calculation algorithm updated",
                    time: "1 hour ago",
                    icon: <FileText className="h-5 w-5 text-green-500" />,
                  },
                  {
                    action: "New user registration",
                    description: "5 new users registered",
                    time: "3 hours ago",
                    icon: <Users className="h-5 w-5 text-purple-500" />,
                  },
                  {
                    action: "Database backup",
                    description: "Automated backup completed",
                    time: "6 hours ago",
                    icon: <Shield className="h-5 w-5 text-gray-500" />,
                  },
                  {
                    action: "API integration",
                    description: "New CBDT API endpoint added",
                    time: "Yesterday",
                    icon: <FileText className="h-5 w-5 text-yellow-500" />,
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full border border-gray-200 bg-gray-50 p-2">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{activity.action}</h4>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Alerts</CardTitle>
              <CardDescription>
                Recent security events requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Multiple Failed Login Attempts",
                    description:
                      "5 failed login attempts for user john@example.com",
                    severity: "high",
                    time: "15 minutes ago",
                  },
                  {
                    title: "Suspicious File Upload",
                    description:
                      "Unusual document upload pattern detected",
                    severity: "medium",
                    time: "2 hours ago",
                  },
                  {
                    title: "API Rate Limit Exceeded",
                    description:
                      "API rate limit exceeded for client application",
                    severity: "low",
                    time: "5 hours ago",
                  },
                  {
                    title: "New Admin User Created",
                    description:
                      "New admin user account was created by system",
                    severity: "medium",
                    time: "Yesterday",
                  },
                ].map((alert, index) => (
                  <div
                    key={index}
                    className={`rounded-lg border p-4 ${
                      alert.severity === "high"
                        ? "border-red-200 bg-red-50"
                        : alert.severity === "medium"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-blue-200 bg-blue-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-1 ${
                          alert.severity === "high"
                            ? "bg-red-100 text-red-600"
                            : alert.severity === "medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4
                          className={`font-medium ${
                            alert.severity === "high"
                              ? "text-red-800"
                              : alert.severity === "medium"
                              ? "text-yellow-800"
                              : "text-blue-800"
                          }`}
                        >
                          {alert.title}
                        </h4>
                        <p
                          className={`text-sm ${
                            alert.severity === "high"
                              ? "text-red-600"
                              : alert.severity === "medium"
                              ? "text-yellow-600"
                              : "text-blue-600"
                          }`}
                        >
                          {alert.description}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {alert.time}
                          </span>
                          <Button
                            variant="ghost"
                            className="h-auto p-0 text-xs font-medium"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
