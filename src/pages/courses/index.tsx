import { useState, useMemo } from "react";
import { FaBookOpen, FaSearch, FaFilter, FaGraduationCap } from "react-icons/fa";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    CoursesData,
    courseCategories,
    institutions,
    levels,
    type Course,
    type CourseCategory,
} from "@/data/courses";

type FilterState = {
    search: string;
    categories: CourseCategory[];
    institutions: string[];
    levels: string[];
};

export default function Courses() {
    usePageTitle("Courses");

    const [filters, setFilters] = useState<FilterState>({
        search: "",
        categories: [],
        institutions: [],
        levels: [],
    });

    const [showFilters, setShowFilters] = useState(false);

    const filteredCourses = useMemo(() => {
        return CoursesData.filter((course) => {
            // Search filter
            const searchLower = filters.search.toLowerCase();
            const matchesSearch =
                !filters.search ||
                course.name.toLowerCase().includes(searchLower) ||
                course.code.toLowerCase().includes(searchLower) ||
                course.institution.toLowerCase().includes(searchLower) ||
                course.category.toLowerCase().includes(searchLower) ||
                (course.professor && course.professor.toLowerCase().includes(searchLower)) ||
                (course.project && course.project.toLowerCase().includes(searchLower)) ||
                (course.description && course.description.toLowerCase().includes(searchLower));

            // Category filter
            const matchesCategory =
                filters.categories.length === 0 ||
                filters.categories.includes(course.category);

            // Institution filter
            const matchesInstitution =
                filters.institutions.length === 0 ||
                filters.institutions.includes(course.institution);

            // Level filter
            const matchesLevel =
                filters.levels.length === 0 || filters.levels.includes(course.level);

            return matchesSearch && matchesCategory && matchesInstitution && matchesLevel;
        });
    }, [filters]);

    const groupedCourses = useMemo(() => {
        const groups: Record<string, Course[]> = {};
        filteredCourses.forEach((course) => {
            if (!groups[course.level]) {
                groups[course.level] = [];
            }
            groups[course.level].push(course);
        });
        return groups;
    }, [filteredCourses]);

    const toggleFilter = <K extends keyof FilterState>(
        key: K,
        value: FilterState[K] extends (infer T)[] ? T : never
    ) => {
        setFilters((prev) => {
            const current = prev[key] as unknown[];
            const newValue = current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value];
            return { ...prev, [key]: newValue };
        });
    };

    const clearFilters = () => {
        setFilters({
            search: "",
            categories: [],
            institutions: [],
            levels: [],
        });
    };

    const totalCredits = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
    const averageGrade =
        filteredCourses.filter((c) => c.grade).length > 0
            ? (
                  filteredCourses
                      .filter((c) => c.grade)
                      .reduce((sum, c) => sum + (c.grade || 0), 0) /
                  filteredCourses.filter((c) => c.grade).length
              ).toFixed(2)
            : "N/A";

    const levelOrder = ["Master", "Exchange", "Bachelor", "Prep"];

    const getCategoryColor = (category: CourseCategory): string => {
        const colors: Record<CourseCategory, string> = {
            Mathematics: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
            Physics: "bg-purple-500/20 text-purple-700 dark:text-purple-300",
            "Computer Science": "bg-green-500/20 text-green-700 dark:text-green-300",
            Electronics: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
            "Mechanical Engineering": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
            "Materials Science": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
            "Photonics & Optics": "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
            Robotics: "bg-red-500/20 text-red-700 dark:text-red-300",
            "AI & Machine Learning": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
            "Bio & MedTech": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
            Nanotechnology: "bg-violet-500/20 text-violet-700 dark:text-violet-300",
            Humanities: "bg-rose-500/20 text-rose-700 dark:text-rose-300",
            Management: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
            Exchange: "bg-gray-500/20 text-gray-700 dark:text-gray-300",
        };
        return colors[category] || "bg-gray-500/20 text-gray-700";
    };

    const getLevelColor = (level: string): string => {
        const colors: Record<string, string> = {
            Master: "bg-purple-600 text-white",
            Bachelor: "bg-blue-600 text-white",
            Exchange: "bg-green-600 text-white",
            Prep: "bg-gray-600 text-white",
        };
        return colors[level] || "bg-gray-600 text-white";
    };

    return (
        <div className="flex flex-1 flex-col items-center gap-6 py-4 px-4">
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <FaGraduationCap className="text-primary" />
                Academic Courses
            </h1>

            {/* Search and Filter Bar */}
            <div className="w-full max-w-5xl space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search courses, codes, projects, professors..."
                            value={filters.search}
                            onChange={(e) =>
                                setFilters((prev) => ({ ...prev, search: e.target.value }))
                            }
                            className="pl-10"
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
                            showFilters
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                        }`}
                    >
                        <FaFilter />
                        Filters
                        {(filters.categories.length > 0 ||
                            filters.institutions.length > 0 ||
                            filters.levels.length > 0) && (
                            <Badge variant="secondary" className="ml-1">
                                {filters.categories.length +
                                    filters.institutions.length +
                                    filters.levels.length}
                            </Badge>
                        )}
                    </button>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <Card className="animate-in fade-in slide-in-from-top-2 duration-200">
                        <CardContent className="pt-4 space-y-4">
                            {/* Level Filter */}
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Level</h4>
                                <div className="flex flex-wrap gap-2">
                                    {levels.map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => toggleFilter("levels", level)}
                                            className={`px-3 py-1 rounded-full text-sm transition-all ${
                                                filters.levels.includes(level)
                                                    ? getLevelColor(level)
                                                    : "bg-muted hover:bg-muted/80"
                                            }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Institution Filter */}
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Institution</h4>
                                <div className="flex flex-wrap gap-2">
                                    {institutions.map((inst) => (
                                        <button
                                            key={inst}
                                            onClick={() => toggleFilter("institutions", inst)}
                                            className={`px-3 py-1 rounded-full text-sm transition-all ${
                                                filters.institutions.includes(inst)
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted hover:bg-muted/80"
                                            }`}
                                        >
                                            {inst}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Category</h4>
                                <div className="flex flex-wrap gap-2">
                                    {courseCategories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => toggleFilter("categories", cat)}
                                            className={`px-3 py-1 rounded-full text-sm transition-all ${
                                                filters.categories.includes(cat)
                                                    ? getCategoryColor(cat)
                                                    : "bg-muted hover:bg-muted/80"
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {(filters.categories.length > 0 ||
                                filters.institutions.length > 0 ||
                                filters.levels.length > 0) && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-muted-foreground hover:text-foreground underline"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </CardContent>
                    </Card>
                )}

                {/* Stats */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="text-center px-4 py-2 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">{filteredCourses.length}</div>
                        <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div className="text-center px-4 py-2 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">{totalCredits}</div>
                        <div className="text-xs text-muted-foreground">Credits</div>
                    </div>
                    <div className="text-center px-4 py-2 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">{averageGrade}</div>
                        <div className="text-xs text-muted-foreground">Avg Grade</div>
                    </div>
                </div>
            </div>

            {/* Courses List */}
            <div className="w-full max-w-5xl space-y-6">
                {levelOrder.map((level) => {
                    const courses = groupedCourses[level];
                    if (!courses || courses.length === 0) return null;

                    return (
                        <Card key={level}>
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-3">
                                    <Badge className={getLevelColor(level)}>{level}</Badge>
                                    <span className="text-lg">
                                        {level === "Exchange"
                                            ? "Exchange Year (École Polytechnique de Paris)"
                                            : level === "Prep"
                                            ? "Preparatory Year (CMS)"
                                            : `${level}'s Degree`}
                                    </span>
                                    <span className="text-sm text-muted-foreground ml-auto">
                                        {courses.length} courses
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    {courses.map((course, index) => (
                                        <div
                                            key={`${course.code}-${index}`}
                                            className="flex flex-col gap-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <span className="font-mono text-sm text-muted-foreground">
                                                            {course.code}
                                                        </span>
                                                        <span className="font-semibold">
                                                            {course.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                                        <span>{course.institution}</span>
                                                        <span>•</span>
                                                        <span>{course.year}</span>
                                                        <span>•</span>
                                                        <span>{course.credits} ECTS</span>
                                                        {course.grade && (
                                                            <>
                                                                <span>•</span>
                                                                <span className="font-medium text-foreground">
                                                                    Grade: {course.grade}/6
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge
                                                        variant="outline"
                                                        className={getCategoryColor(course.category)}
                                                    >
                                                        {course.category}
                                                    </Badge>
                                                    <Badge variant="outline">
                                                        {course.language === "FR_EN"
                                                            ? "FR/EN"
                                                            : course.language}
                                                    </Badge>
                                                </div>
                                            </div>
                                            {course.professor && (
                                                <div className="text-sm text-muted-foreground mt-1">
                                                    <span className="font-medium text-foreground">Professor:</span>{" "}
                                                    {course.professor}
                                                </div>
                                            )}
                                            {(course.description || course.project) && (
                                                <div className="text-sm text-muted-foreground mt-1">
                                                    {course.description && <p>{course.description}</p>}
                                                    {course.project && (
                                                        <p className="mt-1">
                                                            <span className="font-medium text-foreground">
                                                                Project:
                                                            </span>{" "}
                                                            {course.project}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}

                {filteredCourses.length === 0 && (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <FaBookOpen className="mx-auto text-4xl text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">
                                No courses match your filters.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="mt-2 text-primary hover:underline"
                            >
                                Clear filters
                            </button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
