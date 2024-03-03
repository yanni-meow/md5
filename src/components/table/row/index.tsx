import React, { useContext, useMemo } from 'react';
import { table } from '../lib';
import '../index.css';

type RowProps = {
    children: React.ReactNode;
};

export const Row: React.FC<RowProps> = ({ children }) => {
    const { cols } = useContext(table);
    const gridTemplateColumns = useMemo(() => cols.map(item => item.size).join(' '), [cols]);

    return (
        <div
            className='row'
            style={{ gridTemplateColumns }}
        >
            {children}
        </div>
    );
};

Row.displayName = 'Table.Row';
