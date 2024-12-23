import {
  Account,
  Comment,
  Header,
  Map,
  Photos,
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
          <Photos />
        </section>

        <section className={styles.section}>
          <Map />
        </section>

        <section className={styles.section}>
          <Account />
        </section>

        <section className={styles.section}>
          <Comment />
        </section>

        <section className={styles.section}>
          <Share />
        </section>

        <footer className={styles.footer}>
          <span>
            Developed by <b>seungyeon</b>
          </span>
          <span>
            Designed by <b>hyuna</b>
          </span>
        </footer>
      </main>
    </div>
  );
}
