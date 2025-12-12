"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Truck, BadgePercent, CheckCircle2, Building2 } from "lucide-react"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProductsLandingPage() {
    const categories = [
        {
            title: "TMT Steel Rods",
            desc: "High-grade TMT bars ensuring structural integrity and longevity. Available in all grades (Fe 500, 500D, 550D).",
            image: "/tmt.jpg",
            href: "/products/tmt",
            features: ["Fe 500 & 550D", "Rust Resistant", "High Ductility"]
        },
        {
            title: "Premium Cement",
            desc: "Top-tier cement brands for solid foundations. OPC and PPC options available for diverse construction needs.",
            image: "/cement.jpg",
            href: "/products/cement",
            features: ["OPC 53 Grade", "PPC", "Bulk Supply"]
        },
        {
            title: "Construction Materials",
            desc: "Essential supplies including M-Sand, P-Sand, solid blocks, and aggregates for complete project support.",
            image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=2076&auto=format&fit=crop",
            href: "/products/materials",
            features: ["M-Sand / P-Sand", "Solid Blocks", "Aggregates"]
        }
    ]

    const brands = [
        "Tata Tiscon", "JSW Steel", "Indus TMT", "Ultratech", "ACC Cement", "Birla A1", "Kamdhenu", "Vizag Steel"
    ]

    return (
        <main className="min-h-screen bg-white font-sans text-base-300 selection:bg-accent-red selection:text-white">
            <NavMenu />

            {/* Hero Section - Dark Theme for Premium Feel */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-base-300 pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                        alt="Construction Site"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-base-300/80 via-base-300/50 to-base-300" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-accent-red font-bold tracking-widest text-xs uppercase">Trusted by Top Builders</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 drop-shadow-2xl">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Materials</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-2">
                        Source the finest TMT steel, cement, and construction supplies directly from authorized distributors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <Button asChild size="lg" className="bg-accent-red hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-bold tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all w-full sm:w-auto">
                            <Link href="#catalog">View Catalog</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg font-bold tracking-wide backdrop-blur-sm w-full sm:w-auto">
                            <Link href="/contact">Bulk Enquiry</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Brands Ticker - Light Gray for Contrast */}
            <section className="py-10 border-b border-gray-100 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-6 font-bold">Authorized Dealers For</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {brands.map((brand) => (
                            <span key={brand} className="text-lg md:text-2xl font-black text-gray-400 uppercase tracking-tighter hover:text-base-300 cursor-default transition-colors">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories - White Background for Clean Look */}
            <section id="catalog" className="py-12 md:py-24 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-base-300">Our <span className="text-accent-red">Catalog</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">Comprehensive solutions for every stage of construction.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <Link href={category.href} key={category.title} className="group relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden cursor-pointer border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Background Image Area */}
                                <div className="absolute top-0 left-0 w-full h-3/5 overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-white via-white/80 to-transparent">
                                    <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                        <div className="w-12 h-1 bg-accent-red mb-4 md:mb-6" />
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-base-300 mb-2 md:mb-3 group-hover:text-accent-red transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 md:mb-6 line-clamp-2 group-hover:line-clamp-none transition-all text-sm md:text-base">
                                            {category.desc}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-2 mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 hidden md:block">
                                            {category.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-gray-500 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-red mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center text-base-300 font-bold uppercase tracking-widest text-xs md:text-sm group-hover:gap-3 transition-all">
                                            Explore <ArrowRight className="ml-2 h-4 w-4 text-accent-red" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Accent Section */}
            <section className="py-12 md:py-24 px-4 md:px-8 bg-base-300 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent_50%)]" />

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Why Choose <span className="text-accent-red">Ananda</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">Building trust through quality and reliability since 2008.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-red/20 transition-colors">
                                <BadgePercent className="w-6 h-6 md:w-7 md:h-7 text-accent-red" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-wide">Direct Pricing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Get the best market rates directly from manufacturers, eliminating middleman costs.</p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-red/20 transition-colors">
                                <Truck className="w-6 h-6 md:w-7 md:h-7 text-accent-red" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-wide">Fast Delivery</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Same-day or next-day delivery across Bangalore and surrounding districts.</p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-red/20 transition-colors">
                                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-accent-red" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-wide">Quality Assured</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">100% genuine products with manufacturer test certificates and warranty.</p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-red/20 transition-colors">
                                <Building2 className="w-6 h-6 md:w-7 md:h-7 text-accent-red" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-wide">Project Support</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Dedicated account managers for large-scale construction projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Red Gradient */}
            <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="bg-gradient-to-r from-accent-red to-red-900 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-white">Ready to Build?</h2>
                            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 font-medium">
                                Get a custom quote for your project today. We guarantee the best price and service.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-white text-accent-red hover:bg-gray-100 text-lg px-10 py-7 rounded-full font-bold tracking-wide shadow-xl w-full sm:w-auto">
                                    <Link href="/contact">Get Custom Quote</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full font-bold tracking-wide w-full sm:w-auto">
                                    <Link href="/#calculator">Calculate Requirements</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
