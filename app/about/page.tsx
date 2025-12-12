import Image from "next/image"
import { CheckCircle, Target, Eye, Award } from "lucide-react"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <NavMenu />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 md:px-8 bg-gray-900 text-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Your trusted partner in construction material supply since 2008.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Founded in 2008, ANANDA ENTERPRISES has established itself as a trusted supplier of construction materials, structural steel, TMT rods, cement, and B2B project essentials.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            With strong expertise in construction and project acquisitions, we understand the critical need for reliable materials, timely delivery, and transparent pricing.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our experience comes from executing and supporting construction projects across residential, commercial, and industrial sectors.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                            alt="Construction Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-600">
                        <div className="flex items-center mb-4">
                            <Target className="h-8 w-8 text-red-600 mr-4" />
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg">
                            To provide quality-assured, branded construction materials at competitive rates with dependable logistics and professional service.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-black">
                        <div className="flex items-center mb-4">
                            <Eye className="h-8 w-8 text-black mr-4" />
                            <h2 className="text-2xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg">
                            To become Bangalore’s most reliable building materials supplier through innovation, scale, and customer-centric service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Strengths */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Strengths</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <Award className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">16+ Years Experience</h3>
                            <p className="text-gray-600">Deep technical and supply chain expertise.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <CheckCircle className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Strong Partnerships</h3>
                            <p className="text-gray-600">Direct relationships with major vendors and manufacturers.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <CheckCircle className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Direct Supply</h3>
                            <p className="text-gray-600">Direct-from-plant supply options for bulk orders.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <CheckCircle className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                            <p className="text-gray-600">Complete transparency in pricing & weights.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <CheckCircle className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                            <p className="text-gray-600">Technical support for builders & contractors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 px-4 md:px-8 bg-black text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Residential Construction</span>
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Commercial Buildings</span>
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Infrastructure Projects</span>
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Contractors & Builders</span>
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Corporate Fit-outs</span>
                        <span className="px-6 py-3 bg-gray-800 rounded-full text-lg">Retail Material Sales</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
