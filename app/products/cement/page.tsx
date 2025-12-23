"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { BrandGrid } from "@/components/brand-grid"

export default function CementPage() {
    const featuredBrands = [
        { name: "UltraTech Cement", logo: "/ULTRACEMCO.NS.png" },
        { name: "ACC Cement", logo: "/ACC.NS_BIG.png" },
        { name: "Ambuja Cement", logo: "/AMBUJACEM.NS.svg" }
    ]

    const otherBrands = [
        { name: "Birla Super", logo: "/ABREL.NS.png" }, // Fallback to group logo or similar
        { name: "Ramco Cement", logo: "/RAMCOCEM.NS_BIG.svg" },
        { name: "Dalmia Cement", logo: "/DALBHARAT.NS_BIG.svg" },
        { name: "JSW Cement", logo: "/JSWSTEEL.NS.svg" }, // Using JSW group logo
        { name: "Priya Cement" },
        { name: "Zuari Cement" },
        { name: "Chettinad Cement" },
        { name: "Bharathi Cement" },
        { name: "Penna Cement" },
        { name: "Maha Cement" }
    ]

    return (
        <main className="min-h-screen bg-white font-sans">
            <NavMenu />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 md:px-8 bg-base-300 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-red/5 z-0"></div>
                <div className="container mx-auto text-center relative z-10">
                    <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-heading font-normal uppercase tracking-wide mb-6">Cement</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Supply of OPC 43, OPC 53, PPC, and Slag Cement in bulk and bags.
                    </p>
                </div>
            </section>

            {/* Featured Brands Logos */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <BrandGrid brands={featuredBrands} title="Featured Brands" />

                    {/* Cement Types */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { title: "OPC 43 / 53", desc: "Ordinary Portland Cement for general construction." },
                            { title: "PPC Cement", desc: "Portland Pozzolana Cement for durability." },
                            { title: "Slag Cement", desc: "Portland Slag Cement for chemical resistance." },
                            { title: "Rapid Hardening", desc: "For projects requiring quick setting times." }
                        ].map((type) => (
                            <div key={type.title} className="bg-base-200 p-6 rounded-xl border border-base-300/10 hover:border-accent-red/30 transition-colors">
                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-2">{type.title}</h3>
                                <p className="text-sm text-base-secondary-dark">{type.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* JSW Feature Section */}
                    <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/JSWSTEEL.NS.svg"
                                        alt="JSW Cement"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-bold tracking-wide uppercase">
                                    Green Cement
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    JSW <span className="text-accent-red">Cement</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    JSW Cement is a leader in sustainable construction solutions. With OPC 53 Grade for rapid high-strength needs and PPC 53 Grade for enhanced durability and chemical resistance, JSW offers superior performance for modern infrastructure.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">OPC 53</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Rapid <span className="text-sm font-sans font-normal text-gray-500">Setting</span></div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">PPC 53</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Eco <span className="text-sm font-sans font-normal text-gray-500">Friendly</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Grade Benefits</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>OPC 53:</strong> High early strength, perfect for high-rises and bridges.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>PPC 53:</strong> Enhanced durability, lower heat release (less cracking), and chemical resistance.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Applications:</strong> Ideal for mass concrete, marine structures, and sustainable builds.</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request JSW Price</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Dalmia Feature Section */}
                    <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/DALBHARAT.NS_BIG.svg"
                                        alt="Dalmia Cement"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold tracking-wide uppercase">
                                    Future Today
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    Dalmia <span className="text-accent-red">Cement</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Dalmia Cement provides specialized solutions for every construction need. From high-strength OPC 53 for structural elements to durable PPC for general construction and coastal resilience, Dalmia ensures long-term strength and stability.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">OPC 53</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Structural <span className="text-sm font-sans font-normal text-gray-500">Strength</span></div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">PPC</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Chemical <span className="text-sm font-sans font-normal text-gray-500">Resistant</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Application Guide</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>OPC 53:</strong> High-strength, ideal for columns, beams, and foundations. Rapid development.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>PPC:</strong> Excellent durability and workability. Perfect for general construction and plastering.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Resilience:</strong> PPC offers superior resistance in coastal areas and chemically aggressive environments.</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request Dalmia Price</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* UltraTech Feature Section */}
                    <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-yellow-400 shadow-inner border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/ULTRACEMCO.NS.png"
                                        alt="UltraTech Cement"
                                        fill
                                        className="object-contain p-4 mix-blend-multiply"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold tracking-wide uppercase">
                                    India's No.1
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    UltraTech <span className="text-accent-red">Cement</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    UltraTech Cement is the engineer's choice, offering distinct advantages with its 43 and 53 Grade OPC. While 53 Grade provides higher strength for heavy-duty infrastructure and high-rises, 43 Grade offers excellent general strength for residential finishing.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">53 Grade</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">High Strength <span className="text-sm font-sans font-normal text-gray-500">Fast Set</span></div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">43 Grade</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Durable <span className="text-sm font-sans font-normal text-gray-500">Finish</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Grade Comparison</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>53 Grade:</strong> ≥53 MPa strength. Ideal for high-rises, bridges, and heavy-duty work.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>43 Grade:</strong> ≥43 MPa strength. Perfect for residential construction and plastering.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Curing:</strong> Adequate curing is crucial for both, especially for the fast-setting 53 Grade.</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request UltraTech Price</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* ACC Feature Section */}
                    <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/ACC.NS_BIG.png"
                                        alt="ACC Concrete Plus"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                    Premium Quality
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    ACC Concrete <span className="text-accent-red">Plus</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    ACC Concrete Plus is a premium, high-strength cement designed for superior performance, combining high-quality clinker with advanced additives for greater volume, enhanced strength, and long-lasting durability.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Protection</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Corrosion <span className="text-sm font-sans font-normal text-gray-500">Resistant</span></div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Durability</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">Long <span className="text-sm font-sans font-normal text-gray-500">Lasting</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Key Benefits</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Strength:</strong> Ideal for strong foundations, columns, beams, and slabs.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Performance:</strong> Better water resistance and superior finish.</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Versatility:</strong> Suitable for both residential and commercial projects.</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request ACC Price</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <BrandGrid brands={otherBrands} title="More Trusted Brands" />

                    <div className="text-center mt-16">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-wide">
                            <Link href="/contact">Get Today's Cement Prices</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
