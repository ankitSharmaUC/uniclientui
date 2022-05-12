import React, { Component } from 'react'
import TenantService from '../services/TenantService';

export default class CreateTenantComponent extends Component {
     constructor(props) {
    super(props);
    this.state = {code: '', name:''};
    this.changeTenantCodeHandler=this.changeTenantCodeHandler.bind(this);
    this.changeTenantNameHandler=this.changeTenantNameHandler.bind(this);
    this.saveTenant=this.saveTenant.bind(this);
  }

changeTenantNameHandler=(event)=>{
    this.setState({name:event.target.value})
}
changeTenantCodeHandler=(event)=>{
    this.setState({code:event.target.value})
}
saveTenant=(e)=>{
    e.preventDefault();
    let tenant = {code:this.state.code, name:this.state.name};
    console.log(JSON.stringify(tenant));
    TenantService.createTenant(tenant).then(res=>{
        this.props.history.push("/");
    })
}
  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                      <h3>Add Tenant</h3>
                      <div className='card-body'>
                          <form>
                              <div className='form-group'>
                                  <label>Tenant Code:</label>
                                  <input type='text' placeholder='Tenant Code' name='code' className='form-control' value={this.state.code} onChange={this.changeTenantCodeHandler}></input>
                              </div>
                              <div className='form-group'>
                                  <label>Tenant Name:</label>
                                  <input type='text' placeholder='Tenant Name' name='name' className='form-control' value={this.state.name} onChange={this.changeTenantNameHandler}></input>
                              </div>
                              <button className='btn btn-success' onClick={this.saveTenant}>Save</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
