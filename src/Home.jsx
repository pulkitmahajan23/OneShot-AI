import './App.css';
import React from 'react';  
import ReactTable from "react-table";  

class Home extends React.Component {  
    render() {  
       const data = [{  
            id: '01',
            name: 'IIT',
            state: 'Maharashtra',
            no: '900' 
          },{  
            id: '02',
            name: 'VIT',
            state: 'Tamil Nadu',
            no: '6000'   
           },{  
            id: '03',
            name: 'NIT',
            state: 'West Bengal',
            no: '2500'     
           }]  
       const columns = [{  
         Header: 'Id',  
         accessor: 'id'  
         },{  
         Header: 'Name',  
         accessor: 'name'  
         },{  
            Header: 'State',  
            accessor: 'state'  
        },{  
            Header: 'No of Students',  
            accessor: 'no'  
        }]  
      return (  
            <div>  
                <ReactTable  
                    data={data}  
                    columns={columns}  
                    defaultPageSize = {2}  
                    pageSizeOptions = {[2,4, 6]}  
                />  
            </div>        
      )  
    }  
  }  

export default Home;
