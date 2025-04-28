"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { baseUrl } from "@/shared/constants/baseUrl";
import { useManualsStore } from "../store/useManualsStore";
import { Button } from "primereact/button";
import { uploadDocument } from "../api/upload";
import { Toast } from "primereact/toast";
import { useToast } from "@/shared/lib/useToast";
import { deleteDocument } from "../api/delete";

const Manuals = () => {
  const { fetchManuals, manuals } = useManualsStore();

  const fileUploadRef = useRef<FileUpload>(null);
  const toast = useRef<Toast>(null);

  const [uploadManualData, setUploadManualData] = useState({
    name: "",
    document: null as File | null,
  });

  const manualNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadManualData({
      ...uploadManualData,
      name: e.target.value,
    });
  };

  const manualDocumentChange = (e: any) => {
    const file = e.files[0];

    setUploadManualData({
      ...uploadManualData,
      document: file,
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteDocument(id);
      await fetchManuals();
      useToast(toast, "success", "Успешно", "Документ удален");
      setUploadManualData({ name: "", document: null });
    } catch (error) {
      useToast(toast, "error", "Ошибка", "Документ не удален");
    } finally {
      fileUploadRef.current?.clear();
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("documentName", uploadManualData.name);
      formData.append("document", uploadManualData.document as Blob);
      await uploadDocument(formData);
      await fetchManuals();
      useToast(toast, "success", "Успешно", "Документ загрежен");
      setUploadManualData({ name: "", document: null });
    } catch (error) {
      useToast(toast, "error", "Ошибка", "Документ не загрежен");
    } finally {
      fileUploadRef.current?.clear();
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex align-items-center p-2 gap-3 ">
        <InputText
          placeholder="Введите название документа"
          onChange={(e) => manualNameChange(e)}
          value={uploadManualData.name}
          className="p-2"
        />
        <FileUpload
          ref={fileUploadRef}
          mode="basic"
          maxFileSize={1000000}
          uploadHandler={manualDocumentChange}
          customUpload
          disabled={!uploadManualData?.name}
        />
        <Button
          className="p-2"
          onClick={handleSubmit}
          disabled={!uploadManualData?.name || !uploadManualData.document}
        >
          Отправить
        </Button>
      </div>
    );
  };

  const actionBodyTemplate = (endpoint: string) => (
    <Link href={endpoint} target="_blank">
      <p className="text-primary hover:text-cyan-700">Просмотреть</p>
    </Link>
  );

  const deleteBodyTemplate = (id: number) => (
    <Button className="p-1" severity="danger" onClick={() => handleDelete(id)}>
      <i className="pi pi-trash"></i>
    </Button>
  );

  useEffect(() => {
    fetchManuals();
  }, []);

  return (
    <>
      <Toast ref={toast}/>
      <DataTable
        value={manuals}
        sortField="documentName"
        sortOrder={1}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
        header={renderHeader}
      >
        <Column
          field="documentName"
          header="Название документа"
          sortable
          className={"p-2"}
          headerClassName="p-2"
        ></Column>
        <Column
          field="format"
          header="Формат"
          sortable
          className={"p-2"}
          headerClassName="p-2"
        ></Column>
        <Column
          body={(e) => actionBodyTemplate(e.document)}
          header="Действия"
          className={"p-2"}
          headerClassName="p-2"
        ></Column>
        <Column
          body={(e) => deleteBodyTemplate(e.id)}
          header="Удаление"
          className={"p-2"}
          headerClassName="p-2"
        ></Column>
      </DataTable>
    </>
  );
};

export default Manuals;
