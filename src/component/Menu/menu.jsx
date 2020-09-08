import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state={
        	currdeg: 0
        }
    }
    move = (deg) => {
		let degg = deg + this.state.currdeg;
		this.setState({currdeg: degg});
	}
	pushColor = (c) => {
		if (typeof(Storage) !== 'undefined'){
			let color = JSON.parse(localStorage.getItem("color"));
			let flag = 0;
	            color.map((item) => {
	                if (item === c)
	                    flag = 1;
	            })
	            if (flag === 0)
	                color.push(c);
			localStorage.setItem("color", JSON.stringify(color));
		}else {
			alert("Khong ho tro");
		}
	}
    render() {
        return (
            	<div className="menu-tab">
			       	<div className="slider">
			       		<div className="carousel" style={{transform: "rotateY("+this.state.currdeg+"deg)", transformStyle: 'preserve-3d', transition: "transform 1s"}}>
						  <div className="item a"></div>
						  <div className="item b"></div>
						  <div className="item c"></div>
						  <div className="item d"></div>
						  <div className="item e"> 
						  		<button className="button-color" style={{backgroundColor:"yellow"}} onClick={()=> this.pushColor("yellow")}></button>
						  </div>
						  <div className="item f">
								<button className="button-color" style={{backgroundColor:"#F86B88"}} onClick={()=> this.pushColor('#F86B88')}></button>
						  </div>
						</div>
			       	</div>
			       	<div className="next" onClick={()=>this.move(60)}> <i className="fas fa-chevron-right"/> </div>
					<div className="prev" onClick={()=>this.move(-60)}> <i className="fas fa-chevron-left"/> </div>
		       	</div>
        );
    }
}

export default Menu;
