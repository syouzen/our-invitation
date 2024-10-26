import Image from "next/image";
import { Intersection, Share } from "./components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${styles["animate-layer"]}`}>
        <section className={styles.section}>
          <Intersection>
            <div className={styles.imageContainer}>
              <Image
                src="https://lh6.googleusercontent.com/proxy/vuxyus0fYbILQcp7YGZetOZECaBMPJBE9IY4OEBmw1y47E5ULJpRjCYl9P53o-1G2OrxQg8ftdrJIEWrY69X6tdlFEOo_BbPW-TOZYtL9FAzwgz6uxDje-PWwdfMNgBrU3aA1C26zRKlI4o"
                alt="메인 이미지"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className={styles.mainContents}>
              <div className={styles.mainContentsText}>
                <span>OOO</span>
                <span>|</span>
                <span>OOO</span>
              </div>
              <div className={styles.mainContentsSubText}>
                2024년 11월 10일 일요일 오후 2시
                <br />
                장소
              </div>
            </div>
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>우리를 찾아주세요</span>
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>마음을 보내주세요</span>
          </Intersection>
        </section>

        <section className={styles.section}>
          <Intersection>
            <span>방명록</span>
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
