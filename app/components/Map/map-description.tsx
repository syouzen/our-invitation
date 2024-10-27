import styles from './components.module.css';

const MapDescription = () => {
  return (
    <div className={styles.descWrapper}>
      <div className={styles.desc}>
        <span className={styles.descTitle}>지하철</span>
        <div className={styles.descContent}>
          <span>
            <b>지하철 3호선</b> 안국역 1번출구 도보 10분 거리에 위치
          </span>
        </div>
      </div>
      <div className={styles.desc}>
        <span className={styles.descTitle}>주차</span>
        <div className={styles.descContent}>
          <span>건물 내 15대 무료</span>
          <div className="flex gap-0.5">
            *
            <span>
              주차장 이용이 혼잡합니다. 불편하시더라도 대중교통 이용을 권장
              드립니다.
            </span>
          </div>
          <div className="flex gap-0.5">
            *
            <span>
              만차 시 <b>국립현대미술관, 경복궁</b> 주차장 이용 부탁 드립니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDescription;
