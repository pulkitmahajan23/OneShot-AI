import React from 'react';
import Plot from 'react-plotly.js';

class Dashboard extends React.Component {
    render() {
        return (
          
            <Plot
                data={[
                    {
                        values: [2, 4, 3],
                        type: "pie",
                        labels: ["Maharashtra", "Tamil Nadu", "West Bengal"],
                        textinfo: "label+percent",
                        textposition: "outside",
                        automargin: true
                    },
                ]}
                layout={ {width: 400, height: 400, margin: {"t": 0, "b": 0, "l": 0, "r": 0}, title: 'State'} }
            />
        );
      }
}



export default Dashboard;