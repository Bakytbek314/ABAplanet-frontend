"use client";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";
import { useSpecialistStore } from "../store/useSpecialistStore";
import { usePatientStore } from "../store/usePatientStore";

interface DecodedToken {
  role: string;
  patientId: boolean | number;
  specialistId: boolean | number;
}

const useCheckRole = () => {
  const [accountInfo, setAccountInfo] = useState<DecodedToken | null>(null);

  useEffect(() => {
    try {
      const cookies = parseCookies();
      const token = cookies.token;

      if (token) {
        const decoded: DecodedToken = jwtDecode(token);
        setAccountInfo({
          role: decoded.role,
          patientId: decoded.patientId,
          specialistId: decoded.specialistId,
        });
      }
    } catch (err) {
      console.error("Ошибка при получении роли:", err);
      setAccountInfo(null);
    }
  }, []);

  return accountInfo;
};

export const useCurrentUser = () => {
  const user = useCheckRole();
  const { specialist, fetchSpecialist } = useSpecialistStore();
  const { patient, fetchPatient } = usePatientStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (!user?.role) return;

      setLoading(true);

      if (user.role === "SPECIALIST") {
        await fetchSpecialist(+user.specialistId);
      } else if (user.role === "PATIENT") {
        await fetchPatient(+user.patientId);
      }

      setLoading(false);
    };

    loadUser();
  }, [user]);

  const currentUser =
  user?.role === "SPECIALIST"
      ? specialist
      : user?.role === "PATIENT"
      ? patient
      : null;

  return { currentUser, user, loading };
};
