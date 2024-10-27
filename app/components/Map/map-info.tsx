import {IconPhone} from '@/app/assets';
import styles from './components.module.css';

const MapInfo = () => {
  return (
    <div className={styles.info}>
      <p>
        서울 종로구 삼청로 14
        <br />
        <b>두가헌</b>
        <br />
        <p className={styles.infoPhone}>
          <IconPhone width={12} height={12} /> 02-538-3300
        </p>
      </p>
    </div>
  );
};

export default MapInfo;
