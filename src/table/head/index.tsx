import React, { PropsWithChildren, useContext, useEffect, useMemo, useRef } from 'react';
import { table } from '../lib';
import '../index.css';

export const Head: React.FC<PropsWithChildren> = ({ children}) => {
    const ref = useRef<any>(null);
    const {cols, setCols} = useContext(table);
    const gridTemplateColumns = useMemo(() => cols.map(item => item.size).join(' '), [cols]);

    useEffect(() => {
        const nextCols = [...(ref.current?.childNodes ?? [])].map($node => ({
            size: $node.dataset.size
        }));

        setCols(nextCols);
    }, [children]);

    return (
        <div
            ref={ref}
            className='head'
            style={{gridTemplateColumns}}
        >
            {children}
        </div>
    );
};

Head.displayName = 'Table.Head';
