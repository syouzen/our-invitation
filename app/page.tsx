import {
  Account,
  Comment,
  Header,
  Intersection,
  Map,
  Share,
  SubHeader,
} from './components';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${styles['animate-layer']}`}>
        <section className={styles.section}>
          <Header />
        </section>

        <section className={styles.section}>
          <SubHeader />
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>갤러리</span>
            {/* TODO: 사진 등 */}
          </Intersection>
        </section>

        <section className={styles.section}>
          <Map />
        </section>

        <section className={styles.section}>
          <Account />
        </section>

        <section className={styles.section}>
          <Intersection>
            <Comment />
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <Share />
          </Intersection>
        </section>

        <footer className={styles.footer}>
          <p>OOOOOOOOOOO</p>
        </footer>
      </main>
    </div>
  );
}
