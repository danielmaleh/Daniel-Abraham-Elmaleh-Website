type AssetModule = { default: string };

const imageModules = import.meta.glob<AssetModule>("@/assets/projects/*/images/*", {
    eager: true,
});

const videoModules = import.meta.glob<AssetModule>("@/assets/projects/*/videos/*", {
    eager: true,
});

const pdfModules = import.meta.glob<AssetModule>("@/assets/projects/*/pdf/*", {
    eager: true,
});

const posterModules = import.meta.glob<AssetModule>("@/assets/projects/*/poster/*", {
    eager: true,
});

const coverModules = import.meta.glob<AssetModule>("@/assets/projects/*/cover/*", {
    eager: true,
});

const videoExtensions = ["mp4", "webm", "ogg", "mov", "m4v"];

const imagesBySlug: Record<string, string[]> = {};
const videosBySlug: Record<string, string[]> = {};
const pdfsBySlug: Record<string, { url: string; name: string }[]> = {};
const posterBySlug: Record<string, string> = {};
const pdfLookupBySlug: Record<string, Record<string, string>> = {};
const imageLookupBySlug: Record<string, Record<string, string>> = {};
const videoLookupBySlug: Record<string, Record<string, string>> = {};
const coverLookupBySlug: Record<string, Record<string, string>> = {};
const posterLookupBySlug: Record<string, Record<string, string>> = {};
const heroBySlug: Record<string, { url: string; type: "image" | "video" }> = {};
const thumbnailBySlug: Record<string, { url: string; type: "image" | "video" }> = {};

function inferAssetType(path: string): "image" | "video" {
    const ext = path.split(".").pop()?.toLowerCase() ?? "";
    return videoExtensions.includes(ext) ? "video" : "image";
}

for (const [path, module] of Object.entries(imageModules)) {
    const match = path.match(/projects\/([^/]+)\/images\//);
    if (!match) continue;
    const slug = match[1];
    const fileName = path.split("/").pop() ?? "";
    imagesBySlug[slug] ??= [];
    imageLookupBySlug[slug] ??= {};
    imagesBySlug[slug].push(module.default);
    if (fileName) {
        imageLookupBySlug[slug][fileName] = module.default;
    }
}

for (const [path, module] of Object.entries(videoModules)) {
    const match = path.match(/projects\/([^/]+)\/videos\//);
    if (!match) continue;
    const slug = match[1];
    const fileName = path.split("/").pop() ?? "";
    videosBySlug[slug] ??= [];
    videoLookupBySlug[slug] ??= {};
    videosBySlug[slug].push(module.default);
    if (fileName) {
        videoLookupBySlug[slug][fileName] = module.default;
    }
}

for (const [path, module] of Object.entries(pdfModules)) {
    const match = path.match(/projects\/([^/]+)\/pdf\//);
    if (!match) continue;
    const slug = match[1];
    const fileName = path.split("/").pop() ?? "";
    pdfLookupBySlug[slug] ??= {};
    pdfsBySlug[slug] ??= [];
    if (fileName) {
        pdfLookupBySlug[slug][fileName] = module.default;
        // Create a readable name from the filename
        const readableName = fileName
            .replace(/\.pdf$/i, "")
            .replace(/[_-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
        pdfsBySlug[slug].push({ url: module.default, name: readableName });
    }
}

// Sort PDFs alphabetically by name
Object.values(pdfsBySlug).forEach((pdfs) => pdfs.sort((a, b) => a.name.localeCompare(b.name)));

for (const [path, module] of Object.entries(posterModules)) {
    const match = path.match(/projects\/([^/]+)\/poster\//);
    if (!match) continue;
    const slug = match[1];
    const fileName = path.split("/").pop() ?? "";
    posterLookupBySlug[slug] ??= {};
    if (fileName) {
        posterLookupBySlug[slug][fileName] = module.default;
    }
    if (!posterBySlug[slug]) {
        posterBySlug[slug] = module.default;
    }
}

for (const [path, module] of Object.entries(coverModules)) {
    const match = path.match(/projects\/([^/]+)\/cover\//);
    if (!match) continue;
    const slug = match[1];
    coverLookupBySlug[slug] ??= {};
    const fileName = path.split("/").pop() ?? "";
    const fileNameLower = fileName.toLowerCase();

    if (fileName) {
        coverLookupBySlug[slug][fileName] = module.default;
    }

    // Check for specific thumbnail files (for project cards)
    if (fileNameLower.startsWith("thumbnail.") || fileNameLower.startsWith("thumb.")) {
        thumbnailBySlug[slug] = { url: module.default, type: inferAssetType(path) };
    }
    // Check for specific hero/cover files (for project page)
    else if (fileNameLower.startsWith("hero.") || fileNameLower.startsWith("cover.")) {
        heroBySlug[slug] = { url: module.default, type: inferAssetType(path) };
    }
}

// Second pass: set defaults for projects without specific thumbnail/hero
for (const [path, module] of Object.entries(coverModules)) {
    const match = path.match(/projects\/([^/]+)\/cover\//);
    if (!match) continue;
    const slug = match[1];
    const fileName = path.split("/").pop() ?? "";
    const fileNameLower = fileName.toLowerCase();

    // Skip if it's a specific thumbnail/hero file (already processed)
    if (fileNameLower.startsWith("thumbnail.") || fileNameLower.startsWith("thumb.") ||
        fileNameLower.startsWith("hero.") || fileNameLower.startsWith("cover.")) {
        continue;
    }

    // Use as fallback for both if not set
    if (!heroBySlug[slug]) {
        heroBySlug[slug] = { url: module.default, type: inferAssetType(path) };
    }
    if (!thumbnailBySlug[slug]) {
        thumbnailBySlug[slug] = { url: module.default, type: inferAssetType(path) };
    }
}

// Final fallback: if hero is set but thumbnail isn't (or vice versa), copy from the other
for (const slug of Object.keys(coverLookupBySlug)) {
    if (heroBySlug[slug] && !thumbnailBySlug[slug]) {
        thumbnailBySlug[slug] = heroBySlug[slug];
    }
    if (thumbnailBySlug[slug] && !heroBySlug[slug]) {
        heroBySlug[slug] = thumbnailBySlug[slug];
    }
}

Object.values(imagesBySlug).forEach((images) => images.sort());
Object.values(videosBySlug).forEach((videos) => videos.sort());

export function getProjectAssets(slug: string) {
    return {
        images: imagesBySlug[slug] ?? [],
        videos: videosBySlug[slug] ?? [],
        pdfs: pdfsBySlug[slug] ?? [],
        poster: posterBySlug[slug],
    };
}

// Get thumbnail for project cards (gallery view)
export function getProjectThumbnail(slug: string) {
    if (thumbnailBySlug[slug]) {
        return thumbnailBySlug[slug];
    }
    // Fallback to hero if no specific thumbnail
    if (heroBySlug[slug]) {
        return heroBySlug[slug];
    }
    if ((videosBySlug[slug] ?? []).length > 0) {
        return { url: videosBySlug[slug][0], type: "video" as const };
    }
    if ((imagesBySlug[slug] ?? []).length > 0) {
        return { url: imagesBySlug[slug][0], type: "image" as const };
    }
    return undefined;
}

// Get hero for project detail page
export function getProjectHero(slug: string) {
    if (heroBySlug[slug]) {
        return heroBySlug[slug];
    }
    // Fallback to thumbnail if no specific hero
    if (thumbnailBySlug[slug]) {
        return thumbnailBySlug[slug];
    }
    if ((videosBySlug[slug] ?? []).length > 0) {
        return { url: videosBySlug[slug][0], type: "video" as const };
    }
    if ((imagesBySlug[slug] ?? []).length > 0) {
        return { url: imagesBySlug[slug][0], type: "image" as const };
    }
    return undefined;
}

export function resolveProjectMedia(slug: string, relativePath?: string) {
    if (!relativePath) return undefined;
    const normalized = relativePath.replace(/^\.?\//, "");

    if (normalized.startsWith("images/")) {
        const key = normalized.slice("images/".length);
        return imageLookupBySlug[slug]?.[key];
    }

    if (normalized.startsWith("videos/")) {
        const key = normalized.slice("videos/".length);
        return videoLookupBySlug[slug]?.[key];
    }

    if (normalized.startsWith("cover/")) {
        const key = normalized.slice("cover/".length);
        return coverLookupBySlug[slug]?.[key];
    }

    if (normalized.startsWith("pdf/")) {
        const key = normalized.slice("pdf/".length);
        return pdfLookupBySlug[slug]?.[key];
    }

    if (normalized.startsWith("poster/")) {
        const key = normalized.slice("poster/".length);
        return posterLookupBySlug[slug]?.[key];
    }

    return undefined;
}
