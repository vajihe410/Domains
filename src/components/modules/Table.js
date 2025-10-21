import { useEffect, useState } from "react";
//Functions
import { getDomain } from "@/services/domainService";
import { formatDate, showStatus } from "@/utils/helper";
import { applayAllFilters } from "@/utils/filterdomains";
//Styles
import styles from "./Table.module.css"

export default function Table() {
  const [domains, setdomains] = useState([])
  const [search, setSearch] = useState("")
  const [filterActive, setFilterActive] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  useEffect(() => {
    async function fetchData (){
      try {
        const data = await getDomain();
        console.log("Fetched data:", data);
        setdomains(data);
      } catch (err) {
      console.error("Error fetching domains:", err);
      }
    }
    fetchData()
  },[])
  const filterDomains = applayAllFilters(domains.results || [] ,search, filterActive, filterStatus)
  
  const editHandler = () => {

  }
  const deleteHandler = () => {

  }
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <input type="text" placeholder="Search by domain..."  name="search" value={search} onChange={e => setSearch(e.target.value)}/>

        <select name="active" value={filterActive} onChange={e => setFilterActive(e.target.value)}>
          <option value="">All active states</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        <select name="status" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="">All statuses</option>
          <option value="1">pending</option>
          <option value="2">verified</option>
          <option value="3">rejected</option>
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Status</th>
            <th>Active</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterDomains?.map(i => <tr key={i.id}>
            <td>{i.domain}</td>
            <td className={styles[showStatus(i.status)]}>{showStatus(i.status)}</td>
            <td className={i.isActive ? styles.active : styles.inactive}>{i.isActive ? "Active" : "Inactive"}</td>
            <td>{formatDate(i.createdDate)}</td>
            <td>
              <button onClick={editHandler} className={styles.edit}>Edit</button>
              <button onClick={deleteHandler} className={styles.delete}>Delete</button>
            </td>
          </tr>)}
        </tbody> 
      </table>
    </div>
  );
}
