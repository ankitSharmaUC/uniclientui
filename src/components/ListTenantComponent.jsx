import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TenantService from '../services/TenantService'

const ListTenantComponent = () => {
    const [tenants, setTenants] = useState([])
	const history = useHistory();

    useEffect(() => {
      TenantService.getAllTenants().then((response)=> {
          setTenants(response.data)
      })
    }, [])


  return (
    <div className='container'>
      <div className='row'>
        <button className='btn btn-primary' onClick={event =>  window.location.href='/create'}>Add Tenant</button>
      </div>
  <div class="row content">
    <div class="col-sm-3 sidenav">
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
    </div>
    <div class="col-sm-6 text-left"> 
      <h2 className = 'text-center'>Tenant List</h2>
                      {tenants.map(
                        tenant=>
                        <table className='table-hover' width = '100%'>
                          <tr>Tenant Code:{tenant.code}</tr>
                          <tr>Tenant Name:{tenant.name}</tr>
                          <tr>Tenant Access Url:{tenant.accessUrl}</tr>
                          <tr>Tenant Created:{tenant.created}</tr>
                        </table>
                    )}
    </div>
    <div class="col-sm-3 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default ListTenantComponent