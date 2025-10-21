"use client"
import { useEffect, useState } from "react";
//Styles
import styles from "./Modal.module.css"
//Icons
import { IoIosClose } from "react-icons/io";
//Functions
import { ValidateDomainForm } from "@/utils/validation";
import { updateDomain } from "@/services/domainService";

export default function UpdateModal({selectDomain,setIsShowUpdateModal}) {
    const [domainData, setDomainData] = useState({
        domain:'',
        status:'',
        active:'',
    })
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState(false)

    useEffect( () => {
        if(selectDomain){
            setDomainData({
                domain:selectDomain.domain || "",
                status:selectDomain?.status.toString() || "",
                active:selectDomain.isActive ? "True" : "False" || "",
            })
        }
    },[selectDomain])

    const modalHandler = (e) => {
        const {name,value} = e.target
        setDomainData(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        const {isValid, errors} = ValidateDomainForm(domainData)
        if(!isValid){
            setErrors(errors)
        }
        else{
          try {
            const updatedData = {
                domain:domainData.domain,
                status:Number(domainData.status),
                isActive: domainData.active === "True"
            }
            const res = await updateDomain(domainData.id , updatedData); 
            console.log("Update domain:", res);
            setSuccess(true);
            // setIsShowModal(false);
        } catch (err) {
            console.error("Error updating domain:", err);
    }
        }
    }
  return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p>Update Domain</p>
                <button onClick={() => setIsShowUpdateModal(false)}><IoIosClose /></button>
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
                    {errors.status && <p>{errors.status}</p>}
                </div >
                <div className={styles.inputs}>
                    <label htmlFor="active">Active</label>
                    <select name="active" onChange={modalHandler} value={domainData.active}>
                        <option value="">select active</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                    {errors.active && <p>{errors.active}</p>}
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={() => {setIsShowUpdateModal(false)}} className={styles.cancel}>Cancel</button>
                    <button type="submit" className={styles.submit}>Update</button>
                </div>
                {success && <p className={styles.success}>updated successfully !!</p>}
            </form>
        </div>
  );
}
