import { FC, useContext, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { SpotifyLoginUrlContext } from '../../contexts/spotify-login-url-context';
import { WiredCombo } from '../wired-elements/WiredCombo';
import { WiredItem } from '../wired-elements/WiredItem';
import styles from './Menu.module.css';

export const Menu: FC<{}> = () => {
  const { pathname, push } = useRouter();
  const spotifyLoginUrl = useContext(SpotifyLoginUrlContext);

  const usesMockedData = pathname.startsWith('/mocked');
  const isArtistsPage = pathname.endsWith('/artists');
  const mockedDataPath = isArtistsPage ? '/mocked/artists' : '/mocked/tracks';

  const selectedPath = pathname.endsWith('/artists') ? 'artists' : 'tracks';

  useEffect(() => {
    const onWiredComboClick = (e: any) => {
      let nextPath = e.target.value.value;
      if (usesMockedData) {
        nextPath = '/mocked/' + nextPath;
      }

      push(nextPath);
    };

    const wiredCombo = document.querySelector('wired-combo');

    wiredCombo?.addEventListener('selected', onWiredComboClick);

    return () => {
      wiredCombo?.removeEventListener('selected', onWiredComboClick);
    };
  }, [push, usesMockedData]);

  return (
    <menu className={styles.menu}>
      <WiredCombo selected={selectedPath}>
        <WiredItem value='artists'>Artists</WiredItem>
        <WiredItem value='tracks'>Tracks</WiredItem>
      </WiredCombo>
      <div className={styles.menuLinks}>
        {usesMockedData ? (
          <Link className={styles.menuLink} href={spotifyLoginUrl ?? '/login'}>
            Use your own data instead
          </Link>
        ) : (
          <Link className={styles.menuLink} href={mockedDataPath}>
            Use mocked data instead
          </Link>
        )}
      </div>
    </menu>
  );
};
