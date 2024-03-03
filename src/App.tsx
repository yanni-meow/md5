import React, {useState} from 'react';
import { Input } from "./input";
import { Table } from "./table";
import './App.css';

function App() {
    const [data, setData] = useState<Record<string, any>[]>([]);

    return (
        <div className="App">
            <Input />
            <Table>
                <Table.Head>
                    <Table.Cell>a</Table.Cell>
                    <Table.Cell>b</Table.Cell>
                    <Table.Cell>c</Table.Cell>
                </Table.Head>
                {data.length > 0 && data.map(item => (
                    <Table.Row>
                        <Table.Cell>{item.a}</Table.Cell>
                        <Table.Cell>{item.b}</Table.Cell>
                        <Table.Cell>{item.c}</Table.Cell>
                    </Table.Row>
                ))}
            </Table>
        </div>
    );
}

export default App;
