import { createContext } from 'react';

const defaultValue = {
    scroll: true,
    showModal: false,
    handleContact: () => {}
}

const ModalContext = createContext(defaultValue); 
export default ModalContext;