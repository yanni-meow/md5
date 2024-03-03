import React from 'react';
// @ts-ignore
import MD5 from "crypto-js/md5";
import { Input, Table } from "./components";
import { useStore } from "./store";
import './App.css';

function App() {
    const data = useStore(state => state.data);
    const updateData = useStore(state => state.updateData);

    const uploadData = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const binary = event.target?.result;
            file.hash = MD5(binary).toString();
            updateData(file)
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className="App">
            <Input onChange={uploadData}/>
            <Table>
                <Table.Head>
                    <Table.Cell>Название</Table.Cell>
                    <Table.Cell>Контрольная сумма</Table.Cell>
                    <Table.Cell>Размер</Table.Cell>
                </Table.Head>
                {data.length > 0 && data.map(item => (
                    <Table.Row key={item.name}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.hash}</Table.Cell>
                        <Table.Cell>{item.size}</Table.Cell>
                    </Table.Row>
                ))}
            </Table>
        </div>
    );
}

export default App;
