import React, {FC} from 'react';
import '../index.css';

type CellProps = {
    size?: string;
    children: React.ReactNode;
};

export const Cell: FC<CellProps> = ({
    size = '1fr',
    children,
}) => (
    <div
        className='cell'
        data-size={size}
    >
        {children}
    </div>
);

Cell.displayName = 'Table.Cell';
