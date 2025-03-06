"use client";
import React, { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TabView, TabPanel } from "primereact/tabview";
import { Avatar } from "primereact/avatar";
import { usePatientsStore } from "@/shared/store/usePatientsStore";
import PatientChart from "@entities/patientChart/ui/patientChart";
import PatientInfo from "@entities/patientInfo/ui/patientInfo";
import PatientSchedule from "@/entities/patientSchedule/ui/patientSchedule";
import TextType from "@text/*";
import PatientFinance from "@/entities/patientFinance/ui/patientFinance";

const PatientsList = () => {
    const { patients, fetchPatients } = usePatientsStore();

    useEffect(() => {
        fetchPatients();
    }, [patients]);

  return (
    <Accordion activeIndex={null}>
      {patients && patients.map((elem, i: number) => (
        <AccordionTab
          header={
            (
              <span className="flex align-items-center gap-2 p-2 w-full">
                <Avatar
                  image=""
                  shape="circle"
                  size={"normal"}
                />
                <span className="font-bold white-space-nowrap">
                  <TextType variant={"bigP"}>{elem.firstName} {elem.lastName}</TextType>
                </span>
              </span>
            ) as React.ReactNode
          }
          key={i}
          className="mb-2"
        >
          <div className="p-4">
            <TabView>
              <TabPanel
                header="О ребёнке"
                leftIcon="pi pi-user mr-2"
                headerClassName="mr-4"
              >
                <PatientInfo 
                  firstName={elem.firstName}
                  lastName={elem.lastName}
                  parentFirstName={elem.parentFirstName}
                  parentLastName={elem.parentLastName}
                  telephoneNumber={elem.telephoneNumber}
                  login={elem.user.login}
                  createdAt={elem.user.createdAt}
                />
              </TabPanel>
              <TabPanel
                header="Расписание"
                leftIcon="pi pi-calendar mr-2"
                headerClassName="mr-4"
              >
                <PatientSchedule individualSession={elem.individualSession} groupSessions={elem.groupSessions} patientId={elem.id}/>
              </TabPanel>
              <TabPanel
                header="График"
                leftIcon="pi pi-chart-bar mr-2"
                headerClassName={"mr-4"}
              >
                <PatientChart />
              </TabPanel>
              <TabPanel header="Финансы" leftIcon="pi pi-dollar mr-2">
                <PatientFinance payments={elem.payments} debts={elem.debts} patientId={elem.id}/>
              </TabPanel>
            </TabView>
          </div>
        </AccordionTab>
      ))}
    </Accordion>
  );
};

export default PatientsList;
