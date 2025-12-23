"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <main className="min-h-screen bg-white font-sans text-base-300 selection:bg-accent-red selection:text-white">
            <NavMenu />

            {/* Hero Section - Dark Theme */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-base-300 pt-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-base-300/90 via-base-300/70 to-base-300" />
                </div>
                <div className="container mx-auto text-center relative z-10 px-4">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-accent-red font-bold tracking-widest text-xs uppercase">We're Here to Help</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-heading font-normal uppercase tracking-wide mb-6 text-white drop-shadow-2xl">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-2">
                        Ready to start your project? Contact us for quotes, technical support, or general inquiries.
                    </p>
                </div>
            </section>

            {/* Contact Section - Split Layout */}
            <section className="py-12 md:py-24 px-4 md:px-8 bg-gray-50 relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

                        {/* Left Column: Contact Info */}
                        <div className="space-y-8 md:space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-normal uppercase tracking-wide mb-4 md:mb-6 text-base-300">Contact <span className="text-accent-red">Info</span></h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    Reach out to us through any of the following channels. Our team is available to assist you with all your construction material needs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-red transition-colors">
                                        <Phone className="h-6 w-6 text-accent-red group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-wide mb-2 text-base-300">Call Us</h3>
                                    <p className="text-gray-500 font-medium">
                                        <a href="tel:+917606060629" className="hover:text-accent-red transition-colors">+91-7606060629</a>
                                    </p>
                                </div>

                                <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-red transition-colors">
                                        <Mail className="h-6 w-6 text-accent-red group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-wide mb-2 text-base-300">Email Us</h3>
                                    <p className="text-gray-500 font-medium break-all">
                                        <a href="mailto:sales@anandaenterprises.in" className="hover:text-accent-red transition-colors">sales@anandaenterprises.in</a>
                                    </p>
                                </div>

                                <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-red transition-colors">
                                            <MapPin className="h-6 w-6 text-accent-red group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-lg font-bold uppercase tracking-wide mb-2 text-base-300">Visit Our Office</h3>
                                            <p className="text-gray-500 font-medium leading-relaxed mb-4">
                                                ANANDA ENTERPRISES<br />
                                                1st Floor, Opposite Vibgyor School<br />
                                                HSR Layout, Bangalore – 560102
                                            </p>
                                            <div className="rounded-xl overflow-hidden h-48 w-full border border-gray-200">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939704463!2d77.6383669750756!3d12.92372278738734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146191401f95%3A0x1cf2770c4537c22c!2sVibgyor%20High%20School%20-%20HSR%20Layout!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 rounded-bl-full -mr-10 -mt-10" />

                            <h2 className="text-2xl md:text-3xl font-heading font-normal uppercase tracking-wide mb-8 text-base-300 relative z-10">Request a <span className="text-accent-red">Quote</span></h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="font-bold text-gray-700">Name</Label>
                                        <Input id="name" placeholder="Your Name" required className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="font-bold text-gray-700">Phone</Label>
                                        <Input id="phone" placeholder="Your Phone Number" required className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 h-12" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-bold text-gray-700">Email</Label>
                                    <Input id="email" type="email" placeholder="Your Email" required className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 h-12" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="material" className="font-bold text-gray-700">Material Required</Label>
                                        <Select>
                                            <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 h-12">
                                                <SelectValue placeholder="Select Material" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="tmt">TMT Steel Rods</SelectItem>
                                                <SelectItem value="cement">Cement</SelectItem>
                                                <SelectItem value="bulk">Bulk Construction Material</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="quantity" className="font-bold text-gray-700">Quantity (Approx)</Label>
                                        <Input id="quantity" placeholder="e.g. 5000 kg" className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 h-12" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="font-bold text-gray-700">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project requirements..." rows={4} className="bg-gray-50 border-gray-200 focus:border-accent-red focus:ring-accent-red/20 resize-none" />
                                </div>

                                <Button type="submit" className="w-full bg-accent-red hover:bg-red-700 text-white font-bold uppercase tracking-wide py-7 text-lg shadow-lg shadow-red-200 transition-all" disabled={submitted}>
                                    {submitted ? (
                                        <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Request Sent!</span>
                                    ) : (
                                        <span className="flex items-center gap-2">Submit Request <Send className="w-5 h-5" /></span>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us Section */}
            <section className="py-12 md:py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-heading font-normal uppercase tracking-wide mb-3 text-base-300">Fast Response</h3>
                            <p className="text-gray-500">We aim to respond to all inquiries within 2 business hours.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-heading font-normal uppercase tracking-wide mb-3 text-base-300">Best Price Guarantee</h3>
                            <p className="text-gray-500">Get the most competitive rates in the market directly from us.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-heading font-normal uppercase tracking-wide mb-3 text-base-300">Expert Advice</h3>
                            <p className="text-gray-500">Free consultation on material selection and quantity estimation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
