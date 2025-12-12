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
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Cement</h1>
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
                                <h3 className="text-xl font-black uppercase tracking-tighter text-base-300 mb-2">{type.title}</h3>
                                <p className="text-sm text-base-secondary-dark">{type.desc}</p>
                            </div>
                        ))}
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
