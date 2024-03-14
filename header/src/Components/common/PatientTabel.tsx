import React, { useState, useEffect, useRef } from 'react'

interface RowData {
    // Define your row data structure here
    id: number;
    name: string;
    // ... other fields
}

const PatientTabel = () => {
    const [data, setData] = useState<RowData[]>([
        {
            id: 12340,
            name: "hello"
        },
        {
            id: 12341,
            name: "hi"
        },
        {
            id: 12342,
            name: "bye"
        },
        {
            id: 12343,
            name: "hello World"
        },
        {
            id: 12344,
            name: "Good"
        },
        {
            id: 12345,
            name: "tc"
        },
        {
            id: 12346,
            name: "data"
        },
        {
            id: 12347,
            name: "world"
        }
    ]); // Initialize with dummy data
    const [selectedRow, setSelectedRow] = useState<number | null>(0); // Initially, the first item is selected
    const tableRef = useRef<HTMLTableElement | null>(null); // Ref for the table

    useEffect(() => {
        // Generate dummy data
        setData(Array.from({ length: 8 }, (_, i) => ({ id: i + 1, /* ...other data */ })));
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
            const newIndex = (selectedRow + 1) % data.length;
            setSelectedRow(newIndex);
            scrollIntoView(data[newIndex].id);
        } else if (event.key === 'ArrowUp') {
            const newIndex = (selectedRow - 1 + data.length) % data.length;
            setSelectedRow(newIndex);
            scrollIntoView(data[newIndex].id);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedRow, data]);

    const scrollIntoView = (rowId: number) => {
        const rowElement = tableRef.current?.querySelector(`[data-row-id="${rowId}"]`);
        rowElement?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="overflow-y-auto h-64"> {/* For scrollable table container */}
            <table ref={tableRef} className="w-full">
                <thead>
                    <tr>
                        {/* Define your column headers */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr
                            key={row.id}
                            className={selectedRow === row.id ? 'bg-gray-100' : ''} // Highlight selected row
                        >
                            <div className="my-5">{row.id} - {row.name}</div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PatientTabel