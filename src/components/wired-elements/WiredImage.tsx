declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-image': any;
    }
  }
}

type Props = {
  alt: string;
  elevation?: number;
  src: string;
};

export const WiredImage: React.FC<Props> = ({ alt, elevation, src }) => {
  return (
    <wired-image
      alt={alt}
      elevation={elevation}
      src={src}
      styles='aspect-ratio: 1; object-fit: cover'
    />
  );
};
