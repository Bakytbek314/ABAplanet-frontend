'use client';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

const Manuals = () => {

    const documents = [
        { id: 1, name: 'Документ 1', format: 'PDF' },
        { id: 2, name: 'Документ 2', format: 'DOCX' },
        { id: 3, name: 'Документ 3', format: 'XLSX' },
        { id: 4, name: 'Документ 4', format: 'TXT' },
    ];

    const handleShowDocument = (rowData: any) => {
        alert(`Показать документ: `);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between p-2">
                <FileUpload
                    style={{}}
                    multiple accept="image/*"
                    maxFileSize={1000000}
                    emptyTemplate={
                        <p className="m-4">
                            Drag and drop files to here to upload.
                        </p>}
                />
            </div>
        );
    };

    // const header = renderHeader();

    const actionBodyTemplate = () => (
        <Button
            label="Показать"
            icon="pi pi-eye"
            className="p-button-text"
            onClick={() => handleShowDocument(rowData)}
        />
    );

    return (
        <DataTable value={documents} sortField="name" sortOrder={1} showGridlines tableStyle={{ minWidth: '50rem', }} header={renderHeader} >
            <Column field="name" header="Название документа" sortable className={"p-2"}></Column>
            <Column field="format" header="Формат" sortable className={"p-2"}></Column>
            <Column body={actionBodyTemplate} header="Действия" className={"p-2"}></Column>
        </DataTable>
    );
};

export default Manuals;