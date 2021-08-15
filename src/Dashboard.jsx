import './App.css';
import React from "react";
import Chart from "react-apexcharts";

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: {
          series: [6, 5, 6, 5, 3, 3],
          labels: [ "Computer Science", "Information Technology", "Electrical and Electronics", "Mechanical Engineering", "Biotech Engineering", "Aeronautical Engineering"],
          title: {
            text: "Courses",
            align: 'center',
            margin: 20,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '40px',
              fontWeight:  'bold',
              fontFamily: 'Patrick Hand SC',
              color:  '#263238'
            },
        }
        
        }
      };
    }
    render() {
      return (
        <div id="pieChart">
          <Chart
            options={this.state.options}
            series={this.state.options.series}
            type="pie"
            width="50%"
          />
        </div>
      );
    }
  }
export default Dashboard;