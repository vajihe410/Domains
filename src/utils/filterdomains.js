const searchFilter = (domains, search) => {
    if(!search) return domains
    else{
        const result = domains.filter(item => item.domain.toLowerCase().includes(search.toLowerCase()))
        return result
    }
}
const activeFilter = (domains,active) => {
    if(!active) return domains
    else {
     const result = domains.filter(item => String(item.isActive) === String(active))
     return result
    }
}
const statusFilter = (domains,status) => {
    if(!status) return domains
    else {
     const result = domains.filter(item => Number(item.status) === Number(status))
     return result
    }
}
const applayAllFilters = (domains,search, active, states) => {
    let filteredDomain = []
    filteredDomain = searchFilter(domains,search)
    filteredDomain = activeFilter(filteredDomain,active)
    filteredDomain = statusFilter(filteredDomain,states)
    return filteredDomain
}
export {searchFilter, activeFilter, statusFilter, applayAllFilters}