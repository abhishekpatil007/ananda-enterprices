"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const TMT_WEIGHTS: Record<string, number> = {
    "8": 0.395,
    "10": 0.617,
    "12": 0.888,
    "16": 1.578,
    "20": 2.469,
    "25": 3.858,
    "32": 6.313, // Added standard 32mm weight as it was mentioned in supply list but not in calc table
}

export function TmtCalculator() {
    const [diameter, setDiameter] = useState<string>("10")
    const [length, setLength] = useState<string>("12")
    const [quantityType, setQuantityType] = useState<"kg" | "rods">("kg")
    const [quantity, setQuantity] = useState<string>("1000")
    const [result, setResult] = useState<any>(null)

    const calculate = () => {
        const d = parseFloat(diameter)
        const l = parseFloat(length)
        const q = parseFloat(quantity)
        const weightPerMeter = TMT_WEIGHTS[diameter] || 0
        const weightPerRod = weightPerMeter * l

        if (!d || !l || !q || weightPerRod === 0) {
            setResult(null)
            return
        }

        let totalRods = 0
        let totalWeight = 0

        if (quantityType === "kg") {
            totalWeight = q
            totalRods = Math.ceil(q / weightPerRod)
        } else {
            totalRods = Math.ceil(q)
            totalWeight = totalRods * weightPerRod
        }

        const rodsPerBundleMap: Record<string, number> = {
            "8": 10,
            "10": 7,
            "12": 5,
            "16": 3,
            "20": 2,
            "25": 1,
            "32": 1
        }

        const rodsPerBundle = rodsPerBundleMap[diameter] || 1
        const bundlesRequired = Math.ceil(totalRods / rodsPerBundle)

        setResult({
            weightPerRod: weightPerRod.toFixed(3),
            rodsPerBundle,
            bundlesRequired,
            totalRods,
            totalWeight: totalWeight.toFixed(2)
        })
    }

    useEffect(() => {
        calculate()
    }, [diameter, length, quantity, quantityType])

    return (
        <Card className="w-full max-w-md mx-auto bg-black/80 backdrop-blur-xl border-accent-red/30 shadow-[0_0_40px_rgba(220,38,38,0.15)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 to-transparent pointer-events-none" />

            <CardHeader className="relative border-b border-white/10 pb-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-50" />
                <CardTitle className="font-heading text-3xl tracking-wider uppercase text-white text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                    <span className="text-accent-red">TMT</span> Calculator
                </CardTitle>
                <CardDescription className="text-gray-400 font-mono text-xs text-center uppercase tracking-[0.2em]">
                    Precision Engineering Tool
                </CardDescription>
            </CardHeader>

            <CardContent className="pt-8 space-y-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 group/input">
                        <Label htmlFor="diameter" className="text-gray-400 text-xs uppercase tracking-wider font-bold group-hover/input:text-accent-red transition-colors">Rod Diameter</Label>
                        <Select value={diameter} onValueChange={setDiameter}>
                            <SelectTrigger id="diameter" className="bg-white/5 border-white/10 text-white h-12 focus:ring-1 focus:ring-accent-red/50 focus:border-accent-red/50 transition-all">
                                <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/95 border-white/10 text-white backdrop-blur-xl">
                                {Object.keys(TMT_WEIGHTS).map((d) => (
                                    <SelectItem key={d} value={d} className="focus:bg-accent-red focus:text-white cursor-pointer font-mono">
                                        {d} mm
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2 group/input">
                        <Label htmlFor="length" className="text-gray-400 text-xs uppercase tracking-wider font-bold group-hover/input:text-accent-red transition-colors">Length (m)</Label>
                        <Input
                            id="length"
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder="12"
                            className="bg-white/5 border-white/10 text-white h-12 font-mono focus:ring-1 focus:ring-accent-red/50 focus:border-accent-red/50 transition-all placeholder:text-gray-700"
                        />
                    </div>
                </div>

                <div className="space-y-2 group/input">
                    <Label className="text-gray-400 text-xs uppercase tracking-wider font-bold group-hover/input:text-accent-red transition-colors">Quantity Required</Label>
                    <div className="flex space-x-0">
                        <Input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="flex-1 bg-white/5 border-white/10 border-r-0 rounded-r-none text-white h-12 font-mono focus:ring-1 focus:ring-accent-red/50 focus:border-accent-red/50 transition-all placeholder:text-gray-700"
                        />
                        <Select value={quantityType} onValueChange={(v: any) => setQuantityType(v)}>
                            <SelectTrigger className="w-[100px] bg-white/5 border-white/10 rounded-l-none text-white h-12 focus:ring-1 focus:ring-accent-red/50 focus:border-accent-red/50 transition-all">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-black/95 border-white/10 text-white backdrop-blur-xl">
                                <SelectItem value="kg" className="focus:bg-accent-red focus:text-white cursor-pointer font-mono">Kg</SelectItem>
                                <SelectItem value="rods" className="focus:bg-accent-red focus:text-white cursor-pointer font-mono">Rods</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {result && (
                    <div className="mt-8 relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent-red" />
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                                <div>
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Weight / Rod</span>
                                    <span className="block text-white font-mono text-lg">{result.weightPerRod} <span className="text-xs text-gray-600">kg</span></span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Rods / Bundle</span>
                                    <span className="block text-white font-mono text-lg">{result.rodsPerBundle}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Total Rods</span>
                                    <span className="block text-accent-red font-mono text-2xl font-bold">{result.totalRods}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest mb-1">Bundles</span>
                                    <span className="block text-white font-mono text-2xl">{result.bundlesRequired}</span>
                                </div>
                            </div>

                            <div className="pt-4 mt-2 border-t border-white/5">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Total Weight</span>
                                    <span className="text-3xl font-black text-white font-heading tracking-tighter leading-none">
                                        {result.totalWeight} <span className="text-sm font-normal text-gray-500 align-top mt-1 inline-block">kg</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-accent-red to-red-800 hover:from-red-600 hover:to-red-900 text-white font-bold tracking-widest uppercase py-6 text-sm transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-white/10">
                        Request Quote
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
