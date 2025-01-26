import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import TextType from "@text/*";


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
                    <TabView>
                        <TabPanel header="О ребёнке" leftIcon="pi pi-user mr-2" className={"mr-4"}>
                            <TextType variant={"bigP"}>Дата рождения:</TextType>
                            <TextType variant={"bigP"}>Родитель:</TextType>
                            <TextType variant={"bigP"}>Телефон:</TextType>
                            <TextType variant={"bigP"}>Дата регистрации:</TextType>
                        </TabPanel>
                        <TabPanel header="График" leftIcon="pi pi-chart-bar mr-2" className={"mr-4"}>
                            <p className="pt-4">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </TabPanel>
                        <TabPanel header="Финансы" leftIcon="pi pi-dollar mr-2">
                            <p className="pt-4">
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