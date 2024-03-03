import React, { useCallback } from "react";
import './index.css';

export const Input = () => {

    const handleChange = useCallback(() => {

    }, []);

    return (
        <div className="input_container">
            <input
                name="file"
                type="file"
                id="input_file"
            />
            <label htmlFor="input_file" className="label">
                <span className="icon">
                    <img
                        src="../assets/add-file.svg"
                        width="25"
                    />
                </span>
                <span className="text">Выберите файл</span>
            </label>
        </div>
    )
}

// <input
//             // accept={accept}
//             className='input'
//             // disabled={disabled}
//             // key={key}
//             // multiple={multiple}
//             // ref={$input}
//             type='file'
//             onChange={handleChange}
//         />