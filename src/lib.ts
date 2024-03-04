import { DataType } from "./store";

export const findSameHash = (list: DataType[], hash: string) => list.some(item => item.hash === hash)