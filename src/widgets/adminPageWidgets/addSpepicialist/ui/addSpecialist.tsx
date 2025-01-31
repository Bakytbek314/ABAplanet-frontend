"use client";
import React, {useRef, useState} from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import TextType from "@text/*";
import {InputText} from "primereact/inputtext";
import {FloatLabel} from "primereact/floatlabel";


const AddSpecialist = () => {

    const stepperRef = useRef(null);
    const [value, setValue] = useState<string>('');

    return (
        <Accordion activeIndex={null} expandIcon collapseIcon>
            <AccordionTab
                header={
                    (
                        <span className="flex align-items-center gap-2 p-2 w-full">
                            <i className="pi pi-user-plus ml-3 mr-2" style={{fontSize: "2rem"}}></i>
                            <span className="font-bold white-space-nowrap"><TextType variant={"h3"}>Добавить специалиста</TextType></span>
                        </span>
                    ) as React.ReactNode
                }
            >
                <div className={"p-4"}>
                    <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                        <StepperPanel header="Header I">
                            <div className="flex flex-column h-12rem">
                                <div className="border-3  surface-border border-round p-4">
                                    <div className="card flex justify-content-center">
                                        <FloatLabel>
                                            <InputText id="username" value={value}
                                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
                                            <label htmlFor="username">Username</label>
                                        </FloatLabel>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-4 justify-content-end">
                                <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                                        onClick={() => stepperRef.current.nextCallback()}/>
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Header II">
                            <div className="flex flex-column h-12rem">
                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                            </div>
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Header III">
                            <div className="flex flex-column h-12rem">
                                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                            </div>
                            <div className="flex pt-4 justify-content-start">
                                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            </div>
                        </StepperPanel>
                    </Stepper>
                </div>
            </AccordionTab>
        </Accordion>
    );
};

export default AddSpecialist;