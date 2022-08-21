import React, { FC } from 'react';
import { VscChromeClose } from "react-icons/vsc";

import ModalContext from '../../context/ModalContext';
import { useForm } from '../../utils/useForm';
import "./ContactMe.scss"

interface Form{
  name: string;
  email: string;
  message: string;
}

interface Errors{
  name?: string;
  email?: string;
  message?: string;
}

const initialForm : Form = {
  name: "",
  email: "",
  message: "",
};

const ContactMe: FC = () => {
    const validationForm = (form : Form) => {
        let errors : Errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let regexComments = /^.{1,255}$/;
      
        if(!form.name.trim()){
          errors.name = 'Your name is required.';
        }
        else if(!regexName.test(form.name.trim())){
          errors.name = 'Your name is not valid, try again.';
        }
      
        if(!form.email.trim()){
          errors.email = 'Your email is required.';
        }
        else if(!regexEmail.test(form.email.trim())){
          errors.email = 'Your email is not valid, try again.';
        }
      
        if(!form.message.trim()){
          errors.message = 'Your message is required.';
        }
        else if(!regexComments.test(form.message.trim())){
          errors.message = 'Your message must be less than 255 characters.';
        }
      
        return errors;
    };
    const { 
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleBlur,
        handleChange,
        resetForm
    } = useForm(initialForm, validationForm);

    return (
        <ModalContext.Consumer>
            { ModalContext => {
                const handleClose = () => {
                    ModalContext.handleContact();
                    resetForm();
                };
                response?.code === "success" && setTimeout(() => { 
                    ModalContext.handleContact(); 
                    resetForm(); 
                }, 2000);

                return (<>
                    <div className={`background ${ModalContext.showModal ? "background__visible" : "background__invisible"}`} style={{zIndex:16}}/>
                    <div className={`modal ${ModalContext.showModal ? "modal__visible" : "modal__invisible"}`} style={{zIndex:17}}>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="form">
                            <div className='form__header'>
                                <VscChromeClose onClick={handleClose}/>
                            </div>
                            <div className='form__body'>
                                <div className='form__body__title'>Let's keep in touch!</div>
                                <div className='mb-5'>
                                    {loading && <div className='form__body__info dark:text-gray-300'>Please wait...</div>}
                                    {response && <div className={`form__body__info ${response.code === "success" ? "text-green-400" : "text-red-500"}`}>{response.message}</div>}
                                </div>
                                <input className='form__body__input' type="text" name="name" placeholder="Your Name" onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.name} required />
                                <div className='form__body__error'>{errors.name && errors.name}</div>
                                <input className='form__body__input' type="text" name="email" placeholder="Your Email" onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.email} required/>
                                <div className='form__body__error'>{errors.email && errors.email}</div>
                                <input className='form__body__input' placeholder="Let me know how can I help you..."  name="message"  onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} onBlur={(e: React.FormEvent<HTMLInputElement>) => handleBlur(e)} value={form.message} required/>
                                <div className='form__body__error'>{errors.message && errors.message}</div>
                                <button className='form__body__button' type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </>)}
            }
        </ModalContext.Consumer>
    )
}

export default ContactMe;