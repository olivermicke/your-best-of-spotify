import { Menu } from './_components/menu';
import styles from './layout.module.css';

const CardLayoutGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.content}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default CardLayoutGroup;
