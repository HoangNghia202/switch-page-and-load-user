import React from "react";
import axios from "axios";
class list extends React.Component {
  state = {
    lsUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("check res >>>", res.data.data);
    this.setState({
      lsUser: res.data.data ? res.data.data : [],
    });
  }

  render() {
    let { list } = this.state;
    console.log("lisuer state render >>>", this.state.lsUser);
    console.log('list user on render >>', list );
    return (
      <>
        <div> This is Lists user page </div>
        <div className="list-contain">
          <table>
            <tbody>
              {this.state.lsUser &&
                this.state.lsUser.length > 0 &&
                this.state.lsUser.map((item, index) => {
                  return (
                    <>
                      <tr >
                        <td style={{border:'1px solid' , borderCollapse:'collapse', textAlign:'left'}}>{index + 1}</td>
                        <td style={{border:'1px solid', textAlign:'left' , borderCollapse:'collapse'}}>
                          {item.first_name} {item.last_name}
                        </td>
                        <td style={{border:'1px solid',  textAlign:'left' , borderCollapse:'collapse'}}>{item.email}</td>
                      </tr>
                      
                    </>
                  );
                })}
            </tbody>
          </table>
          
        </div>
      </>
    );
  }
}

export default list;
