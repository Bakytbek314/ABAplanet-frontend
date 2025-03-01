export interface StorePatient {
  patients: PatientsData[];
  fetchPatients: () => void;
}

export interface StoreSpecialists {
  specialists: SpecialistsData[];
  fetchSpecialists: () => void;
}

export interface StoreGroupSession {
  groupSession: GroupSessionData[];
  fetchGroupSession: () => void;
}

export interface StoreSpecialistSchedule {
  specialistId: number | null;
  individual: IndividualSessionData[];
  group: GroupSessionData[];
  mainGroup: GroupSessionData[];
  fetchSpecialist: (id: number) => void;
}

export interface StoreGallery {
  photos: PhotosData[];
  fetchPhotos: () => void;
}

export interface StorePatientCard {
  cards: SpecialistCardData[];
  fetchCards: () => void;
}

export interface PatientsData {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  parentFirstName: string;
  parentLastName: string;
  telephoneNumber: string;
  user: {
    login: string;
    createdAt: Date;
  };
  individualSession: [];
  groupSessions: [];
  developmentResults: [];
  payments: [];
  debts: [];
}

export interface SpecialistsData {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  telephoneNumber: string;
  specialization: string;
  user: {
    login: string;
    createdAt: Date;
  };
  individualSession: [];
  groupSessions: [];
  mainGroupSessions: []
}

export interface GroupSessionData {
  id: number;
  day: string;
  streamNumber: number;
  firstStageStartTime: string;
  firstStageEndTime: string;
  secondStageStartTime: string;
  secondStageEndTime: string;
  mainSpecialistId: number;
  patients: [
    {
      firstName: string;
      lastName: string;
    }
  ];
  specialists: [
    {
      firstName: string;
      lastName: string;
    }
  ];
}

export interface IndividualSessionData {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  specialistId: number;
  patientId: number;
  patient: {
    firstName: string;
    lastName: string;
  };
}

export interface AddPatientFormData {
  firstName: string;
  lastName: string;
  parentFirstName: string;
  parentLastName: string;
  login: string;
  password: string;
  phoneNumber: string;
}

export interface AddSpecialistFormData {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  phoneNumber: string;
  specialization: string | null;
  salaryPercent: number;
}

export interface Specialization {
  name: string;
}

export interface PhotosData {
  id: number;
  photo: string;
}

export interface SpecialistCardData {
  id: number;
  specialistId: number;
  description: string;
  photo: string;
  diplomaPhoto: string;
  specialist: {
    firstName: string;
    lastName: string;
  };
}
