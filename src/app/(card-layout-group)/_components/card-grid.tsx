import { FC } from 'react';

import { WiredCard } from 'components/wired-elements/WiredCard';
import { WiredImage } from 'components/wired-elements/WiredImage';

import styles from './card-grid.module.css';

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
  );
};