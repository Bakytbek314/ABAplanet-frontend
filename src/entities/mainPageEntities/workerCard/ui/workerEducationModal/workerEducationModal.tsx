"use client"
import Image from 'next/image'
import {useRef} from "react";
import {useClickOutSide} from "@shared/lib/useClickOutSide";
import {WorkerEducationModalProps} from "./workerEducationModal.props"
import {IoIosCloseCircleOutline} from "react-icons/io";
import AltPhoto from "@shared/assets/images/diploma.webp";
import styles from "./workerEdicationModal.module.scss";

const WorkerEducationModal = ({workerEducationLicense, onModalClose}: WorkerEducationModalProps) => {

    const modalRef = useRef<HTMLDivElement | null>(null);
    useClickOutSide(modalRef, () => onModalClose());

    return (
        <section className={styles.worker_education_modal_popup}>
            <div className={styles.education_license} ref={modalRef}>
                <IoIosCloseCircleOutline onClick={onModalClose}/>
                <Image src={workerEducationLicense ? workerEducationLicense : AltPhoto as any} alt="worker"/>
            </div>
        </section>
    );
};

export default WorkerEducationModal;