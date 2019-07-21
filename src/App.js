import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      persons: {
        name:""
      },
      input:""
    };
  }
  componentDidMount() {
    axios.get("http://5d11aebd84e906001457641a.mockapi.io/test").then(res => {
      this.setState({
        items: res.data
      });
    });
  }
  handleDelete = e => {
    if (window.confirm("Are you sure ?")) {
      axios
        .delete(`http://5d11aebd84e906001457641a.mockapi.io/test/${e}`)
        const del=this.state.items.splice(e);
        this.setState({
          items:del
        })
    }
  };
  changeHandler = e => { 
    this.setState({
      persons:{
       [e.target.name]:e.target.value
      }
    });
    console.log(this.state);
  };
  handleinput=e=>{
    
  }
  handleEdit=e=>{
  
  }
  submitHandler = e => {
    e.preventDefault();
    axios.post("http://5d11aebd84e906001457641a.mockapi.io/test", this.state.persons);
    this.setState({
      items:[...this.state.items,this.state.persons]
    })
    console.log(this.state.persons);
  };
  render() {
    this.componentDidMount();
    return (
      <div>
        <button type="submit" className="btn btn-primary">
          <a href="#form">AddBooks</a>
        </button>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.avatar} />
                  </td>
                  <td>
                    <tr>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={this.handleDelete.bind(this, item.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={this.handleEdit.bind(this,this.item)}>
                      Edit
                    </button>
                  </td>
                  </tr>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container">
          <form id="form" onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>Enter the name author</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={this.changeHandler}
              />
            </div>
            {/* <div className="form-group">
    <label>Upload_Image</label>
    <input type="file" className="form-control" name="avatar"  onChange={this.changeHandler}></input>
  </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
