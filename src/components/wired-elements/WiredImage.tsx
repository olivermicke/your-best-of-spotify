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
  height: number;
  src: string;
  width: number;
};

export const WiredImage: React.FC<Props> = ({
  alt,
  elevation,
  height,
  src,
  width,
}) => {
  return (
    <wired-image
      alt={alt}
      elevation={elevation}
      height={height}
      src={src}
      width={width}
    />
  );
};
