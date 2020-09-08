import React, { Component } from 'react';
import './cake.css';

class Cake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: [],
            stuff: [],
            cake: []
        }
    }

    pushColor = (c) => {
        if (typeof (Storage) !== 'undefined') {
            let color = this.state.color;
            let flag = 0;
            for (var j = 0, length2 = color.length; j < length2; j++) {
                if (color[j] === c) {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0)
                color.push(c);
            localStorage.setItem("color", JSON.stringify(color));
            this.setState({ color });
        } else {
            alert('Khong ho tro localStorage');
        }
    }
    pushStuff = (c, tt) => {
        if (typeof (Storage) !== 'undefined') {
            let stuff = this.state.stuff;
            let flag = 0;
            for (var j = 0, length2 = stuff.length; j < length2; j++) {
                if (stuff[j] === c) {
                    flag++;
                }
            }
            if (flag !== tt)
                stuff.push(c);
            localStorage.setItem("stuff", JSON.stringify(stuff));
            this.setState({ stuff });
        } else {
            alert('Khong ho tro localStorage');
        }
    }
    contactT = () => {
        alert("Sử dụng phương án gọi điện thoại cho tổ tư vấn :3");
    }
    renderHint = () => {
        return (
            <div>
                <button className="question" data-toggle="modal" data-target="#question">               {/*cake.css*/}
                    <i className="fas fa-question" />
                </button>
                <div className="modal fade" id="question" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Hint</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="hint">
                                    <p>Muốn mở quả thì phải làm bánh. Muốn làm bánh thì phải đi kiếm nguyên liệu</p>
                                    <p>Tìm trong Cake, Question, Memories để lấy màu, lấy bánh, lấy nến nha :3</p>
                                    <p>Ví dụ như này</p>
                                    <div className="example container-fluid">
                                        <div className="row">
                                            <div className="col-xl-12 col-12 row">
                                                <button className="col-xl-2 col-2 button-color-eg" style={{ backgroundColor: "#672907" }} onClick={() => this.pushColor("#672907")}></button>
                                                <p className="col-xl-10 col-10">Đây là màu socola. Bấm vào thì nó sẽ hiện màu ở Color - Bấm thử đi nè :3</p>
                                            </div>
                                            <div className="col-xl-12 col-12 row">
                                                <div className="col-xl-3 col-3 stuff-eg"></div>
                                                <p className="col-xl-9 col-9">Đây là tầng bánh. Bấm vào thì nó sẽ hiện bánh ở Stuff</p>
                                            </div>
                                            <p className="col-xl-12 col-12">
                                                Tìm nguyên liệu... ở khắp nơiiii :>
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={() => this.contactT()}>
                                    Cancel
                        </button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Got it  <i className="fas fa-thumbs-up" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderStuff = () => {
        let candle = localStorage.getItem('candle');
        // let stuff = this.state.stuff;
        return (
            <div className="stuff-cake">
                {this.state.stuff.map((item, key) =>
                    item !== 'candle' ?
                        <div key={key} id={item} onClick={() => this.addStuff(item)}></div> :
                        <div key={key} id="stuff-candle" onClick={() => this.addStuff(item)}>
                            <img src={candle} alt="" />
                            <div></div>
                        </div>

                )}
            </div>
        );
    }
    // RENDER CAKE
    renderCake = () => {
        // let cake = this.state.cake;
        let candle = localStorage.getItem('candle');
        return (
            <div className="place">
                {this.state.cake.map((item, key) => {
                    if (typeof (item) === "object") {
                        return (
                            <div key={key} id="top">
                                {item.map((e, key) =>
                                    <div key={key} id="candle">
                                        <img src={candle} alt="" />
                                        <div></div>
                                    </div>
                                )}
                            </div>
                        );
                    }
                    else if (item === "stuff-a") {
                        return (
                            <div key={key} id="a-1">
                                <div id="a-2" style={{ backgroundColor: this.state.cake[key + 1] }}></div>
                            </div>
                        );
                    }
                    else if (item === "stuff-b") {
                        return (
                            <div key={key} id="b-1">
                                <div id="b-2" style={{ backgroundColor: this.state.cake[key + 1] }}></div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
    addStuff = (e) => {
        let cake = this.state.cake;
        let stuff = this.state.stuff;
        console.log(cake.length);
        if (cake.length === 0) {
            if (e === "candle") {
                cake.push([1]);
                console.log(typeof (cake[0]));
                let index = stuff.indexOf("candle");
                stuff.splice(index, 1);
            }
            else
                cake.push(e);
        }
        else if (cake.length < 4) {
            if (typeof (cake[cake.length - 1]) === "object") {
                if (e === "candle") {
                    cake[cake.length - 1].push(1);
                    let index = stuff.indexOf("candle");
                    stuff.splice(index, 1);
                }
                else
                    alert("Cắm nến rồi thì sao để bánh lên được?? :D ??");
            } else {
                if (e === "candle") {
                    cake.push([1]);
                    let index = stuff.indexOf("candle");
                    stuff.splice(index, 1);
                }
                else {
                    if (cake.length === 1 || cake.length === 3)
                        alert("Thêm lớp phủ bánh đã :>");
                    else
                        cake.push(e);
                }
            }
        }
        else if (cake.length >= 4) {
            console.log('aaaaa');
            if (cake.length === 4) {
                if (e === "candle") {
                    cake.push([1]);
                    let index = stuff.indexOf("candle");
                    stuff.splice(index, 1);
                } else alert("Bánh cao quá bị đổ");
            }
            else if (typeof (cake[cake.length - 1]) === "object") {
                if (e === "candle") {
                    cake[cake.length - 1].push(1);
                    let index = stuff.indexOf("candle");
                    stuff.splice(index, 1);
                }
                else
                    alert("Bánh cao quá bị đổ");
            }
        }
        localStorage.setItem("stuff", JSON.stringify(stuff));
        localStorage.setItem("cake", JSON.stringify(cake));
        this.setState({ cake, stuff });
        // console.log(cake);
    }
    addColor = (e) => {
        let cake = this.state.cake;
        if (cake.length === 0) {
            alert("Thêm tầng bánh đã :>");
        } else {
            if (typeof (cake[cake.length - 1]) === "object") {
                alert("Cắm nến rồi thì sao để bánh lên được?? :D ??");
            } else {
                if (cake.length === 1 || cake.length === 3) {
                    cake.push(e);
                } else {
                    cake[cake.length - 1] = e;
                }
            }
        }
        localStorage.setItem("cake", JSON.stringify(cake));
        this.setState({ cake });
        // console.log(cake);
    }
    remake = () => {
        let cake = [];
        localStorage.setItem("cake", JSON.stringify(cake));
        this.setState({ cake });
    }
    renderOpen = () => {
        let done = ["stuff-a", "#672907", "stuff-b", "yellow", [1, 1, 1]];
        let target = "#accept";
        if (done.length !== this.state.cake.length) {
            target = "#deny";
        }
        for (var j = 0, length2 = done.length; j < length2 - 1; j++) {
            if (done[j] !== this.state.cake[j]) {
                target = "#deny";
            }
        }
        return (
            <div className="col-xl-6 col-6">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={target}>
                    Mở khóa <i className="fas fa-birthday-cake" />
                </button>
                <div className="modal fade" id="deny" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Mở khóa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Làm như này để mở khóa :></p>
                                <p>Làm xong ấn lại mở khóa là được</p>
                                <img src="https://res.cloudinary.com/buituan/image/upload/v1571046101/Hpbd/done.jpg" alt="" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="accept" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Mở khóa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ textAlign: "justify" }}>
                                <p style={{ fontWeight: 'bold', textAlign: "center" }}>Chúc mừng sinh nhật Sun Sun :></p>
                                <img src="https://res.cloudinary.com/buituan/image/upload/v1599531738/Hpbd/118963664_315547722852669_7992593607596231017_n.jpg" alt="" style={{ height: '650px' }} />
                                <p>Chúc mừng Sun Sun tuổi mới thật là thông minh, đáng iuu của anh nhóooo.</p>
                                <p>Iu em,
                            <br />Tún
                            </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let color = JSON.parse(localStorage.getItem("color"));
        let stuff = JSON.parse(localStorage.getItem("stuff"));
        let cake = JSON.parse(localStorage.getItem("cake"));
        this.setState({ color, stuff, cake });
    }
    render() {
        let candle = localStorage.getItem('candle');
        return (
            <div className="cake">
                <div className="cake-candle" onClick={() => this.pushStuff('candle', 3)}>
                    <img src={candle} alt="" />
                    <div></div>
                </div>
                {this.renderCake()}
                {this.renderHint()}
                <div className="make container-fluid">
                    <div className="row">
                        <div className="color col-xl-3">
                            <p>Color</p>
                            <div className="color-cake">
                                {this.state.color.map((item, key) =>
                                    <div key={key}
                                        className="color-item"
                                        style={{ backgroundColor: item }}
                                        onClick={() => this.addColor(item)}>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="stuff col-xl-5">
                            <p>Stuff</p>
                            {this.renderStuff()}
                        </div>
                        <div className="col-xl-4 container-fluid btn-cake">
                            <div className="row">
                                <button className="btn btn-danger col-xl-6 col-6" onClick={() => this.remake()}>
                                    Remake(Làm lại) <i className="fas fa-undo" />
                                </button>
                                {this.renderOpen()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cake;
