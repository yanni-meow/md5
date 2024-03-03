import { createContext } from 'react';

type Context<T> = {
    cols: T[];
    setCols: (cols: T[]) => void;
};
export type Col = {
    size: string
};

export const table = createContext<Context<Col>>({
    cols: [],
    setCols: () => {}
});
