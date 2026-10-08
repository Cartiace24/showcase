import argparse
from pathlib import Path

from PIL import Image, features


def optimize(directory: Path, quality: int) -> None:
    if not features.check("webp"):
        raise RuntimeError("This Pillow installation does not include WebP support.")

    for name in ("desktop", "mobile"):
        source = directory / f"{name}.png"
        destination = directory / f"{name}.webp"
        with Image.open(source) as image:
            image.convert("RGB").save(destination, "WEBP", quality=quality, method=6)

        if not destination.is_file() or destination.stat().st_size < 2048:
            raise RuntimeError(f"WebP output could not be verified: {destination}")

        source_size = source.stat().st_size
        output_size = destination.stat().st_size
        source.unlink()
        print(
            f"{destination.name}: {output_size / 1024:.0f} KB "
            f"({1 - output_size / source_size:.0%} smaller)"
        )


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert browser captures to optimized WebP.")
    parser.add_argument("--directory", type=Path, required=True)
    parser.add_argument("--quality", type=int, default=86)
    args = parser.parse_args()
    optimize(args.directory, args.quality)


if __name__ == "__main__":
    main()
