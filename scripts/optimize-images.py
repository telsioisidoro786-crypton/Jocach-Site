from pathlib import Path
from PIL import Image

IMAGE_DIR = Path(__file__).resolve().parents[1] / "client/public/images"

CONFIG = {
    "jocach-hero.jpg": [768, 1280, 2200],
    "jocach-projects.jpg": [768, 1280, 2176],
    "broda-hero.jpg": [768, 1280, 2200],
    "broda-interior.jpg": [768, 1280, 2176],
    "broda-original-menu.jpg": [480, 768, 1200],
    "broda-cheddar-menu.jpg": [480, 768, 1200],
    "broda-chicken-menu.jpg": [480, 768, 1200],
    "broda-fries-menu.jpg": [480, 768, 1200],
}

for filename, widths in CONFIG.items():
    source = IMAGE_DIR / filename
    with Image.open(source) as original:
        original = original.convert("RGB")
        stem = source.stem
        for width in widths:
            if width >= original.width:
                resized = original.copy()
            else:
                height = round(original.height * width / original.width)
                resized = original.resize((width, height), Image.Resampling.LANCZOS)
            output = IMAGE_DIR / f"{stem}-{width}w.webp"
            resized.save(output, "WEBP", quality=82, method=6)
            print(f"{output.name}: {resized.width}x{resized.height}")
