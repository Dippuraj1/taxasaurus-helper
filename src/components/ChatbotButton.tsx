
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-tax-primary p-0 shadow-lg hover:bg-tax-primary/90"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6 text-white" />
        <span className="sr-only">Open AI Tax Assistant</span>
      </Button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex max-h-[calc(100vh-80px)] w-full max-w-md flex-col overflow-hidden rounded-xl shadow-2xl">
          <Card className="flex flex-col border-0">
            <div className="flex items-center justify-between border-b bg-tax-primary p-4 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-semibold">AI Tax Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-tax-primary/80"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="mb-4 rounded-lg bg-gray-100 p-3">
                <p className="text-sm text-gray-800">
                  Hello! I'm your AI tax assistant powered by Claude. How can I help you with your tax filing today?
                </p>
              </div>
              <div className="mb-4 ml-auto max-w-[80%] rounded-lg bg-tax-primary p-3 text-white">
                <p className="text-sm">
                  What deductions am I eligible for?
                </p>
              </div>
              <div className="mb-4 rounded-lg bg-gray-100 p-3">
                <p className="text-sm text-gray-800">
                  Based on typical taxpayer profiles, you might be eligible for:
                  <br /><br />
                  1. Section 80C deductions (up to ₹1.5 lakh) - PPF, ELSS, home loan principal<br />
                  2. Section 80D - Health insurance premiums<br />
                  3. Section 80TTA - Interest on savings account (up to ₹10,000)<br />
                  <br />
                  If you upload your income documents, I can provide personalized recommendations!
                </p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-tax-primary focus:outline-none"
                  placeholder="Ask anything about taxes..."
                  disabled
                />
                <Button size="sm" className="bg-tax-primary hover:bg-tax-primary/90">
                  Send
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                Powered by Anthropic Claude AI
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
