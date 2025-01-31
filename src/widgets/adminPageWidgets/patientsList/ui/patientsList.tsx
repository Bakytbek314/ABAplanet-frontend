import * as React from "react";
import PatientChart from "@entities/patientChart/ui/patientChart";
import PatientInfo from "@entities/patientInfo/ui/patientInfo";
import TextType from "@text/*";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';


const PatientsList = () => {
    return (
        <Accordion activeIndex={null}>
            <AccordionTab
                header={
                    (
                        <span className="flex align-items-center gap-2 p-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" size={"large"}/>
                            <span className="font-bold white-space-nowrap"><TextType variant={"h3"}>Amy Elsner</TextType></span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    ) as React.ReactNode
                }
            >
                <div className="p-4">
                    <TabView className={"mb-4"}>
                        <TabPanel header="О ребёнке" leftIcon="pi pi-user mr-2" className={"mr-4"}>
                            <PatientInfo/>
                        </TabPanel>
                        <TabPanel header="Расписание" leftIcon="pi pi-calendar mr-2" className={"mr-4"}>
                            <PatientInfo/>
                        </TabPanel>
                        <TabPanel header="График" leftIcon="pi pi-chart-bar mr-2" className={"mr-4"}>
                            <PatientChart/>
                        </TabPanel>
                        <TabPanel header="Финансы" leftIcon="pi pi-dollar mr-2">
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </TabPanel>
                    </TabView>
                </div>
            </AccordionTab>
        </Accordion>
    );
};

export default PatientsList;