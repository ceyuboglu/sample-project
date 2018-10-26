import React, {Component} from 'react';
import { VictoryPie } from 'victory';
import {connect} from "react-redux";
class Chartcontainer extends Component {
    render() {
        const samplearr = [];
        const { selectedusers, userPosts, users } = this.props.users;
        // eslint-disable-next-line
        selectedusers.map((selecteduser) => {
            const count = userPosts.filter(user => user.userId === selecteduser).length;
            const name = users.filter(user => user.id === selecteduser)[0].name;
            samplearr.push({x:name,y:count});
        });
        return (
            <div className='Chartcontainer'>
                <h2>Posts Percentage</h2>
                <svg viewBox="0 0 450 450" style={{width:"100%", height:"90%",display: "inline-block"}}>
                    <VictoryPie
                        style={{
                            labels: { fill: "blue", fontSize: 18, fontWeight: "bold", margin:10}
                        }}
                        padAngle={2}
                        standalone={false}
                        innerRadius={20}
                        labelRadius={187}
                        responsive={false}
                        data={samplearr}
                        colorScale="qualitative"
                    />
                </svg>
            </div>
        );
    }
}
const mapStateToProps = ({users}) => {
    return{
        users
    }
};

export default connect(mapStateToProps)(Chartcontainer);
