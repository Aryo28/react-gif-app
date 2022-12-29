import {useState} from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target:{value}}) => {
        setInputValue(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length<=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}> 
            <input
                type="text"
                placeholder="Search.."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
