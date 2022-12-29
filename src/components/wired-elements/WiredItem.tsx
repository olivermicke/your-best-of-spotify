import { PropsWithChildren } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-item': any;
    }
  }
}

type Props = PropsWithChildren<{ value: string }>;

export const WiredItem: React.FC<Props> = ({ children, value }) => {
  return <wired-item value={value}>{children}</wired-item>;
};
