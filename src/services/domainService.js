const BASE_URL = "https://domain-danajo.liara.run/api/Domain"

async function createDomain (domainData) {
    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body:JSON.stringify(domainData)
    })
    const data = await res.json()
    return data
}

async function getDomain() {
    const res = await fetch(BASE_URL)
    const data =await res.json()
    return data
}

async function updateDomain (id,domainData) {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:"PUT",
        headers:{ "Content-Type": "application/json"},
        body:JSON.stringify(domainData)
    })
    const data =await res.json()
    return data
}

async function deleteDomain (id) {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE",
    })
    const data =await res.json()
    return data
}
export {createDomain, deleteDomain, updateDomain, getDomain}