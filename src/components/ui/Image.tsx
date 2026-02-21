export interface ImageProps {
  srcSet: string;
  sizes: string;
  alt: string;
  className?: string;
}

function Image({ srcSet, sizes, alt, className = "" }: ImageProps) {
  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export default Image;
