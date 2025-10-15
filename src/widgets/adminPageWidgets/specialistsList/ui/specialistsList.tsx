"use client";
import { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TabPanel, TabView } from "primereact/tabview";
import { Avatar } from "primereact/avatar";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import SpecialistInfo from "@entities/specialistInfo/ui/specialistInfo";
import TextType from "@shared/ui/textType/textType";
import SpecialistSchedule from "@/entities/specialistSchedule/ui/specialistSchedule";

const SpecialistsList = () => {
  const { specialists, fetchSpecialists } = useSpecialistsStore();

  useEffect(() => {
    fetchSpecialists();
  }, []);

  return (
    <Accordion activeIndex={null}>
      {specialists &&
        specialists.map((elem, i) => (
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
                    <TextType variant={"bigP"}>
                      {elem.firstName} {elem.lastName}
                    </TextType>
                  </span>
                </span>
              ) as React.ReactNode
            }
            className="mb-3"
            key={i}
          >
            <div className="p-4">
              <TabView >
                <TabPanel
                  header="О специалисте"
                  leftIcon="pi pi-user mr-2"
                  headerClassName={"mr-4"}
                >
                  <SpecialistInfo
                    firstName={elem.firstName}
                    lastName={elem.lastName}
                    telephoneNumber={elem.telephoneNumber}
                    login={elem.user.login}
                    createdAt={elem.user.createdAt}
                    specialization={elem.specialization}
                  />
                </TabPanel>
                <TabPanel
                  header="Расписание"
                  leftIcon="pi pi-calendar mr-2"
                  headerClassName={"mr-4"}
                >
                  <SpecialistSchedule individualSession={elem.individualSession} groupSessions={elem.groupSessions}/>
                </TabPanel>
                <TabPanel header="Финансы" leftIcon="pi pi-dollar mr-2" disabled>
                  $$$
                </TabPanel>
              </TabView>
            </div>
          </AccordionTab>
        ))}
    </Accordion>
  );
};

export default SpecialistsList;
