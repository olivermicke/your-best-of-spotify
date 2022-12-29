import { PropsWithChildren } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-card': any;
    }
  }
}

type Props = PropsWithChildren<{ className?: string; elevation?: number }>;

export const WiredCard: React.FC<Props> = ({
  children,
  className,
  elevation,
}) => {
  return (
    <wired-card class={className} elevation={elevation}>
      {children}
    </wired-card>
  );
};
