"use client"
import { useState } from "react";
//Component
import Modal from "@/modules/Modal";
//Styles
import styles from "./HomePage.module.css"
//Icons
import { IoIosAdd } from "react-icons/io";

export default function HomePage() {
  const [isShowModal, setIsShowModal] = useState(false)

      const showModal = () => {
        setIsShowModal(prev => !prev)
    }
  return (
    <div className={styles.container}>
        <div className={styles.show}>
            <h3>Domain</h3>
            <button onClick={showModal}><IoIosAdd />Add Domain</button>
        </div>
        <div>
          {isShowModal && <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal}/> }
        </div>
  
    </div>
  );
}
