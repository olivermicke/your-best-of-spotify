import { PropsWithChildren } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-button': any;
    }
  }
}

type Props = PropsWithChildren<{ elevation?: number }>;

export const WiredButton: React.FC<Props> = ({ children, elevation }) => {
  return <wired-button elevation={elevation}>{children}</wired-button>;
};
