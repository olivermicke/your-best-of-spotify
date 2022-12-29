import { FC } from 'react';

import { WiredCard } from '../wired-elements/WiredCard';
import { WiredImage } from '../wired-elements/WiredImage';
import styles from './CardGrid.module.css';
import { MainLayout } from './MainLayout';

export type Entity = {
  image: {
    height: number;
    src: string;
    width: number;
  };
  name: string;
  subtitle?: string;
};

type Props = {
  entities: Entity[];
};

export const CardGrid: FC<Props> = ({ entities }) => {
  return (
    <MainLayout>
      <section className={styles.cardDeck}>
        {entities.map(({ image, name, subtitle }) => (
          <WiredCard className={styles.card} elevation={3} key={name}>
            <WiredImage
              alt={`album cover of ${name}`}
              elevation={2}
              height={image.height}
              src={image.src}
              width={image.width}
            />
            <p className={styles.cardTitle}>{name}</p>
            {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
          </WiredCard>
        ))}
      </section>
    </MainLayout>
  );
};
