
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, ArrowRight, Upload, MessageSquare, AlertCircle } from "lucide-react";

const UserDashboard = () => {
  return (
    <DashboardLayout userType="user">
      <div className="space-y-8">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Welcome, John</h1>
            <p className="text-gray-500">Here's your tax filing status</p>
          </div>
          <Button className="bg-tax-primary hover:bg-tax-primary/90">
            <FileText className="mr-2 h-4 w-4" />
            Start New Tax Filing
          </Button>
        </div>

        {/* Tax filing progress */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>FY 2023-24 Tax Filing</CardTitle>
              <CardDescription>Due in 31 days</CardDescription>
            </div>
            <AlertCircle className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Filing Progress</span>
                <span className="text-sm text-gray-500">2/5 steps completed</span>
              </div>
              <Progress value={40} className="h-2" />
              <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-5">
                {["Income Details", "Deductions", "Investments", "Tax Calculation", "Review & Submit"].map(
                  (step, index) => (
                    <div
                      key={index}
                      className={`rounded-lg border ${
                        index < 2 ? "border-tax-primary bg-tax-lightBlue" : "border-gray-200"
                      } p-3 text-center`}
                    >
                      <div className="flex items-center justify-center">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            index < 2
                              ? "bg-tax-primary text-white"
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
              <Button className="mt-4 w-full" variant="outline">
                Continue Filing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <Upload className="mb-4 h-10 w-10 text-tax-primary" />
            <CardTitle className="text-lg">Upload Documents</CardTitle>
            <CardDescription className="mb-4">
              Upload your Form 16, investment proofs and other tax documents
            </CardDescription>
            <Button variant="outline" className="mt-auto">
              Upload Now
            </Button>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <FileText className="mb-4 h-10 w-10 text-tax-secondary" />
            <CardTitle className="text-lg">Previous Returns</CardTitle>
            <CardDescription className="mb-4">
              View and download your previously filed tax returns
            </CardDescription>
            <Button variant="outline" className="mt-auto">
              View History
            </Button>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <MessageSquare className="mb-4 h-10 w-10 text-tax-accent" />
            <CardTitle className="text-lg">AI Tax Assistant</CardTitle>
            <CardDescription className="mb-4">
              Get answers to your tax questions from our AI assistant
            </CardDescription>
            <Button variant="outline" className="mt-auto">
              Ask a Question
            </Button>
          </Card>
        </div>

        {/* Tax summary */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tax Estimation</CardTitle>
              <CardDescription>
                Based on your current income and deductions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Income</span>
                  <span className="font-medium">₹12,50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Deductions</span>
                  <span className="font-medium">₹2,75,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Taxable Income</span>
                  <span className="font-medium">₹9,75,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Estimated Tax</span>
                    <span className="text-lg font-bold text-tax-primary">₹1,07,500</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Saving Opportunities</CardTitle>
              <CardDescription>
                AI-suggested ways to maximize your tax savings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-yellow-800">
                        Additional 80C Investment Opportunity
                      </h3>
                      <p className="text-sm text-yellow-600">
                        You can save up to ₹15,000 more in taxes by investing additional ₹50,000 in ELSS mutual funds.
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-yellow-800">
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <AlertCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">
                        Home Loan Interest Deduction
                      </h3>
                      <p className="text-sm text-green-600">
                        You're eligible for home loan interest deduction under Section 24. Upload your loan statement to claim.
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-green-800">
                        Upload document
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
