"use client"
import { useState } from "react";
//Styles
import styles from "./Modal.module.css"
//Icons
import { IoIosClose } from "react-icons/io";

export default function Modal({isShowModal, setIsShowModal}) {
    
    const [domainData, setDomainData] = useState({
        domain:'',
        status:'',
        active:false,
    })

    const modalHandler = (e) => {
        const {name,value} = e.target
        setDomainData(prev => ({
            ...prev,
            [name] : name === "active" ? value === "True" : value
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setIsShowModal(false)
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
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="status">Status</label>
                    <select name="status"  onChange={modalHandler} value={domainData.status}>
                        <option value="1">pending</option>
                        <option value="2">verified</option>
                        <option value="3">rejected</option>
                    </select>
                </div >
                <div className={styles.inputs}>
                    <label htmlFor="active">Active</label>
                    <select name="active" onChange={modalHandler} value={domainData.active ? "True" : "False"}>
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => {setIsShowModal(false)}} className={styles.cancel}>Cancel</button>
                    <button type="submit" className={styles.submit}>Create</button>
                </div>
            </form>
        </div>
  );
}
