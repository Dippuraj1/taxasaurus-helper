
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  Home, 
  User, 
  Settings, 
  LogOut, 
  BarChart, 
  FileQuestion, 
  Upload,
  MessageSquare,
  Shield,
  Users,
  HelpCircle,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

type DashboardLayoutProps = {
  children: ReactNode;
  userType: "user" | "accountant" | "admin";
};

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const getNavItems = () => {
    const userItems = [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", path: "/dashboard/user" },
      { icon: <FileText className="h-5 w-5" />, label: "File Taxes", path: "/dashboard/user/file-taxes" },
      { icon: <BarChart className="h-5 w-5" />, label: "Tax History", path: "/dashboard/user/tax-history" },
      { icon: <Upload className="h-5 w-5" />, label: "Documents", path: "/dashboard/user/documents" },
      { icon: <MessageSquare className="h-5 w-5" />, label: "AI Assistant", path: "/dashboard/user/assistant" },
      { icon: <HelpCircle className="h-5 w-5" />, label: "Help", path: "/dashboard/user/help" },
    ];

    const accountantItems = [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", path: "/dashboard/accountant" },
      { icon: <Users className="h-5 w-5" />, label: "Clients", path: "/dashboard/accountant/clients" },
      { icon: <FileQuestion className="h-5 w-5" />, label: "Pending Reviews", path: "/dashboard/accountant/reviews" },
      { icon: <BarChart className="h-5 w-5" />, label: "Reports", path: "/dashboard/accountant/reports" },
      { icon: <MessageSquare className="h-5 w-5" />, label: "Client Chat", path: "/dashboard/accountant/chat" },
      { icon: <HelpCircle className="h-5 w-5" />, label: "Resources", path: "/dashboard/accountant/resources" },
    ];

    const adminItems = [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", path: "/dashboard/admin" },
      { icon: <Users className="h-5 w-5" />, label: "Users", path: "/dashboard/admin/users" },
      { icon: <Shield className="h-5 w-5" />, label: "Security", path: "/dashboard/admin/security" },
      { icon: <BarChart className="h-5 w-5" />, label: "Analytics", path: "/dashboard/admin/analytics" },
      { icon: <Settings className="h-5 w-5" />, label: "Settings", path: "/dashboard/admin/settings" },
      { icon: <FileText className="h-5 w-5" />, label: "Logs", path: "/dashboard/admin/logs" },
    ];

    switch (userType) {
      case "user":
        return userItems;
      case "accountant":
        return accountantItems;
      case "admin":
        return adminItems;
      default:
        return userItems;
    }
  };

  const navItems = getNavItems();
  
  const getUserInfo = () => {
    switch (userType) {
      case "user":
        return { name: "John Doe", email: "johndoe@example.com", role: "User" };
      case "accountant":
        return { name: "Jane Smith", email: "janesmith@example.com", role: "Tax Accountant" };
      case "admin":
        return { name: "Admin User", email: "admin@taxasaurus.com", role: "Administrator" };
      default:
        return { name: "User", email: "user@example.com", role: "User" };
    }
  };

  const userInfo = getUserInfo();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 border-r border-gray-200 bg-white md:flex md:flex-col">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-tax-primary" />
            <span className="text-xl font-bold text-tax-primary">Taxasaurus</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col space-y-1 p-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start px-3 py-6"
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </Button>
          ))}
        </nav>
        <div className="border-t border-gray-200 p-4">
          <Button
            variant="ghost"
            className="flex w-full items-center gap-2 text-gray-500"
            onClick={() => navigate("/")}
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-tax-primary" />
          <span className="text-xl font-bold text-tax-primary">Taxasaurus</span>
        </div>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 hidden h-16 items-center justify-between border-b border-gray-200 bg-white px-6 md:flex">
          <h1 className="text-xl font-semibold">{userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-tax-primary"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-tax-primary text-white">
                      {userInfo.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.role}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 pt-20 md:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
