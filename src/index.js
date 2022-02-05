import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';



class CQ extends React.Component{

	state={
    details:[ {name:"Sagar",location:"Kaithal"},
              {name:"Rahul",location:"Chandigarh"},
              {name:"Rahul KL",location:"Banglore"},
              {name:"Sant",location:"Yammuna Nagar"},
              {name:"Sumit",location:"Chandigarh"},
              {name:"Ritvik",location:"Kaithal"},
              {name:"Amit",location:"Karnal"}
            ]
  };

  arr = this.state.details;

  search = (e) =>{
    let value = e.target.value.trim().toLowerCase();

    if(this.state.value!=""){
      
      let arr2 = this.arr.filter(function(res){
        if(res.name.toLowerCase().indexOf(value) > -1)
          return true;
      }) 

      this.setState({details:arr2});
    }else{
      this.setState({details:this.arr});
    }
    
  }



render(){
		return (
		<>
	
		<input type="text" onKeyUp={this.search} placeholder="Search Your Restaurant" className="serach-box" />

		<table>
		<thead> <th>Name</th><th>Location</th></thead>
		
		<tbody>
		{
			this.state.details.map(function(data){
			 return <tr>
			 <td>{data.name}</td>
			 <td>{data.location}</td>
			 </tr>
		})
		}
		</tbody>
		</table>				

		</>
	)
}
}

ReactDOM.render(
	<CQ />,
	document.getElementById('root')
);
