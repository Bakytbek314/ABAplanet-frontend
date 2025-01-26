import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';


const SpecialistsList = () => {
    return (
        <Accordion activeIndex={null}>
            <AccordionTab
                header={
                    (
                        <span className="flex align-items-center gap-2 p-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" size={"xlarge"}/>
                            <span className="font-bold white-space-nowrap">Amy Elsner</span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    ) as React.ReactNode
                }
            >
                <p className="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
        </Accordion>
    );
};

export default SpecialistsList;