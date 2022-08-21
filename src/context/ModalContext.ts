import { createContext, useState } from 'react';

const defaultValue = {
    showModal: false,
    handleContact: () => {}
}

const ModalContext = createContext(defaultValue); 
export default ModalContext;