import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { addFinance } from "../../api/api";
import { Accordion, AccordionTab } from "primereact/accordion";
import TextType from "@/shared/ui/textType/textType";
import { AddFinanceProps } from "./addFinance.props";

const AddFinance = ({ patientId }: AddFinanceProps) => {
  const [isPayment, setIsPayment] = useState<boolean>(false);
  const [financeFormData, setFinanceFormData] = useState({
    patientId: patientId,
    amount: 0,
  });

  const handleFinanceFormData = (e: React.FormEvent) => {
    e.preventDefault();
    addFinance(financeFormData, isPayment);
  };

  const header = () => (
    <TextType variant="smallP" className="p-2">
      Операции
    </TextType>
  );

  return (
    <Accordion className="mt-2">
      <AccordionTab header={header}>
        <form className="flex gap-2 p-2" onSubmit={handleFinanceFormData}>
          <div className="grid">
            <div className="flex align-items-center col-12">
              <RadioButton
                inputId="debt"
                name="finance"
                value="Individual"
                onChange={() => setIsPayment(false)}
                checked={isPayment === false}
              />
              <label htmlFor="debt" className="ml-2">
                Задолженность
              </label>
            </div>

            <div className="flex align-items-center col-12">
              <RadioButton
                inputId="payment"
                name="finance"
                value="Group"
                onChange={() => setIsPayment(true)}
                checked={isPayment === true}
              />
              <label htmlFor="payment" className="ml-2">
                Оплата
              </label>
            </div>
          </div>
          <div className="grid">
            <div className="col-12">
              <label htmlFor="integeronly" className="font-bold block mb-1">
                Сумма
              </label>
              <InputNumber
                inputId="integeronly"
                value={financeFormData.amount}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setFinanceFormData({
                    ...financeFormData,
                    amount: e.value ?? 0,
                  })
                }
              />
            </div>
            <Button color="green" type="submit" className="p-2">
              Сохранить
            </Button>
          </div>
        </form>
      </AccordionTab>
    </Accordion>
  );
};

export default AddFinance;
