import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PatientFinanceProps } from "./patientFinance.props";
import AddFinance from "./addFinance/addFinance";
import { useFormateDate } from "@/shared/lib/useFormateDate";
import { TabPanel, TabView } from "primereact/tabview";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";

const PatientFinance = (props: PatientFinanceProps) => {
  const { payments, debts, patientId } = props;

  const { user } = useCurrentUser();

  return (
    <div>
      {user?.role === "ADMIN" && <AddFinance patientId={patientId} />}
      
      <TabView className="mt-4">
        <TabPanel header="История оплаты" headerClassName="mr-4">
          <DataTable
            value={payments}
            tableStyle={{ minWidth: "5rem" }}
            stripedRows
            className="mt-2"
          >
            <Column
              field="paymentDate"
              header="Дата"
              body={(rowData) => useFormateDate(rowData.paymentDate)}
              className="py-2"
            ></Column>
            <Column field="amount" header="Сумма"></Column>
          </DataTable>
        </TabPanel>
        <TabPanel header="Задолженности">
          <DataTable
            value={debts}
            tableStyle={{ minWidth: "5rem" }}
            stripedRows
            className="mt-2"
          >
            <Column
              field="createdAt"
              header="Дата"
              body={(rowData) => useFormateDate(rowData.createdAt)}
              className="py-2"
            ></Column>
            <Column field="amount" header="Задолженность"></Column>
          </DataTable>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default PatientFinance;
