import Image from 'next/image'
import TextType from "@shared/ui/textType/textType";
import Button from "@shared/ui/button/button";
import styles from "./startBlock.module.scss";

import Photo from "@shared/assets/images/startBlockPhoto.png";
import CirclesPhoto from "@shared/assets/images/circles.png";


const StartBlock = () => {
    return (
        <section className={styles.start_block_section}>
            <div className="container">
                <div className={styles.start_block}>
                    <div className={styles.img}>
                        <Image src={Photo} alt="photo" unoptimized/>
                    </div>
                    <div className={styles.content_text}>
                        <div className={styles.title}>
                            <TextType
                                variant={"h1"}
                                weight={"semiBold"}
                            >
                                Раскройте потенциал вашего ребенка:
                            </TextType>
                        </div>
                        <div className={styles.text}>
                            <TextType variant={"bigP"} color={"grey"}>
                                В нашей практике развитии детей мы понимаем уникальные потребности каждого ребенка. Наша
                                опытная
                                команда стремится обеспечить индивидуальный уход и поддержку, чтобы помочь вашему малышу
                                процветать
                            </TextType>
                        </div>
                        <div className={styles.buttons}>
                            <a href="https://wa.me/996500726660" target="_blank">
                                <Button size={"full"} color={"green"}>
                                        Записаться на прием
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.circles_photo}>
                <Image src={CirclesPhoto} alt="photo" unoptimized/>
            </div>
        </section>
    );
};

export default StartBlock;