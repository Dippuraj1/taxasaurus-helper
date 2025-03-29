
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, UserCheck, AlertCircle, Search, Filter, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

const AccountantDashboard = () => {
  const pendingReviews = [
    { id: 1, name: "John Doe", status: "Awaiting Review", dueDate: "2023-07-31", type: "ITR-1" },
    { id: 2, name: "Sarah Johnson", status: "Awaiting Review", dueDate: "2023-07-28", type: "ITR-2" },
    { id: 3, name: "Mike Chen", status: "In Progress", dueDate: "2023-07-25", type: "ITR-1" },
    { id: 4, name: "Emily Wong", status: "In Progress", dueDate: "2023-07-30", type: "ITR-4" },
  ];

  const recentClients = [
    { id: 1, name: "Robert Brown", email: "robert@example.com", filings: 3 },
    { id: 2, name: "Anna Smith", email: "anna@example.com", filings: 2 },
    { id: 3, name: "David Lee", email: "david@example.com", filings: 1 },
    { id: 4, name: "Maria Garcia", email: "maria@example.com", filings: 4 },
    { id: 5, name: "James Wilson", email: "james@example.com", filings: 2 },
  ];

  return (
    <DashboardLayout userType="accountant">
      <div className="space-y-8">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Accountant Dashboard</h1>
            <p className="text-gray-500">Manage client tax filings and reviews</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="bg-tax-primary hover:bg-tax-primary/90">
              <UserCheck className="mr-2 h-4 w-4" />
              Add New Client
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43</div>
              <p className="text-xs text-gray-500">+5 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500">4 urgent (due in 3 days)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Filings</CardTitle>
              <UserCheck className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">27</div>
              <p className="text-xs text-gray-500">+8 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
              <AlertCircle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6.5h</div>
              <p className="text-xs text-green-500">-1.2h from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Pending Reviews */}
        <Card>
          <CardHeader>
            <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
              <div>
                <CardTitle>Pending Tax Reviews</CardTitle>
                <CardDescription>Tax filings awaiting your review</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All Reviews
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm font-medium text-gray-500">
                    <th className="pb-3 pl-0">Client</th>
                    <th className="pb-3">Filing Type</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Due Date</th>
                    <th className="pb-3 pr-0 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingReviews.map((review) => (
                    <tr key={review.id} className="border-b">
                      <td className="py-4 pl-0">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-tax-primary/20 text-tax-primary">
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{review.name}</span>
                        </div>
                      </td>
                      <td className="py-4">{review.type}</td>
                      <td className="py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            review.status === "Awaiting Review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {review.status}
                        </span>
                      </td>
                      <td className="py-4">{review.dueDate}</td>
                      <td className="py-4 pr-0 text-right">
                        <Button size="sm">Review</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Clients */}
        <Card>
          <CardHeader>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <CardTitle>Recent Clients</CardTitle>
                <CardDescription>Your recently active clients</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search clients..."
                    className="pl-8 md:w-[260px]"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recentClients.map((client) => (
                <Card key={client.id} className="border-2">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-tax-secondary/20 text-tax-secondary">
                            {client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{client.name}</p>
                          <p className="text-sm text-gray-500">{client.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">
                            {client.filings}
                          </span>{" "}
                          <span className="text-gray-500">filings</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AccountantDashboard;
