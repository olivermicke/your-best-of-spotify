import styles from './layout.module.css';
import { Menu } from './menu';

const CardLayoutGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.content}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default CardLayoutGroup;
