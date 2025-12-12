"use client"

import Link from "next/link"
import { ArrowLeft, Layers, Hammer, Droplets, Box, Component, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"

export default function MaterialsPage() {
    const materials = [
        { name: "Sand (MSand / River)", icon: Layers, desc: "High quality river sand and manufactured sand for all construction needs." },
        { name: "Aggregates", icon: Component, desc: "20mm and 40mm aggregates for strong concrete mixing." },
        { name: "Bricks & Blocks", icon: Box, desc: "Solid concrete blocks, red bricks, and AAC blocks." },
        { name: "Waterproofing", icon: Droplets, desc: "Chemicals and compounds to protect your structure from water damage." },
        { name: "Ready-Mix Concrete", icon: Construction, desc: "Pre-mixed concrete delivered directly to your site." },
        { name: "Binding Wire", icon: Hammer, desc: "Strong and flexible binding wires for steel reinforcement." },
        { name: "Shuttering Materials", icon: Layers, desc: "Plywood and sheets for formwork." }
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
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Construction Materials</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Everything else you need to complete your project, from foundation to finish.
                    </p>
                </div>
            </section>

            {/* Materials Grid */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {materials.map((item) => (
                            <div key={item.name} className="group p-8 border border-base-300/10 rounded-2xl hover:border-accent-red/50 hover:shadow-xl transition-all duration-300 bg-base-200/30">
                                <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-8 w-8 text-accent-red" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-base-300 mb-4">{item.name}</h3>
                                <p className="text-base-secondary-dark font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-base-300 text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent-red/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Need Bulk Quantities?</h2>
                            <p className="text-xl mb-8 opacity-90 text-gray-300">We offer special discounts for bulk orders and project supplies.</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-base-300 hover:bg-gray-100 font-bold uppercase tracking-wide px-8 py-6">
                                <Link href="/contact">Request Bulk Discount</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
