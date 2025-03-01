"use client";
import {useRef, useState} from "react";
import {useBlockedScroll} from "@shared/lib/useBlockedScroll";
import WorkerCard from "@entities/mainPageEntities/workerCard/ui/workerCard";
import WorkerEducationModal from "@entities/mainPageEntities/workerCard/ui/workerEducationModal/workerEducationModal";
import TextType from "@shared/ui/textType/textType";
import {workerInfo} from "@shared/constants/workerInfo";
import styles from "./ourTeam.module.scss";

const OurTeam = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [workerEducationLicense, setWorkerEducationLicense] = useState<HTMLImageElement>();

    const onModalOpen = ( photo: HTMLImageElement ): void => {
        setIsModalOpen(!isModalOpen);
        setWorkerEducationLicense(photo);
    };

    const onModalClose = () => {
        setIsModalOpen(!isModalOpen);
    }

    useBlockedScroll(isModalOpen);

    return (
        <>
            <section className={styles.our_team_section}>
                <div className="container">
                    <div className={styles.our_team}>
                        <div>
                            <TextType variant={"h1"} align={"center"} weight={"semiBold"}>Наша команда</TextType>
                        </div>
                        <div className={styles.team_cards}>
                            {
                                workerInfo.map((worker) => (
                                    <WorkerCard
                                        id={worker.id}
                                        name={worker.name}
                                        photo={worker.photo as string}
                                        description={worker.description}
                                        education={worker.education as HTMLImageElement}
                                        onModalOpen={onModalOpen}
                                        key={worker.id}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {isModalOpen &&
                <WorkerEducationModal
                    workerEducationLicense={workerEducationLicense as HTMLImageElement}
                    onModalClose={onModalClose}
                />
            }
        </>
    );
};

export default OurTeam;