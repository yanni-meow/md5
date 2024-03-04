import React, {useState} from 'react';
// @ts-ignore
import MD5 from "crypto-js/md5";
import { Input, Table } from "./components";
import { DataType, useStore } from "./store";
import { findSameHash } from "./lib";
import './App.css';

function App() {
    const data = useStore(state => state.data);
    const updateData = useStore(state => state.updateData);
    const removeData = useStore(state => state.removeData);

    const [err, setErr] = useState(false);

    const uploadData = (event: Event) => {
        setErr(false);

        const target= event.target as HTMLInputElement;
        const file: DataType = (target.files as FileList)[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const binary = event.target?.result;
            const md5 = MD5(binary).toString();

            if (findSameHash(data, md5)) setErr(true);
            else {
                file.hash = md5;
                updateData(file);
            }
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className="App">
            <Input onChange={uploadData}/>

            {err &&
                <span className='error'>Данный файл уже был загружен</span>
            }

            <Table>
                <Table.Head>
                    <Table.Cell>Название</Table.Cell>
                    <Table.Cell>Контрольная сумма</Table.Cell>
                    <Table.Cell>Размер</Table.Cell>
                </Table.Head>
                {data.length > 0 && data.map(item => (
                    <>
                        <Table.Row key={item.hash}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.hash}</Table.Cell>
                            <Table.Cell>{item.size}</Table.Cell>
                            <span
                                className='remove'
                                onClick={() => removeData(item.hash || '')}
                            >
                                <img
                                    alt=''
                                    src="../assets/trash.svg"
                                    width="25"
                                />
                            </span>
                        </Table.Row>
                    </>
                ))}
            </Table>
        </div>
    );
}

export default App;
