"use client"

import Link from "next/link"
import Image from "next/image"
import { Truck, Building2, Calculator, FileCheck, ArrowRight, CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-base-300 selection:bg-accent-red selection:text-white">
            <NavMenu />

            {/* Hero Section - Dark Theme */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-base-300 pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Construction Site"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-base-300/90 via-base-300/70 to-base-300" />
                </div>
                <div className="container mx-auto text-center relative z-10 px-4">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-accent-red font-bold tracking-widest text-xs uppercase">End-to-End Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-heading font-normal uppercase tracking-wide mb-6 text-white drop-shadow-2xl">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Tomorrow</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12 px-2">
                        From foundation to finish, we provide the materials and expertise to ensure your project's success.
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
                        <div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">500+</div>
                            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">100%</div>
                            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">On-Time Delivery</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">15+</div>
                            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">24/7</div>
                            <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Support Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services - Zig Zag Layout */}
            <section className="py-12 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 space-y-20 md:space-y-32">

                    {/* Service 1: Bulk Supply */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                        <div className="lg:w-1/2 relative w-full">
                            <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/tmt.jpg"
                                    alt="Bulk TMT Supply"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-accent-red rounded-lg text-white">
                                            <Truck className="h-5 w-5 md:h-6 md:w-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-base-300 text-sm md:text-base">Logistics Partner</div>
                                            <div className="text-[10px] md:text-xs text-gray-500">Pan-India Delivery</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full -z-10" />
                            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-red-50 rounded-full -z-10" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                Core Service
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4 md:mb-6">
                                Bulk & Retail <span className="text-accent-red">Supply</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                We specialize in the bulk supply of high-grade TMT bars tailored for large-scale infrastructure and residential projects. Our direct-from-plant sourcing ensures you get the best market rates without compromising on quality.
                            </p>
                            <ul className="space-y-4 mb-8 md:mb-10">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">All Grades Available</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Fe 500, Fe 500D, Fe 550D in all standard diameters (8mm - 32mm).</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Genuine Weight Guarantee</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">We ensure 100% transparency in weighing and billing.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Flexible Delivery</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Scheduled deliveries to match your construction timeline.</span>
                                    </div>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto">
                                <Link href="/contact">Request Quote</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Service 2: Cement Supply */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16">
                        <div className="lg:w-1/2 relative w-full">
                            <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/cement.jpg"
                                    alt="Premium Cement Supply"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-accent-red rounded-lg text-white">
                                            <Building2 className="h-5 w-5 md:h-6 md:w-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-base-300 text-sm md:text-base">Top Brands</div>
                                            <div className="text-[10px] md:text-xs text-gray-500">Ultratech, ACC, Birla</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 bg-gray-100 rounded-full -z-10" />
                            <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 bg-red-50 rounded-full -z-10" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                Essential Material
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4 md:mb-6">
                                Premium Cement <span className="text-accent-red">Distribution</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                As authorized dealers for India's leading cement brands, we supply fresh stock directly from the factory to your site. Whether you need OPC for high strength or PPC for durability, we have you covered.
                            </p>
                            <ul className="space-y-4 mb-8 md:mb-10">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Fresh Stock Assurance</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Guaranteed fresh cement to ensure maximum bonding strength.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Bulk & Bagged Options</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Available in 50kg bags or bulk tankers for RMC plants.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Technical Support</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Guidance on the right cement grade for your specific application.</span>
                                    </div>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto">
                                <Link href="/products/cement">View Brands</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Service 3: Turnkey Solutions */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                        <div className="lg:w-1/2 relative w-full">
                            <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                                    alt="Turnkey Solutions"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-accent-red rounded-lg text-white">
                                            <FileCheck className="h-5 w-5 md:h-6 md:w-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-base-300 text-sm md:text-base">Project Management</div>
                                            <div className="text-[10px] md:text-xs text-gray-500">End-to-End Supply</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full -z-10" />
                            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-red-50 rounded-full -z-10" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                For Developers
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4 md:mb-6">
                                Corporate & <span className="text-accent-red">Turnkey</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                We partner with major developers and contractors to provide comprehensive supply chain solutions. From initial cost estimation to final delivery, we act as your extended procurement arm.
                            </p>
                            <ul className="space-y-4 mb-8 md:mb-10">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Fixed Price Contracts</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Lock in prices for your project duration to avoid market fluctuations.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Dedicated Account Manager</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Single point of contact for all your material needs.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent-red mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-base-300 text-sm md:text-base">Credit Facilities</strong>
                                        <span className="text-gray-500 text-xs md:text-sm">Flexible payment terms for approved corporate clients.</span>
                                    </div>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto">
                                <Link href="/contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-12 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">
                            How We <span className="text-accent-red">Work</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                            A seamless process designed to get materials to your site efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                        {[
                            { icon: Calculator, title: "Requirement", desc: "Share your BOQ or use our calculator to estimate needs." },
                            { icon: FileCheck, title: "Quote & Lock", desc: "Get a transparent quote and lock the price." },
                            { icon: ShieldCheck, title: "Quality Check", desc: "Materials are inspected and weighed before dispatch." },
                            { icon: Truck, title: "Delivery", desc: "Timely delivery to your site with tracking." }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:border-accent-red transition-colors duration-300 relative">
                                    <step.icon className="h-8 w-8 md:h-10 md:w-10 text-base-300 group-hover:text-accent-red transition-colors" />
                                    <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-base-300 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-base-300 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 md:py-24 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">
                            Frequently Asked <span className="text-accent-red">Questions</span>
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-base md:text-lg font-bold text-base-300 text-left">Do you provide test certificates for TMT bars?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm md:text-base">
                                Yes, we provide original manufacturer test certificates (MTC) with every delivery to ensure the quality and grade of the steel.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-base md:text-lg font-bold text-base-300 text-left">What is the minimum order quantity for delivery?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm md:text-base">
                                For free delivery within city limits, the minimum order is usually 3 tons for steel or 50 bags for cement. Smaller orders can be arranged with a nominal transport fee.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-base md:text-lg font-bold text-base-300 text-left">Do you offer credit periods for builders?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm md:text-base">
                                Yes, we offer credit facilities for registered construction companies and regular clients after a standard credit check and approval process.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-base md:text-lg font-bold text-base-300 text-left">Can I return excess material?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-sm md:text-base">
                                Returns are accepted for undamaged, standard-sized materials within 7 days of delivery, subject to a restocking fee and transport charges.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section - Red Gradient */}
            <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="bg-gradient-to-r from-accent-red to-red-900 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-heading font-normal uppercase tracking-wide mb-6 text-white">Ready to Start Your Project?</h2>
                            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 md:mt-10">
                                <Button asChild size="lg" className="bg-white text-accent-red hover:bg-gray-100 text-lg px-10 py-7 rounded-full font-bold tracking-wide shadow-xl w-full md:w-auto">
                                    <Link href="/contact">Request Bulk Pricing</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full font-bold tracking-wide w-full md:w-auto">
                                    <Link href="/products">Download Material Rate Sheet</Link>
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
