#!/usr/bin/env python3
"""
Extract cover images from PDFs and videos for portfolio projects.
Run this script from the project root directory.
"""

import os
import subprocess
from pathlib import Path

# Project root
PROJECT_ROOT = Path(__file__).parent
ASSETS_DIR = PROJECT_ROOT / "src" / "assets" / "projects"

# Daniel's projects that need covers
PROJECTS = [
    "neural-interfaces",
    "sers-creatinine-detection",
    "solar-panel-cleaner",
    "bio-nano-chip-aptasensor",
    "mobile-robot-slam",
    "mobile-robot-kalman",
    "anti-stokes-gold-flakes",
    "semiconductor-nanowires",
    "carbon-nanotubes-transistors",
    "controlling-behavior-robots",
    "planetary-system-opengl",
    "planet-donut-2d",
    "deep-learning-weather",
    "fpga-digital-clock",
    "microcontroller-room-monitor",
    "balanced-isospring-oscillator",
    "mechanical-orange-presser",
    "short-documentary",
    "safe-intelligent-systems",
    "public-action-entrepreneurs",
]

def extract_pdf_cover(pdf_path: Path, output_path: Path):
    """Extract first page of PDF as an image using sips (macOS) or ImageMagick."""
    try:
        # Try using pdftoppm (poppler) first
        result = subprocess.run(
            ["pdftoppm", "-png", "-f", "1", "-l", "1", "-scale-to", "800", str(pdf_path), str(output_path.with_suffix(""))],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            # pdftoppm adds -1 suffix
            generated = output_path.with_suffix("").with_name(output_path.stem + "-1.png")
            if generated.exists():
                generated.rename(output_path)
                print(f"  ✓ Extracted PDF cover: {output_path.name}")
                return True
    except FileNotFoundError:
        pass

    try:
        # Fallback: try ImageMagick convert
        result = subprocess.run(
            ["convert", "-density", "150", f"{pdf_path}[0]", "-resize", "800x", str(output_path)],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            print(f"  ✓ Extracted PDF cover (ImageMagick): {output_path.name}")
            return True
    except FileNotFoundError:
        pass

    print(f"  ✗ Could not extract PDF (install poppler or ImageMagick)")
    return False

def extract_video_frame(video_path: Path, output_path: Path, timestamp: str = "00:00:01"):
    """Extract a frame from video using ffmpeg."""
    try:
        result = subprocess.run(
            [
                "ffmpeg", "-y", "-ss", timestamp,
                "-i", str(video_path),
                "-vframes", "1",
                "-q:v", "2",
                str(output_path)
            ],
            capture_output=True,
            text=True
        )
        if result.returncode == 0 and output_path.exists():
            print(f"  ✓ Extracted video frame: {output_path.name}")
            return True
    except FileNotFoundError:
        print(f"  ✗ ffmpeg not found - please install it")
    return False

def create_video_clip(video_path: Path, output_path: Path, start: str = "00:00:00", duration: str = "00:00:05"):
    """Create a short video clip for cover/thumbnail."""
    try:
        result = subprocess.run(
            [
                "ffmpeg", "-y", "-ss", start,
                "-i", str(video_path),
                "-t", duration,
                "-c:v", "libx264",
                "-preset", "fast",
                "-crf", "23",
                "-an",  # No audio
                "-vf", "scale=800:-2",  # Scale to 800px width
                str(output_path)
            ],
            capture_output=True,
            text=True
        )
        if result.returncode == 0 and output_path.exists():
            print(f"  ✓ Created video clip: {output_path.name}")
            return True
    except FileNotFoundError:
        print(f"  ✗ ffmpeg not found - please install it")
    return False

def process_project(slug: str):
    """Process a single project to extract cover image."""
    project_dir = ASSETS_DIR / slug
    if not project_dir.exists():
        print(f"⚠ Project directory not found: {slug}")
        return

    cover_dir = project_dir / "cover"
    pdf_dir = project_dir / "pdf"
    video_dir = project_dir / "videos"

    # Check if cover already exists
    existing_covers = list(cover_dir.glob("*")) if cover_dir.exists() else []
    if existing_covers:
        print(f"✓ {slug}: Already has cover ({existing_covers[0].name})")
        return

    # Create cover directory if needed
    cover_dir.mkdir(exist_ok=True)

    print(f"Processing {slug}...")

    # Try video first (better for thumbnails that loop)
    if video_dir.exists():
        videos = list(video_dir.glob("*.mp4")) + list(video_dir.glob("*.mov")) + list(video_dir.glob("*.webm"))
        if videos:
            video = videos[0]
            # Create a short clip for looping cover
            clip_output = cover_dir / "cover.mp4"
            if create_video_clip(video, clip_output, "00:00:01", "00:00:05"):
                return
            # Fallback to static frame
            frame_output = cover_dir / "cover.jpg"
            if extract_video_frame(video, frame_output, "00:00:02"):
                return

    # Try PDF if no video
    if pdf_dir.exists():
        pdfs = list(pdf_dir.glob("*.pdf"))
        if pdfs:
            pdf = pdfs[0]
            output = cover_dir / "cover.png"
            if extract_pdf_cover(pdf, output):
                return

    print(f"  ⚠ No video or PDF found for {slug}")

def main():
    print("=" * 60)
    print("Extracting cover images for portfolio projects")
    print("=" * 60)
    print()

    for slug in PROJECTS:
        process_project(slug)
        print()

    print("=" * 60)
    print("Done! Check the cover/ folders in each project.")
    print()
    print("Tips for video covers:")
    print("- To change the loop segment, edit this script and adjust")
    print("  the 'start' and 'duration' parameters in create_video_clip()")
    print("- Or manually trim videos using QuickTime or ffmpeg")
    print("=" * 60)

if __name__ == "__main__":
    main()
