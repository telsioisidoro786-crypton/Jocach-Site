import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  src: string;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
};

function getResponsivePath(src: string, width: number) {
  const dot = src.lastIndexOf(".");
  if (dot === -1) return src;
  return `${src.slice(0, dot)}-${width}w.webp`;
}

export default function OptimizedImage({
  src,
  alt,
  widths = [768, 1280, 2200],
  sizes = "(max-width: 760px) 100vw, 50vw",
  priority = false,
  loading,
  decoding = "async",
  ...props
}: OptimizedImageProps) {
  const srcSet = widths
    .map(width => `${getResponsivePath(src, width)} ${width}w`)
    .join(", ");
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        {...props}
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : (loading ?? "lazy")}
        fetchPriority={priority ? "high" : undefined}
        decoding={decoding}
      />
    </picture>
  );
}
