import { Swiper } from "swiper/react";
import { ReactNode } from "react";
import { Keyboard, Pagination, Navigation, Zoom } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/zoom";
import styles from "./swiperContainer.module.scss";

interface SwiperContainerProps {
  children: ReactNode;
}

const SwiperContainer = ({ children }: SwiperContainerProps) => {
  return (
    <Swiper
      className={styles.swiper}
      zoom={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Zoom, Keyboard, Pagination, Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
