import { MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-combo': any;
    }
  }
}

type Props = PropsWithChildren<{ selected: string }>;

function forceRerender(ref: MutableRefObject<undefined>): void {
  try {
    // @ts-ignore
    ref.current?._requestUpdate?.();
  } catch (e) {}
}

export const WiredCombo: React.FC<Props> = ({ children, selected }) => {
  const ref = useRef();

  useEffect(() => {
    const a = setTimeout(() => {
      forceRerender(ref);
    }, 0);
    const b = setTimeout(() => {
      forceRerender(ref);
    }, 50);
    const c = setTimeout(() => {
      forceRerender(ref);
    }, 500);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, [ref]);

  return (
    <wired-combo selected={selected} ref={ref}>
      {children}
    </wired-combo>
  );
};
