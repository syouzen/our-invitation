import {Comment, Header, Intersection, Share} from './components';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${styles['animate-layer']}`}>
        <section className={styles.section}>
          <Intersection>
            <Header />
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>갤러리</span>
            {/* TODO: 사진 등 */}
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>오시는 길</span>
            {/* TODO: 맵, 이동 정보 등 */}
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>정보 및 안내 사항</span>
            {/* TODO: 식사, 주차 안내 등 */}
            {/* TODO: 참석 의사 전달? */}
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>마음을 전해주세요</span>
            {/* TODO: 계좌 번호 등 */}
          </Intersection>
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
