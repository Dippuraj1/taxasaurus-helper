
import { FileText, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 px-5 md:px-[30px]">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-tax-primary" />
              <span className="text-xl font-bold text-tax-primary">Taxasaurus</span>
            </div>
            <p className="text-sm text-gray-500">
              AI-powered tax filing made simple, secure, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tax-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-tax-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-tax-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-tax-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  AI Tax Filing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Document Storage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Tax Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  AI Tax Assistant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Digilocker Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-tax-primary mr-2" />
                <a href="mailto:support@taxasaurus.in" className="text-gray-500 hover:text-tax-primary">
                  support@taxasaurus.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-tax-primary mr-2" />
                <a href="tel:+919899123456" className="text-gray-500 hover:text-tax-primary">
                  +91 9899 123 456
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 text-tax-primary mr-2" />
                <a href="https://wa.me/919899123456" className="text-gray-500 hover:text-tax-primary">
                  WhatsApp Support
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-500">
                  123 Tax Street, Infotech Park<br />
                  Bengaluru, Karnataka 560001
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-tax-primary">
                  DPDP Certification
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2023 Taxasaurus. All rights reserved. CBDT API Certified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
