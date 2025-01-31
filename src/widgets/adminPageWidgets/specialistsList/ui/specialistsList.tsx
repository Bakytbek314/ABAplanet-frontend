import * as React from "react";
import SpecialistInfo from "@entities/specialistInfo/ui/specialistInfo";
import { Accordion, AccordionTab } from 'primereact/accordion';
import {TabPanel, TabView} from "primereact/tabview";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import TextType from "@text/*";


const SpecialistsList = () => {
    return (
        <Accordion activeIndex={null}>
            <AccordionTab
                header={
                    (
                        <span className="flex align-items-center gap-2 p-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" size={"large"}/>
                            <span className="font-bold white-space-nowrap"><TextType variant={"h3"}>Amy Elsner</TextType></span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    ) as React.ReactNode
                }
            >
                <div className="p-4">
                    <TabView className={"mb-4"}>
                        <TabPanel header="О специалисте" leftIcon="pi pi-user mr-2" className={"mr-4"}>
                            <SpecialistInfo />
                        </TabPanel>
                        <TabPanel header="Расписание" leftIcon="pi pi-calendar mr-2" className={"mr-4"}>

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

export default SpecialistsList;