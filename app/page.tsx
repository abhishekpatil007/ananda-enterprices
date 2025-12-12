"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, Calculator, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { TmtCalculator } from "@/components/tmt-calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NavMenu />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-32 px-4 md:px-8 bg-base-300 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase text-white leading-tight">
            Building the Future
            <br />
            With Strength
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium drop-shadow-md px-2">
            Your trusted B2B partner for premium TMT Steel, Cement, and Construction Materials. Delivering reliability across South India since 2008.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-5xl mx-auto px-4">
            <Button asChild size="lg" className="w-full md:w-auto min-w-[260px] bg-accent-red hover:bg-red-700 text-white text-lg py-7 rounded-full transition-colors duration-300 group border-0 shadow-lg">
              <Link href="/products" className="flex items-center justify-center font-bold tracking-widest uppercase">
                Explore Products <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full md:w-auto min-w-[260px] bg-white text-black hover:bg-gray-100 text-lg py-7 rounded-full shadow-lg">
              <Link href="#calculator" className="flex items-center justify-center font-bold tracking-widest uppercase">
                <Calculator className="mr-2 h-5 w-5" />
                TMT Calculator
              </Link>
            </Button>
          </div>
          <div className="mt-12 text-xs md:text-base text-gray-300 px-4">
            Delivered On-Time Across Bangalore and South India — Since 2008
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-base-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent-red/10 text-accent-red rounded-full border border-accent-red/20">Since 2008</h2>
            <h3 className="text-3xl md:text-6xl font-black mb-6 text-base-300 uppercase tracking-tighter leading-none">Welcome to <br /> ANANDA ENTERPRISES</h3>
            <p className="text-base md:text-lg text-base-secondary-dark mb-6 leading-relaxed">
              With over 16+ years of construction expertise, ANANDA ENTERPRISES has grown into one of Bangalore’s most trusted B2B and Bulk suppliers of branded TMT steel rods, cement and bulk construction materials for Residential, Commercial & Infrastructure projects.
            </p>
            <p className="text-base md:text-lg text-base-secondary-dark mb-8 leading-relaxed">
              Located at HSR Layout, we ensure fast delivery, genuine materials, transparent pricing and a hassle-free ordering experience.
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent-red">16+</span>
                <span className="text-xs md:text-sm text-gray-500">Years Exp.</span>
              </div>
              <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent-red">100%</span>
                <span className="text-xs md:text-sm text-gray-500">Genuine</span>
              </div>
              <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent-red">Bulk</span>
                <span className="text-xs md:text-sm text-gray-500">Supply</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1964&auto=format&fit=crop"
              alt="Construction Materials"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-accent-red/30 rounded-full bg-accent-red/10 text-accent-red text-sm font-bold tracking-wider uppercase">
              Our Core Offerings
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-base-300">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-1">Supply</span>
            </h2>
            <p className="text-lg md:text-xl text-base-secondary-dark max-w-2xl mx-auto font-medium px-4">
              Comprehensive range of high-quality construction materials for projects of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-base-300/10 hover:border-accent-red/50 transition-all duration-300 hover:shadow-2xl">
              <div className="h-56 md:h-64 relative bg-base-300 overflow-hidden">
                <Image
                  src="/tmt.jpg"
                  alt="TMT Steel"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-base-300 text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                    Steel
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-base-200 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-base-300 leading-none">
                    TMT Steel Rods
                  </h3>
                  <p className="text-base-secondary-dark mb-8 font-medium leading-relaxed text-sm md:text-base">
                    All branded TMT Steel Rods (Tata, JSW, Indus, etc.) for superior structural integrity.
                  </p>
                </div>
                <Link href="/products" className="inline-flex items-center text-accent-red hover:text-accent-1 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform">
                  View Brands <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-base-300/10 hover:border-accent-red/50 transition-all duration-300 hover:shadow-2xl">
              <div className="h-56 md:h-64 relative bg-base-300 overflow-hidden">
                <Image
                  src="/cement.jpg"
                  alt="Cement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-base-300 text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                    Cement
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-base-200 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-base-300 leading-none">
                    Cement
                  </h3>
                  <p className="text-base-secondary-dark mb-8 font-medium leading-relaxed text-sm md:text-base">
                    All leading Cement brands (Ultratech, ACC, Birla, etc.) for every construction need.
                  </p>
                </div>
                <Link href="/products" className="inline-flex items-center text-accent-red hover:text-accent-1 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform">
                  View Brands <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-base-300/10 hover:border-accent-red/50 transition-all duration-300 hover:shadow-2xl">
              <div className="h-56 md:h-64 relative bg-base-300 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=2076&auto=format&fit=crop"
                  alt="Bulk Supply"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-base-300 text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                    B2B
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-base-200 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-base-300 leading-none">
                    Bulk & Project Supply
                  </h3>
                  <p className="text-base-secondary-dark mb-8 font-medium leading-relaxed text-sm md:text-base">
                    B2B Project & Corporate supply with turnkey solutions and logistics.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-accent-red hover:text-accent-1 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-base-300 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8">Why Clients Choose ANANDA</h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Choose Ananda Enterprises for Reliability, Quality and Seamless service at every step of your construction journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">Expertise</h3>
                    <p className="text-sm md:text-base text-gray-400">16+ years of Industry Experience in construction supply.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">Premium Quality</h3>
                    <p className="text-sm md:text-base text-gray-400">100% genuine branded materials sourced directly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">Competitive Pricing</h3>
                    <p className="text-sm md:text-base text-gray-400">Bulk and Project supply wholesale pricing with transparency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">On-Time Delivery</h3>
                    <p className="text-sm md:text-base text-gray-400">Efficient logistic network ensures timely delivery across South India.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-base-300 p-6 md:p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Our Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-3 md:p-4 bg-black/50 rounded-lg">
                  <div className="h-2 w-2 bg-accent-red rounded-full mr-4 shrink-0"></div>
                  <span className="text-sm md:text-base">Strong vendor and manufacturer partnerships</span>
                </li>
                <li className="flex items-center p-3 md:p-4 bg-black rounded-lg">
                  <div className="h-2 w-2 bg-red-600 rounded-full mr-4 shrink-0"></div>
                  <span className="text-sm md:text-base">Direct-from-plant supply options</span>
                </li>
                <li className="flex items-center p-3 md:p-4 bg-black rounded-lg">
                  <div className="h-2 w-2 bg-red-600 rounded-full mr-4 shrink-0"></div>
                  <span className="text-sm md:text-base">Complete transparency in pricing & weights</span>
                </li>
                <li className="flex items-center p-3 md:p-4 bg-black rounded-lg">
                  <div className="h-2 w-2 bg-red-600 rounded-full mr-4 shrink-0"></div>
                  <span className="text-sm md:text-base">Expert guidance for builders & contractors</span>
                </li>
                <li className="flex items-center p-3 md:p-4 bg-black rounded-lg">
                  <div className="h-2 w-2 bg-red-600 rounded-full mr-4 shrink-0"></div>
                  <span className="text-sm md:text-base">Formal order confirmation agreements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TMT Calculator Section */}
      <section id="calculator" className="relative py-12 md:py-24 px-4 md:px-8 bg-base-300 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"
            alt="Steel Background"
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base-300 via-base-300/80 to-base-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Precision</span> Steel Calculator
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Calculate exact weight and quantity requirements for your construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <TmtCalculator />
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-red/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-accent-red/20" />

              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading uppercase tracking-widest">
                  Technical <span className="text-accent-red">Specs</span>
                </h3>
                <span className="text-[10px] md:text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">REF: IS 1786</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-4 font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">Diameter</th>
                      <th className="py-4 font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">Weight / Meter</th>
                      <th className="py-4 font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">Weight / 12m Rod</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { d: "8mm", wm: "0.395", wr: "4.740" },
                      { d: "10mm", wm: "0.617", wr: "7.404" },
                      { d: "12mm", wm: "0.888", wr: "10.656" },
                      { d: "16mm", wm: "1.578", wr: "18.936" },
                      { d: "20mm", wm: "2.469", wr: "29.628" },
                      { d: "25mm", wm: "3.858", wr: "46.296" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group/row">
                        <td className="py-4 text-white font-mono text-sm group-hover/row:text-accent-red transition-colors">{row.d}</td>
                        <td className="py-4 text-gray-300 font-mono text-sm">{row.wm} <span className="text-gray-600 text-xs">kg</span></td>
                        <td className="py-4 text-white font-mono font-bold text-sm">{row.wr} <span className="text-gray-600 text-xs font-normal">kg</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                <div className="p-2 bg-accent-red/10 rounded border border-accent-red/20 text-accent-red shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Engineering Note</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Weights indicated are theoretical values based on standard density of steel (7850 kg/m³). Actual weights may vary within IS 1786 tolerances depending on the manufacturer rolling process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / CTA */}
      <section className="py-12 md:py-24 px-4 md:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
              Quick <span className="text-accent-red">Actions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Fast-track your construction needs with our most popular services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link href="/products" className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-red/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(220,38,38,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-red/20 transition-colors duration-500">
                  <FileText className="h-8 w-8 text-gray-300 group-hover:text-accent-red transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-heading uppercase tracking-wide">Product Brochure</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">Download our complete catalog with detailed specifications and pricing.</p>
                <span className="mt-auto inline-flex items-center text-accent-red font-bold uppercase tracking-widest text-sm group-hover:gap-2 transition-all duration-300">
                  Download Now <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="#calculator" className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-red/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(220,38,38,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-red/20 transition-colors duration-500">
                  <Calculator className="h-8 w-8 text-gray-300 group-hover:text-accent-red transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-heading uppercase tracking-wide">TMT Calculator</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">Estimate steel requirements accurately for your specific project needs.</p>
                <span className="mt-auto inline-flex items-center text-accent-red font-bold uppercase tracking-widest text-sm group-hover:gap-2 transition-all duration-300">
                  Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/contact" className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-red/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(220,38,38,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-red/20 transition-colors duration-500">
                  <Phone className="h-8 w-8 text-gray-300 group-hover:text-accent-red transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-heading uppercase tracking-wide">Get a Quote</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">Speak directly with our sales team for the best bulk pricing today.</p>
                <span className="mt-auto inline-flex items-center text-accent-red font-bold uppercase tracking-widest text-sm group-hover:gap-2 transition-all duration-300">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
}
