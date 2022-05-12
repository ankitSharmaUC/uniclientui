import axios from "axios";

const TENANT_REST_API_URL = "http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/search?code=testTenant"
const TENANT_REST_API_URL1 = "http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/create"
class TenantService{
    getAllTenants(){
        return axios.get(TENANT_REST_API_URL)
    }

    createTenant(tenant){
        return axios.post(TENANT_REST_API_URL1,tenant)
    }
}

export default new TenantService();