import './App.css';
import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

class Home extends React.Component {  
    render() {  
        const data = [{  
            id: 1,
            name: 'IIT',
            year: 1987,
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
            no: 900,
            course: 'Computer Science, Information Technology, Electrical and Electronics, Mechanical Engineering'
          },{  
            id: 2,
            name: 'VIT',
            year: 1980,
            city: 'Vellore',
            state: 'Tamil Nadu',
            country: 'India',
            no: 6000,
            course: 'Computer Science, Information Technology, Electrical and Electronics, Mechanical Engineering, Biotech Engineering, Aeronautical Engineering'  
           },{  
            id: 3,
            name: 'NIT',
            year: 1975,
            city: 'Allahabad',
            state: 'Uttar Pradesh',
            country: 'India',
            no: 2500,
            course: 'Computer Science, Information Technology, Electrical and Electronics, Biotech Engineering, Aeronautical Engineering'   
           },{  
            id: 4,
            name: 'IIT',
            year: 1989,
            city: 'Kharagpur',
            state: 'West Bengal',
            country: 'India',
            no: 5500,
            course: 'Computer Science, Electrical and Electronics, Mechanical Engineering'  
           },{  
            id: 5,
            name: 'NIT',
            year: 1980,
            city: 'Durgapur',
            state: 'West Bengal',
            country: 'India',
            no: 1500,
            course: 'Computer Science, Information Technology, Electrical and Electronics, Mechanical Engineering, Aeronautical Engineering'  
           },{  
            id: 6,
            name: 'BITS Pilani',
            year: 1995,
            city: 'Pilani',
            state: 'Rajasthan',
            country: 'India',
            no: 2000,
            course: 'Computer Science, Information Technology, Electrical and Electronics, Mechanical Engineering, Biotech Engineering'    
           }]  
       const columns = [{  
         Header: 'Id',  
         accessor: 'id'  
         },{  
         Header: 'Name',  
         accessor: 'name'  
         },{  
            Header: 'Year Founded',  
            accessor: 'year'  
        },{  
            Header: 'City',  
            accessor: 'city'  
        },{  
            Header: 'State',  
            accessor: 'state'  
        },{  
            Header: 'Country',  
            accessor: 'country'  
        },{  
            Header: 'No of Students',  
            accessor: 'no'  
        },{  
            Header: 'Courses',  
            accessor: 'course'  
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