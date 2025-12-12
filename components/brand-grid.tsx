"use client"

import Image from "next/image"
import { Check } from "lucide-react"

interface Brand {
    name: string;
    logo?: string;
}

interface BrandGridProps {
    brands: Brand[];
    title?: string;
}

export function BrandGrid({ brands, title }: BrandGridProps) {
    return (
        <div className="mb-16">
            {title && (
                <div className="flex items-center mb-8">
                    <div className="w-2 h-10 bg-accent-red mr-4"></div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-base-300">{title}</h2>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="group relative bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center h-32 hover:shadow-lg hover:border-accent-red/30 transition-all duration-300"
                    >
                        {brand.logo ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ) : (
                            <div className="text-center">
                                <span className="block text-lg font-black uppercase tracking-tight text-gray-400 group-hover:text-accent-red transition-colors duration-300">
                                    {brand.name}
                                </span>
                            </div>
                        )}

                        {/* Hover Indicator */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Check className="h-4 w-4 text-accent-red" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
