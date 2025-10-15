"use client";
import TextType from "@/shared/ui/textType/textType";
import styles from "./accountHeader.module.scss";
import { useSpecialistStore } from "@/shared/store/useSpecialistStore";
import { usePatientStore } from "@/shared/store/usePatientStore";
import { useEffect } from "react";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";

const AccountHeader = () => {
  const { currentUser } = useCurrentUser();

  return (
    <header className={styles.account_header}>
      <div className="container">
        <TextType variant="bigP" color="white">
          {currentUser?.firstName} { currentUser?.lastName }
        </TextType>
      </div>
    </header>
  );
};

export default AccountHeader;
