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
                    <h1 className="text-5xl md:text-7xl font-heading font-normal uppercase tracking-wide mb-6">TMT Steel Rods</h1>
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
                            <h3 className="text-2xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">Technical Specifications</h3>
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
                                <h3 className="text-2xl font-heading font-normal uppercase tracking-wide mb-6">Why Buy TMT from Ananda?</h3>
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


                    {/* Bhuwalka Feature Section */}
                    <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/bhuwalka.png"
                                        alt="Bhuwalka Steel TMT"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                    Premium Partner
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    Bhuwalka Steel <span className="text-accent-red">Industries</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Founded in 1981 and headquartered in Bengaluru, Bhuwalka Steel Industries Ltd. (BSIL) is one of South India's largest and most trusted rolling mills. Known for its "Bhuwalka Premier Steel TMT Bars," they utilize advanced technology to deliver superior strength and durability.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Strength</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">500 - 545 <span className="text-sm font-sans font-normal text-gray-500">N/mm²</span></div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Elongation</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">12% <span className="text-sm font-sans font-normal text-gray-500">Min</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Product Specifications</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Composition:</strong> Low Phos (0.06%), Carbon (0.25%), Sulphur (0.06%)</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Grades:</strong> Fe500, Fe550, and Fe500D</span>
                                    </li>
                                    <li className="flex items-start text-sm md:text-base text-gray-600">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <span><strong>Approvals:</strong> Trusted by major Government departments & institutions.</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request Bhuwalka Price</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* JSW Feature Section */}
                    <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 items-center">
                            <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-gray-50 shadow-inner border border-gray-100 px-8 flex items-center justify-center">
                                <div className="relative w-full h-full min-h-[300px]">
                                    <Image
                                        src="/JSWSTEEL.NS.svg"
                                        alt="JSW Steel"
                                        fill
                                        className="object-contain p-8"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block mb-4 px-3 py-1 bg-red-50 text-accent-red rounded-full text-sm font-bold tracking-wide uppercase">
                                    Global Leader
                                </div>
                                <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                    JSW <span className="text-accent-red">Steel</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    JSW Steel is a major Indian steel manufacturer with a significant global presence (USA & Italy). With 18 MTPA installed capacity in India, it offers a wide range of products including Hot-Rolled Coils, Coated Products, and TMT Bars.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Capacity</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">18 <span className="text-sm font-sans font-normal text-gray-500">MTPA</span></div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Target 2025</div>
                                        <div className="font-heading text-xl text-base-300 font-bold">37.5 <span className="text-sm font-sans font-normal text-gray-500">MTPA</span></div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Key Specifications</h3>
                                <div className="grid grid-cols-1 gap-3 mb-8">
                                    <div className="flex items-start text-sm md:text-base text-gray-600 p-3 bg-gray-50 rounded-lg">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-base-300">Hot-Rolled Coil</strong>
                                            <span className="text-xs text-gray-500">Width up to 2050 mm, Wt up to 36 Tonnes</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-sm md:text-base text-gray-600 p-3 bg-gray-50 rounded-lg">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-base-300">Bar & Rod Mill</strong>
                                            <span className="text-xs text-gray-500">Capacity 0.4 MTPA (Expandable to 0.48)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-sm md:text-base text-gray-600 p-3 bg-gray-50 rounded-lg">
                                        <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-base-300">Kalinga Pipes</strong>
                                            <span className="text-xs text-gray-500">1/2" to 8" pipes, 0.60-8.00mm thickness</span>
                                        </div>
                                    </div>
                                </div>

                                <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                    <Link href="/contact">Request JSW Price</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Prime Gold Feature Section */}
                        <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                                <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                    <div className="relative w-full h-full min-h-[300px]">
                                        <Image
                                            src="/prime-gold-tmt-bar.jpg"
                                            alt="Prime Gold TMT"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="inline-block mb-4 px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-bold tracking-wide uppercase">
                                        Quality Choice
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                        Prime Gold <span className="text-accent-red">TMT</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Prime Gold TMT (Thermo-Mechanically Treated) steel bars are a popular choice for construction due to their high strength, durability, and resistance to corrosion. They offer a soft inner core with a hard outer layer, making them resistant to high temperatures.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Standard Length</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">12 <span className="text-sm font-sans font-normal text-gray-500">Meters</span></div>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Diameters</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">6-25 <span className="text-sm font-sans font-normal text-gray-500">mm</span></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Product Specifications</h3>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Grades:</strong> Fe 500, Fe 550, Fe 550D, and Fe 600</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Sizes:</strong> 6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Quality:</strong> High strength, durability, and corrosion resistance</span>
                                        </li>
                                    </ul>

                                    <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                        <Link href="/contact">Request Prime Gold Price</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* SAIL Feature Section */}
                        <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 items-center">
                                <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-blue-50 shadow-inner border border-gray-100 px-8 flex items-center justify-center">
                                    <div className="relative w-full h-full min-h-[300px]">
                                        <Image
                                            src="/sail.jpg"
                                            alt="SAIL TMT and Structural Steel"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase">
                                        Nation's Pride
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                        SAIL <span className="text-accent-red">Steel</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Steel Authority of India Limited (SAIL) produces high-quality TMT bars and structural steel sections. Used in major infrastructure like bridges and dams, SAIL products are known for their high yield strength, superior ductility, and earthquake resistance.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Standard</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">IS 1786 <span className="text-sm font-sans font-normal text-gray-500">:2008</span></div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Key Property</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">Seismic <span className="text-sm font-sans font-normal text-gray-500">Resistant</span></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Product Range</h3>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>TMT Grades:</strong> Fe500, Fe500D, Fe550, Fe550D</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>TMT Sizes:</strong> 8mm - 40mm</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Structural:</strong> I-beams, H-beams, Channels, Angles</span>
                                        </li>
                                    </ul>

                                    <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                        <Link href="/contact">Request SAIL Price</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Vizag Steel Feature Section */}
                        <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                                <div className="w-full lg:w-1/2 relative min-h-[400px] h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 px-8 flex items-center justify-center">
                                    <div className="relative w-full h-full min-h-[300px]">
                                        <Image
                                            src="/vizag-steel.jpg"
                                            alt="Vizag Steel (RINL)"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="inline-block mb-4 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-bold tracking-wide uppercase">
                                        Navratna PSU
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-heading font-normal uppercase tracking-wide text-base-300 mb-6">
                                        Vizag <span className="text-accent-red">Steel</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Visakhapatnam Steel Plant (RINL), known as Vizag Steel, is India's first coast-based integrated steel plant. As a Navratna company, it is a market leader in long products, delivering premium quality TMT bars and structural steel for diverse industrial needs.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Quality Policy</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">100% <span className="text-sm font-sans font-normal text-gray-500">Satisfaction</span></div>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Certification</div>
                                            <div className="font-heading text-xl text-base-300 font-bold">ISO <span className="text-sm font-sans font-normal text-gray-500">9001:2008</span></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-normal uppercase tracking-wide text-base-300 mb-4">Product Portfolio</h3>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>TMT Sizes:</strong> 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm, 36mm</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Wire Rods:</strong> 5.5mm - 14.0mm (Coils ~1.2mt)</span>
                                        </li>
                                        <li className="flex items-start text-sm md:text-base text-gray-600">
                                            <Check className="h-5 w-5 text-accent-red mr-3 mt-0.5 shrink-0" />
                                            <span><strong>Structural:</strong> Angles, Channels, Beams, Plain Rounds</span>
                                        </li>
                                    </ul>

                                    <Button asChild size="lg" className="bg-base-300 text-white hover:bg-accent-red rounded-full px-8 w-full md:w-auto transition-colors shadow-lg">
                                        <Link href="/contact">Request Vizag Steel Price</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

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
