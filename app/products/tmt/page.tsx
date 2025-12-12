"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { BrandGrid } from "@/components/brand-grid"

export default function TmtPage() {
    const premiumBrands = [
        { name: "Tata Tiscon", logo: "https://cdn.worldvectorlogo.com/logos/tata-1.svg" },
        { name: "JSW Neosteel", logo: "/JSWSTEEL.NS.svg" },
        { name: "Jindal Panther", logo: "/JINDALSTEL.NS_BIG.svg" },
        { name: "SAIL TMT" },
        { name: "Vizag Steel" }
    ]

    const economyTmt = [
        { name: "INDUS TMT" },
        { name: "Prime Gold TMT" },
        { name: "Sunvik TMT" },
        { name: "IndiaGold TMT" },
        { name: "A-One Gold Steel" },
        { name: "Jindal TMT" },
        { name: "Meenakshi TMT" },
        { name: "Tirumala TMT" },
        { name: "Maharashi TMT" },
        { name: "SK Super TMT" },
        { name: "Turbo TMT" },
        { name: "Gopala TMT" },
        { name: "Goel TMT" },
        { name: "Somani Gold TMT" },
        { name: "Kamdhenu TMT", logo: "https://seeklogo.com/images/K/kamdhenu-steel-logo-C05B5C0551-seeklogo.com.png" },
        { name: "Bhuwalka TMT" },
        { name: "MTC TMT" },
        { name: "Pulkit TMT" },
        { name: "President TMT" },
        { name: "Sumangala" },
        { name: "RD TMT" },
        { name: "Hoysala TMT" },
        { name: "VRKP TMT" },
        { name: "Durastrong TMT" },
        { name: "Kamachi TMT" },
        { name: "BlueGold TMT" },
        { name: "Shriram TMT" },
        { name: "BMM TMT" },
        { name: "Magna TMT" }
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
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">TMT Steel Rods</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        We supply all major South Indian, Karnataka, and National brands.
                    </p>
                </div>
            </section>

            {/* Premium Brands Logos */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <BrandGrid brands={premiumBrands} title="Premium Brands" />

                    {/* Technical Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-base-200 p-8 rounded-2xl border border-base-300/10">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-base-300 mb-6">Technical Specifications</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="h-2 w-2 bg-accent-red rounded-full mr-4 mt-2"></div>
                                    <div>
                                        <span className="font-bold text-lg block">Grades Available</span>
                                        <span className="text-base-secondary-dark">Fe550, Fe550D, Fe500, Fe500D</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-2 w-2 bg-accent-red rounded-full mr-4 mt-2"></div>
                                    <div>
                                        <span className="font-bold text-lg block">Sizes Available</span>
                                        <span className="text-base-secondary-dark">8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-2 w-2 bg-accent-red rounded-full mr-4 mt-2"></div>
                                    <div>
                                        <span className="font-bold text-lg block">Length</span>
                                        <span className="text-base-secondary-dark">Standard 12 meters (Custom lengths on bulk orders)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-base-300 text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-accent-red/10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Why Buy TMT from Ananda?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-1" />
                                        <span><strong>Accurate Weight:</strong> Precise unit calculations of Metric Tons, Kgs, Bundles, and Rods.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-1" />
                                        <span><strong>Transparent Pricing:</strong> Formal order confirmation agreements with price capping.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-1" />
                                        <span><strong>Direct Supply:</strong> Direct-from-plant options for large projects.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <BrandGrid brands={economyTmt} title="Economy & Mid-Range Brands" />

                    <div className="text-center mt-16">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-wide">
                            <Link href="/contact">Get Today's TMT Prices</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
