export function ValidateDomainForm(data){
    const {domain, status, active} = data;
    const errors = {}
    const domainRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if(!domain || !domainRegex.test(domain)){
        errors.domain = "invalid domain"
    }
    if(!status){
        errors.status = "invalid status"
    }
    if(!active){
        errors.active = "invalid active"
    }
    const isValid = Object.keys(errors).length === 0

    return {isValid, errors}
}