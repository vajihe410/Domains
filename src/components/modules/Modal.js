"use client"
import { useState } from "react";
//Styles
import styles from "./Modal.module.css"
//Icons
import { IoIosClose } from "react-icons/io";
//Functions
import { ValidateDomainForm } from "@/utils/validation";

export default function Modal({isShowModal, setIsShowModal}) {
    
    const [domainData, setDomainData] = useState({
        domain:'',
        status:'',
        active:false,
    })
    const [errors,setErrors] = useState({})
    const modalHandler = (e) => {
        const {name,value} = e.target
        setDomainData(prev => ({
            ...prev,
            [name] : name === "active" ? value === "True" : value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const {isValid, errors} = ValidateDomainForm(domainData)
        if(!isValid){
            setErrors(errors)
        }
        else{
            setIsShowModal(false) 
            console.log("created")
        }
    }
  return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p>Add Domain</p>
                <button onClick={() => setIsShowModal(false)}><IoIosClose /></button>
            </div>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.inputs}>
                    <label htmlFor="domain">Domian</label>
                    <input placeholder="www.example.com" name="domain" type="text" value={domainData.domain} onChange={modalHandler}/>
                    {errors.domain && <p>{errors.domain}</p>}
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="status">Status</label>
                    <select name="status"  onChange={modalHandler} value={domainData.status}>
                        <option value="">select status</option>
                        <option value="1">pending</option>
                        <option value="2">verified</option>
                        <option value="3">rejected</option>
                    </select>
                    {errors.domain && <p>{errors.status}</p>}
                </div >

                <div className={styles.inputs}>
                    <label htmlFor="active">Active</label>
                    <select name="active" onChange={modalHandler} value={domainData.active ? "True" : "False"}>
                        <option>True</option>
                        <option>False</option>
                    </select>
                    {errors.domain && <p>{errors.active}</p>}
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={() => {setIsShowModal(false)}} className={styles.cancel}>Cancel</button>
                    <button type="submit" className={styles.submit}>Create</button>
                </div>
            </form>
        </div>
  );
}
