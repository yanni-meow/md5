import { create } from 'zustand';

export type DataType = File & {
    hash?: string
}

export type StoreProps = {
    data: DataType[];
    updateData: (data: DataType) => void;
    removeData: (hash: string) => void;
};

export const useStore = create<StoreProps>()(set => ({
    data: [],
    updateData: (file) => {
        set((state) => ({
            data: [...state.data, file]
        }))
    },
    removeData: (hash) => {
        set((state) => ({
            data: state.data.filter(item => item.hash !== hash)
        }))
    }
}));
