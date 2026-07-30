import Image from 'next/image';
import styles from './BggBanner.module.css';

export function BggBanner() {
  return (
    <a
      className={styles.bggBanner}
      href='https://boardgamegeek.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src='/bgg.png'
        alt='Powered by BGG'
        width={900}
        height={264}
        loading='eager'
      />
    </a>
  );
}
