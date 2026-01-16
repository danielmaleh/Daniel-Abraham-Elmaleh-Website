import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";

import Introduction from "./sections/introduction";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Project from "./sections/project";

export default function About() {
    usePageTitle("About Me");

    return (
        <div className="flex flex-1 flex-col items-center gap-12 py-4">
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
