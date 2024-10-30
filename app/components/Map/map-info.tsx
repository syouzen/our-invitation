import {IconLink, IconPhone} from '@/app/assets';
import styles from './components.module.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Dropdown';

const MapInfo = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.info}>
        <p className={styles.infoP}>
          <b>💍 두가헌</b>
          <br />
          서울 종로구 삼청로 14
          <br />
          <button
            className={styles.infoPhone}
            onClick={() => (window.location.href = 'tel:02-6261-1616')}
          >
            <a className={styles.aPhone} href="tel:02-6261-1616">
              <IconPhone width="0.8em" height="0.8em" /> 02-6261-1616
            </a>
          </button>
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconLink />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem href="https://tmap.life/754d0653">
            티맵
          </DropdownMenuItem>
          <DropdownMenuItem href="https://naver.me/5vIYBzpn">
            네이버 지도
          </DropdownMenuItem>
          <DropdownMenuItem href="https://kko.kakao.com/YQjI3gSmm7">
            카카오 지도
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MapInfo;
