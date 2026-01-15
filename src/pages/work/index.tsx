import { FaBriefcase } from "react-icons/fa6";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkData } from "@/data/work";

export default function Work() {
    usePageTitle("Work Experience");

    return (
        <div className="flex flex-1 flex-col items-center gap-8 py-4">
            <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
            <div className="w-full max-w-3xl">
                <Card className="rounded-lg px-2">
                    <CardHeader>
                        <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus">
                            <FaBriefcase />
                            Career History
                        </CardTitle>
                    </CardHeader>
                    <ScrollArea className="h-[600px] pr-4">
                        <CardContent className="space-y-6">
                            {WorkData.map((job, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-card/50">
                                    <img
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        className="w-16 h-16 object-contain rounded bg-white p-1"
                                    />
                                    <div className="space-y-1">
                                        <div className="font-semibold text-lg">{job.company}</div>
                                        <div className="text-primary font-medium">{job.title}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {job.years}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </ScrollArea>
                </Card>
            </div>
        </div>
    );
}
