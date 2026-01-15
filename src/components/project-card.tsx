import { Link } from "react-router";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project, ProjectTag } from "@/data/projects";
import { getProjectThumbnail } from "@/lib/project-assets";

type ProjectPreviewCardProps = {
    project: Project;
    className?: string;
};

const TAG_COLORS: Record<ProjectTag, string> = {
    Photonics: "bg-slate-50 dark:bg-slate-900 text-cyan-800 dark:text-cyan-200 border-cyan-400 dark:border-cyan-500",
    Robotics: "bg-slate-50 dark:bg-slate-900 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-500",
    Nanotechnology: "bg-slate-50 dark:bg-slate-900 text-violet-800 dark:text-violet-200 border-violet-400 dark:border-violet-500",
    "Bio-MedTech": "bg-slate-50 dark:bg-slate-900 text-emerald-800 dark:text-emerald-200 border-emerald-400 dark:border-emerald-500",
    "Computer Vision": "bg-slate-50 dark:bg-slate-900 text-sky-800 dark:text-sky-200 border-sky-400 dark:border-sky-500",
    "Deep Learning": "bg-slate-50 dark:bg-slate-900 text-pink-800 dark:text-pink-200 border-pink-400 dark:border-pink-500",
    Control: "bg-slate-50 dark:bg-slate-900 text-green-800 dark:text-green-200 border-green-400 dark:border-green-500",
    "Mechanical Design": "bg-slate-50 dark:bg-slate-900 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-500",
    Simulation: "bg-slate-50 dark:bg-slate-900 text-purple-800 dark:text-purple-200 border-purple-400 dark:border-purple-500",
    Electronics: "bg-slate-50 dark:bg-slate-900 text-yellow-800 dark:text-yellow-200 border-yellow-400 dark:border-yellow-500",
    "Computer Graphics": "bg-slate-50 dark:bg-slate-900 text-indigo-800 dark:text-indigo-200 border-indigo-400 dark:border-indigo-500",
    "Signal Processing": "bg-slate-50 dark:bg-slate-900 text-rose-800 dark:text-rose-200 border-rose-400 dark:border-rose-500",
};

function formatTimelineLabel(timeline?: string | null): string | null {
    if (!timeline) return null;
    const match = timeline.match(/\b(\d{4})\b/);
    return match ? match[1] : timeline;
}

export function ProjectPreviewCard({ project, className }: ProjectPreviewCardProps) {
    const thumbnail = getProjectThumbnail(project.slug);
    const timelineLabel = formatTimelineLabel(project.timeline ?? null);

    return (
        <Card className={cn("rounded-lg overflow-hidden gap-0 py-0 w-full flex flex-col h-full", className)}>
            <Link to={`/projects/${project.slug}`} className="flex flex-col flex-grow group text-left">
                <div className="aspect-video w-full overflow-hidden bg-black">
                    {thumbnail ? (
                        thumbnail.type === "video" ? (
                            <video
                                src={thumbnail.url}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img
                                src={thumbnail.url}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center p-4 w-full h-full bg-muted text-center">
                            <span className="text-lg font-semibold opacity-80">{project.title}</span>
                            <span className="text-sm text-muted-foreground">Media coming soon</span>
                        </div>
                    )}
                </div>

                <div className="w-full border-t" />

                <div className="flex flex-col flex-grow py-3 px-4 gap-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <div className="text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </div>
                        {timelineLabel && (
                            <span
                                className="text-xs font-semibold text-muted-foreground whitespace-nowrap"
                                title={project.timeline ?? undefined}
                            >
                                {timelineLabel}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3">{project.summary}</p>

                    {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={cn(
                                        "rounded-md border px-2.5 py-1 text-sm font-semibold shadow-sm",
                                        TAG_COLORS[tag]
                                    )}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </Card>
    );
}
