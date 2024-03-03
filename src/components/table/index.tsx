import React, { ReactNode, useMemo, useState } from 'react';
import { Col, table } from "./lib";
import { Head } from "./head";
import { Row } from "./row";
import { Cell } from "./cell";
import './index.css';

type TableProps = {
    children: ReactNode;
};

type TableWithExtensions = {
    (props: TableProps): React.JSX.Element;
    Head: typeof Head;
    Row: typeof Row;
    Cell: typeof Cell;
};

export const Table: TableWithExtensions = ({ children}) => {
    const [cols, setCols] = useState<Col[]>([]);

    const value = useMemo(
        () => ({
            cols,
            setCols: (value: Col[]) => setCols(value)
        }),
        [cols]
    );

    return (
        <div className='table_container'>
            <table.Provider value={value as any}>{children}</table.Provider>
        </div>
    );
};

Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;
