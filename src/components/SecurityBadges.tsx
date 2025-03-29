
import { Shield, Lock, CheckCircle } from "lucide-react";

const SecurityBadges = () => {
  return (
    <section className="bg-tax-lightBlue py-12">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Security & Compliance You Can Trust
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Your data security is our top priority. We employ multiple layers of protection to ensure your financial information remains private and secure.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-tax-secondary" />
                <div>
                  <span className="font-medium">End-to-End Encryption:</span> All your data is protected with AES-256 encryption, the same standard used by banks.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-tax-secondary" />
                <div>
                  <span className="font-medium">Multi-Factor Authentication:</span> Additional security layer with OTP and device verification.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-tax-secondary" />
                <div>
                  <span className="font-medium">Regular Security Audits:</span> Our systems undergo continuous security testing and monitoring.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Shield className="h-10 w-10 text-tax-primary" />
                <h3 className="text-lg font-medium">GDPR Compliant</h3>
                <p className="text-center text-sm text-gray-500">
                  Full compliance with data protection regulations
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Lock className="h-10 w-10 text-tax-secondary" />
                <h3 className="text-lg font-medium">DPDP Certified</h3>
                <p className="text-center text-sm text-gray-500">
                  Adheres to Data Protection and Privacy standards
                </p>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-tax-accent" />
                  <Lock className="h-6 w-6 text-tax-primary" />
                  <CheckCircle className="h-6 w-6 text-tax-secondary" />
                </div>
                <h3 className="text-lg font-medium">Government API Certified</h3>
                <p className="text-center text-sm text-gray-500">
                  Official integration with CBDT and Digilocker APIs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <Shield className="h-5 w-5 text-tax-primary" />
            <span className="text-sm font-medium">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <Lock className="h-5 w-5 text-tax-secondary" />
            <span className="text-sm font-medium">End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <CheckCircle className="h-5 w-5 text-tax-accent" />
            <span className="text-sm font-medium">Government API Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
