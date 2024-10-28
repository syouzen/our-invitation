import {IconPhone} from '@/app/assets';
import styles from './components.module.css';

const MapInfo = () => {
  return (
    <div className={styles.info}>
      <p>
        <b>💍 두가헌</b>
        <br />
        서울 종로구 삼청로 14
        <br />
        <button
          className={styles.infoPhone}
          onClick={() => (window.location.href = 'tel:02-6261-1616')}
        >
          <IconPhone width={12} height={12} /> 02-6261-1616
        </button>
      </p>
    </div>
  );
};

export default MapInfo;
