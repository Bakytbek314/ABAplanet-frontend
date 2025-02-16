export interface StorePatient {
  patients: PatientsData[];
  fetchPatients: () => void;
}

export interface StoreSpecialists {
    specialists: SpecialistsData[];
    fetchSpecialists : () => void;
}

export interface PatientsData {
    id: number,
    userId: number,
    firstName: string,
    lastName: string,
    parentFirstName: string,
    parentLastName: string,
    telephoneNumber: string,
    user: {
        login: string,
        createdAt: Date
    },
    individualSession: [],
    groupSessions: [],
    developmentResults: [],
    payments: [],
    debts: []
}

export interface SpecialistsData {
    id: number,
    userId: number,
    firstName: string,
    lastName: string,
    telephoneNumber: string,
    specialization: string,
    user: {
        login: string,
        createdAt: Date
    },
    individualSession: [],
    groupSessions: [],
}

export interface AddPatientFormData {
    firstName: string,
    lastName: string,
    parentFirstName: string,
    parentLastName: string,
    login: string,
    password: string,
    phoneNumber: string
}

export interface AddSpecialistFormData {
    firstName: string,
    lastName: string,
    login: string,
    password: string,
    phoneNumber: string,
    specialization: string | null,
    salaryPercent: number,
}

export interface Specialization {
    name: string;
  }