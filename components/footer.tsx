import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-base-300 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <img
                                src="/logo.png"
                                alt="Ananda Enterprises"
                                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Your trusted partner in construction material supply. Since 2008, we have been building a strong foundation for your success.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Links could go here */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link href="/products" className="hover:text-accent-red transition-colors">
                                    Product Brochure
                                </Link>
                            </li>
                            <li>
                                <Link href="/#calculator" className="hover:text-accent-red transition-colors">
                                    TMT Rod Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-accent-red transition-colors">
                                    Today's Price
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-accent-red transition-colors">
                                    Bulk Order Discount
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Our Products</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link href="/products" className="hover:text-accent-red transition-colors">
                                    TMT Steel Rods
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-accent-red transition-colors">
                                    Cement (All Brands)
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-accent-red transition-colors">
                                    Construction Materials
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-accent-red transition-colors">
                                    Project Supply
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-accent-red shrink-0" />
                                <span>
                                    1st Floor, Opposite Vibgyor School,
                                    <br />
                                    HSR Layout, Bangalore – 560102
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-accent-red shrink-0" />
                                <a href="tel:+917606060629" className="hover:text-white transition-colors">
                                    +91-7606060629
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent-red shrink-0" />
                                <a href="mailto:sales@anandaenterprises.in" className="hover:text-white transition-colors">
                                    sales@anandaenterprises.in
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Clock className="w-5 h-5 mr-3 text-accent-red shrink-0" />
                                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 ANANDA ENTERPRISES. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
