import { create } from 'zustand';

type DataType = File & {
    hash: string
}

export type StoreProps = {
    data: DataType[];
    updateData: (data: DataType) => void;
};

export const useStore = create<StoreProps>()(set => ({
    data: [],
    updateData: (file) => {
        set((state) => ({
            data: [...state.data, file]
        }))
    },
}));
