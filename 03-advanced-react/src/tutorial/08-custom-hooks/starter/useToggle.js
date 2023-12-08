import {useState} from 'react'

const useToggle = (temp) => {
    const [value, setValue] = useState(temp);
    const toggle = () => {
        setValue(!value);
    }
    return {value, toggle};
}
export default useToggle;