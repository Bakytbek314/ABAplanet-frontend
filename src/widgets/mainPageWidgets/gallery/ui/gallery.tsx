"use client";
import Image from 'next/image'
import {SwiperSlide} from "swiper/react";
import SwiperContainer from "@features/swiperContainer/ui/swiperContainer";
import TextType from "@shared/ui/textType/textType";
import styles from "./gallery.module.scss";
import { useGalleryStore } from '@/widgets/adminPageWidgets/manageMainPageContent/store/useGalleryStore';
import { baseUrl } from '@/shared/constants/baseUrl';
import { useEffect } from 'react';
const Gallery = () => {
    const { photos, fetchPhotos} = useGalleryStore();

    useEffect(() => {
        fetchPhotos();
    }, [])
    return (
        <section className={styles.gallery_section}>
            <div className="container">
                <div className={styles.title}>
                    <TextType variant={"h1"} color={"red"} align={"center"} weight={"semiBold"}>
                        Галерея
                    </TextType>
                </div>
                <SwiperContainer>
                    {photos.map((elem, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slider}>
                                <Image src={`${baseUrl}/${elem.photo}`} alt="room" width={1000} height={1000}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperContainer>
            </div>
        </section>
    );
};

export default Gallery;