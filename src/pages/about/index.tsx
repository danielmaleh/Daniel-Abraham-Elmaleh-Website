import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";

import Introduction from "./sections/introduction";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Project from "./sections/project";

const sampleText = "Daniel Abraham Elmaleh - Photonics & Robotics Engineer";

const fonts = [
    { name: "Inter", family: "'Inter', sans-serif" },
    { name: "Libre Baskerville", family: "'Libre Baskerville', serif" },
    { name: "Playfair Display", family: "'Playfair Display', serif" },
    { name: "Lora", family: "'Lora', serif" },
    { name: "Cormorant Garamond", family: "'Cormorant Garamond', serif" },
    { name: "DM Serif Display", family: "'DM Serif Display', serif" },
];

export default function About() {
    usePageTitle("About Me");

    return (
        <div className="flex flex-1 flex-col items-center gap-12 py-4">
            {/* Font Preview Section - Remove after choosing */}
            <div className="w-full max-w-4xl p-6 border-2 border-dashed border-red-400 rounded-lg bg-red-50 dark:bg-red-950">
                <h2 className="text-xl font-bold mb-4 text-red-600">🔤 Font Preview (temporary)</h2>
                <div className="space-y-4">
                    {fonts.map((font) => (
                        <div key={font.name} className="p-4 bg-white dark:bg-gray-800 rounded border">
                            <p className="text-sm text-gray-500 mb-1">{font.name}</p>
                            <p style={{ fontFamily: font.family }} className="text-2xl">
                                {sampleText}
                            </p>
                            <p style={{ fontFamily: font.family }} className="text-base mt-2">
                                The quick brown fox jumps over the lazy dog. 0123456789
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Introduction />
            <Experience />
            <Separator orientation="horizontal" className="max-w-7xl mt-8" />
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 min-w-0">
                    <Project />
                </div>
                <div className="flex-1 min-w-0">
                    <Skills />
                </div>
            </div>
        </div>
    );
}
