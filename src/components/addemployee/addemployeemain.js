import React, {Component} from "react";

class AddEmployeeMain extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);

    this.state = {
      empName:"",
      empWeight:"",
      postStatus:"",
      token:"",
    }
  }

  handleSubmit(event) {
    const self = this;
      event.preventDefault();
      fetch('http://localhost:8000/addnewemployee', {
          method:'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'

          },
          body:JSON.stringify({
            empName: this.state.empName,
            empPass: this.state.empPass
          })
      }).then(function(res){
        return res.json();
      }).then(function(data){
        self.setState({token:data.token});
        self.setState({postStatus:data.message});
        //localStorage is browser object. allows upto 4mb Axle supposes
        localStorage.setItem('token', self.state.token);

      }).catch(err=>console.log(err))

    }

    handleFieldChange(event) {
        this.setState({
          [event.target.name]:event.target.value
        })
      }


    render(){
        return(
            <main>
              <h2>Add A New Employee</h2>

              <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
                <input type="text" name="empName" onChange={this.handleFieldChange}/>
            </label>
          </div>
          <div>
            <label>
              Password:
                <input type="text" name="empPass" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <span>Created is {this.state.postStatus}</span>
          </div>
        </form>

            </main>
        );
    }
}

export default AddEmployeeMain;
