import React, {FC, useCallback} from 'react';
import './index.css';

export const Input: FC<{ onChange: (value: any) => void }> = ({ onChange }) => {

    const handleChange = useCallback((event: any) => {
        onChange(event)
    }, [onChange]);

    return (
        <div className="input_container">
            <input
                name="file"
                type="file"
                id="input_file"
                onChange={handleChange}
            />
            <label htmlFor="input_file" className="label">
                <span className="icon">
                    <img
                        alt=''
                        src="../assets/add-file.svg"
                        width="25"
                    />
                </span>
                <span className="text">Выберите файл</span>
            </label>
        </div>
    )
}
