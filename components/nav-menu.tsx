"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu as IconMenu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState<string | null>(null)
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <>
            <motion.div
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none"
            >
                {/* Desktop Menu */}
                <div className="hidden md:block pointer-events-auto">
                    <Menu setActive={setActive}>
                        <Link href="/" className="flex items-center mr-8 group">
                            <img
                                src="/logo.png"
                                alt="Ananda Enterprises"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <MenuItem setActive={setActive} active={active} item="Home" href="/" />
                        <MenuItem setActive={setActive} active={active} item="Products" href="/products">
                            <div className="text-sm grid grid-cols-2 gap-8 p-4 w-[600px]">
                                <ProductItem
                                    title="TMT Steel"
                                    href="/products/tmt"
                                    src="/tmt.jpg"
                                    description="Premium TMT bars from Tata, JSW, Indus & more."
                                />
                                <ProductItem
                                    title="Cement"
                                    href="/products/cement"
                                    src="/cement.jpg"
                                    description="Ultratech, ACC, Birla & other top cement brands."
                                />
                                <ProductItem
                                    title="Bulk Supply"
                                    href="/services"
                                    src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=2076&auto=format&fit=crop"
                                    description="Project-based bulk supply with logistics support."
                                />
                                <ProductItem
                                    title="All Products"
                                    href="/products"
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                                    description="View our complete catalog of construction materials."
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Services" href="/services">
                            <div className="flex flex-col space-y-4 text-sm p-4 w-64">
                                <HoveredLink href="/services">Bulk Supply</HoveredLink>
                                <HoveredLink href="/services">Project Management</HoveredLink>
                                <HoveredLink href="/#calculator">TMT Calculator</HoveredLink>
                                <HoveredLink href="/contact">Get a Quote</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />

                        <div className="pl-4 border-l border-gray-200 ml-4">
                            <Button asChild className="bg-accent-red hover:bg-accent-red/90 text-white rounded-full px-6 font-bold tracking-wide shadow-lg shadow-accent-red/20 transition-all hover:scale-105">
                                <Link href="/contact">Get Quote</Link>
                            </Button>
                        </div>
                    </Menu>
                </div>
            </motion.div>

            {/* Mobile Menu Button (Fixed to top right) */}
            <motion.div
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="md:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex justify-between items-center z-50 shadow-sm"
            >
                <Link href="/" className="text-xl font-black tracking-tighter text-base-300">
                    ANANDA
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-base-300 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    {isOpen ? <X size={24} /> : <IconMenu size={24} />}
                </button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto animate-in slide-in-from-top-10 duration-300">
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="text-2xl font-bold text-base-300 hover:text-accent-red border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/products" className="text-2xl font-bold text-base-300 hover:text-accent-red border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>
                            Products
                        </Link>
                        <div className="pl-4 flex flex-col space-y-3">
                            <Link href="/products/tmt" className="text-lg text-gray-500 hover:text-accent-red" onClick={() => setIsOpen(false)}>• TMT Steel</Link>
                            <Link href="/products/cement" className="text-lg text-gray-500 hover:text-accent-red" onClick={() => setIsOpen(false)}>• Cement</Link>
                        </div>
                        <Link href="/services" className="text-2xl font-bold text-base-300 hover:text-accent-red border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>
                            Services
                        </Link>
                        <Link href="/about" className="text-2xl font-bold text-base-300 hover:text-accent-red border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/contact" className="text-2xl font-bold text-base-300 hover:text-accent-red border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                        <Button asChild className="w-full bg-accent-red hover:bg-accent-red/90 text-white h-14 text-lg font-bold rounded-xl mt-4 shadow-xl shadow-accent-red/20" onClick={() => setIsOpen(false)}>
                            <Link href="/contact">Get Free Quote</Link>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
