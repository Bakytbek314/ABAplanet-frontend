import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PatientFinanceProps } from "./patientFinance.props";
import AddFinance from "./addFinance/addFinance";
import { useFormateDate } from "@/shared/lib/useFormateDate";

const PatientFinance = (props: PatientFinanceProps) => {
  const { payments, debts, patientId } = props;

  return (
    <div>
      <AddFinance patientId={patientId} />
      <DataTable
        value={payments}
        tableStyle={{ minWidth: "50rem" }}
        header={"История оплаты"}
        stripedRows
        className="mt-4"
      >
        <Column
          field="paymentDate"
          header="Дата"
          body={(rowData) => useFormateDate(rowData.paymentDate)}
          className="py-2"
        ></Column>
        <Column field="amount" header="Сумма"></Column>
      </DataTable>

      <DataTable
        value={debts}
        tableStyle={{ minWidth: "50rem" }}
        header={"История оплаты"}
        stripedRows
        className="mt-4"
      >
        <Column
          field="createdAt"
          header="Дата"
          body={(rowData) => useFormateDate(rowData.createdAt)}
          className="py-2"
        ></Column>
        <Column field="amount" header="Задолженность"></Column>
      </DataTable>
    </div>
  );
};

export default PatientFinance;
