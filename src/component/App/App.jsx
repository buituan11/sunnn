import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/menu.jsx';
import Profile from '../Profile/profile.jsx';
import Cake from '../Cake/cake.jsx';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
        	render: 0

        }
    }
	activeMenu = (e, val) =>{
		let menu = document.getElementsByClassName('menu');
		for (var i = 0; i < menu.length; i++) {
			menu[i].id = "";
		}
		e.target.id = "active";
		this.setState({render: val});
	}
	renderMenu = () => {
		if (this.state.render === 2)
			return (<Menu/>);
		if (this.state.render === 1)
			return (<Profile/>);
		if (this.state.render === 0)
			return (<Cake/>);
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
	warning = () =>{
        alert("Sử dụng phương án gọi điện thoại cho tổ tư vấn :3");
    }
    renderRemind = () =>{
        return (
            <div className="container-fluid">
                <button className="remind" data-toggle="modal" data-target="#remindEnglish">                {/*profile.css*/}
                    <i className="fas fa-exclamation"/>
                </button>
                <div className="modal fade" id="remindEnglish" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Hint</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Trả lời đúng các câu hỏi để có thể nhận phần thưởng bonus nhaaa</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" 
                                onClick={()=> this.warning()}>
                                    Yesn't
                        </button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Yes</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
	componentDidMount() {
		if (typeof(Storage) !== 'undefined'){
			localStorage.clear();
			localStorage.setItem('color', JSON.stringify([]));
			localStorage.setItem('stuff', JSON.stringify([]));
			localStorage.setItem('cake', JSON.stringify([]));
			localStorage.setItem('candle', "https://res.cloudinary.com/buituan/image/upload/v1570613855/Hpbd/fire.png");
		}else {
			alert('Khong ho tro');
		}
	}
    render() {
        return (
             <div className="App">
		        <header>
		      		{/*<img src="https://res.cloudinary.com/buituan/image/upload/v1568684378/Hpbd/a.jpg" alt=""/>*/}
		      		<ul>
			      		<li className="menu" id="active" onClick={(e)=> this.activeMenu(e,0)}>Cake</li>
			      		<li className="menu" id="" onClick={(e)=> this.activeMenu(e,1)}>Question</li>
			      		<li className="menu" id="" onClick={(e)=> this.activeMenu(e,2)}>Memories</li>
			      	</ul>
		        </header>
		        { this.renderMenu() }
		        { this.state.render === 1? this.renderRemind() : null}
		  </div>
        );
    }
}

export default App;

