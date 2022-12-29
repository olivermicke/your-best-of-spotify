import { FC, PropsWithChildren } from 'react';

import styles from './MainLayout.module.css';
import { Menu } from './Menu';

type Props = PropsWithChildren<{}>;

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.content}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};
