import React from 'react';

export default function ColorsPage() {
    return (
        <div className="p-10 space-y-8 bg-background min-h-screen">
            <h1 className="text-3xl font-bold text-foreground">Color Palette Verification</h1>

            <section>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Base Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded border border-border bg-base-100 text-base-300">
                        <div className="font-bold">Base 100</div>
                        <div className="text-sm">#FFFFFF</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-base-200 text-base-300">
                        <div className="font-bold">Base 200</div>
                        <div className="text-sm">#f9f4eb</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-base-300 text-base-100">
                        <div className="font-bold">Base 300</div>
                        <div className="text-sm">#0F1115</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-base-secondary-dark text-white">
                        <div className="font-bold">Base Secondary Dark</div>
                        <div className="text-sm">#686560</div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Accents</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded border border-border bg-accent-1 text-white">
                        <div className="font-bold">Accent 1</div>
                        <div className="text-sm">#4B0082</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-accent-2 text-black">
                        <div className="font-bold">Accent 2</div>
                        <div className="text-sm">#F4C430</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-accent-3 text-black">
                        <div className="font-bold">Accent 3</div>
                        <div className="text-sm">#F4C430</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-accent-red text-white">
                        <div className="font-bold">Accent Red</div>
                        <div className="text-sm">#E63946</div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Semantic Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded border border-border bg-background text-foreground">
                        <div className="font-bold">Background</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-primary text-primary-foreground">
                        <div className="font-bold">Primary</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-secondary text-secondary-foreground">
                        <div className="font-bold">Secondary</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-muted text-muted-foreground">
                        <div className="font-bold">Muted</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-accent text-accent-foreground">
                        <div className="font-bold">Accent</div>
                    </div>
                    <div className="p-4 rounded border border-border bg-destructive text-destructive-foreground">
                        <div className="font-bold">Destructive</div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Glass Effects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-gray-800 rounded-lg">
                    <div className="p-4 rounded glass-white-5 text-white">
                        <div className="font-bold">White 5%</div>
                    </div>
                    <div className="p-4 rounded glass-white-20 text-white">
                        <div className="font-bold">White 20%</div>
                    </div>
                    <div className="p-4 rounded glass-white-50 text-black">
                        <div className="font-bold">White 50%</div>
                    </div>
                    <div className="p-4 rounded glass-white-80 text-black">
                        <div className="font-bold">White 80%</div>
                    </div>

                    <div className="p-4 rounded glass-black-10 text-white">
                        <div className="font-bold">Black 10%</div>
                    </div>
                    <div className="p-4 rounded glass-black-20 text-white">
                        <div className="font-bold">Black 20%</div>
                    </div>
                    <div className="p-4 rounded glass-black-30 text-white">
                        <div className="font-bold">Black 30%</div>
                    </div>
                    <div className="p-4 rounded glass-tint-red-25 text-white">
                        <div className="font-bold">Red Tint 25%</div>
                    </div>
                    <div className="p-4 rounded glass-tint-indigo-25 text-white">
                        <div className="font-bold">Indigo Tint 25%</div>
                    </div>
                    <div className="p-4 rounded glass-tint-yellow-25 text-black">
                        <div className="font-bold">Yellow Tint 25%</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
