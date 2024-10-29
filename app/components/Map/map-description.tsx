import styles from './components.module.css';

const MapDescription = () => {
  return (
    <div className={styles.descWrapper}>
      <div className={styles.desc}>
        <div className={styles.descTitle}>지하철</div>
        <div className={styles.descContent}>
          <span>
            <b>지하철 3호선</b> 안국역 1번 출구 도보 5분 거리에 위치
          </span>
          <span>
            <b>지하철 5호선</b> 광화문역 2번 출구 도보 5분 거리에 위치
          </span>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.descTitle}>주차</div>
        <div className={styles.descContent}>
          <span>건물 내 15대 무료</span>
          <div className={styles.descContentSub}>
            *<span>주차장 이용이 혼잡할 수 있습니다.</span>
          </div>
          <div className={styles.descContentSub}>
            *<span>불편하시더라도 가능한 대중교통 이용을 권장 드립니다.</span>
          </div>
          <div className={styles.descContentSub}>
            *
            <span>
              만차 시 <b>국립현대미술관, 경복궁</b> 주차장 이용 부탁 드립니다.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.descTitle}>식사</div>
        <div className={styles.descContent}>
          <span>신선한 제철 재료를 사용한 코스요리입니다.</span>
          <div className={styles.descContentSub}>
            *
            <span>
              <b>80인</b>까지 이용이 가능합니다. 양해 부탁드립니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDescription;
