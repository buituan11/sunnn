import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            ans: 0,
            disable: false
        }
    }

    pushStuff = (c) =>{
        let stuff = JSON.parse(localStorage.getItem("stuff"));
        let index = stuff.indexOf(c);
        if (index === -1){
            stuff.push(c);
        }
        localStorage.setItem("stuff", JSON.stringify(stuff));
    }
    
    selectAns = (inc, key) =>{
        let ans = this.state.ans;
        if (key === 1){
            this.setState({ ans: 5 });
        }else {
            ans++;
            if (ans > 4) ans = 1;
            this.setState({ ans });
        }
    }

    renderProfile = (name, sex, age, zodiac, interest, c) => {
    	return(
    		<div className="col-lg-6 col-12">
                <div className="profile-item">
                    <div className="duck" onClick={()=>this.selectAns(5,1)}>
                        <img src="https://res.cloudinary.com/buituan/image/upload/v1587358329/Hpbd/Pngtree_hand_drawn_penguin_cute_penguin_3821841.png" alt=""/>
                    </div>
        			<p>Câu 1: Chọn đáp án đúng trong các đáp án sau</p>
        			<ul>
        				<p>Ai yêu Thái Hà nào?</p>
        				{ interest.map((item,key) => <li key={key} onClick={()=>this.selectAns(0,0)} style={{cursor:"pointer"}}>{ item }</li>) }
        			</ul>
                    { this.state.ans === 5 && 
                        <div>
                            <div class="alert alert-success" role="alert">
                                Thật ra không đáp án nào đúng cả <br/> Vì tất cả mọi người đều yêu Thái Hà 	&lt;3 &lt;3 &lt;3 <br/> Đây là lớp bánh đầu tiên. <br/> Ấn và kiểm tra phần Cake xem :3
                            </div>
                            <div id={c} onClick={()=> this.pushStuff(c)}></div>
                        </div>
                    }
                    { this.state.ans === 1 &&
                        <div class="alert alert-danger" role="alert">
                            Đáp án sai rùi nha :( :(
                        </div>
                    }
                    { this.state.ans === 2 &&
                        <div class="alert alert-danger" role="alert">
                            Đáp án này cũng sai rùi nha :( :(
                        </div>
                    }
                    { this.state.ans === 3 &&
                        <div class="alert alert-danger" role="alert">
                            Đáp án cũng sai lun :( :(
                        </div>
                    }
                    { this.state.ans === 4 &&
                        <div class="alert alert-danger" role="alert">
                            Đáp án sai nốt nha :( :(
                        </div>
                    }
                </div>
    		</div>
    	);
    }

    inputAns = (e) =>{
        // console.log(e.target.value);
        if (e.target.value === "19992004"){
            this.setState({ disable: true })
        }
    }

    render() {
        return (
            <div>
    			<div className="profile-tab">
    				<div className="aa container-fluid">
                        <div className="row">
                            { this.renderProfile('AA', 'Nam', '18', 'AAA', ["Tecers","BMH","Bố mẹ","Các chú cá"],"stuff-a") }
                            {/* { this.renderProfile('BB', 'Nu', '18', 'BBB', [1,2,3,4],"stuff-b") } */}
                            <div className="col-lg-6 col-12">
                                <div className="profile-item">
                                    <p>Câu 2: Nhập mã OTP</p>
                                    <p>Tiếng quạ réo vong hồn đã ngân lên, Thái Hà đã sẵn sàng chưa?
                                    Thử thách của bạn là nhảy liên tục 30s bài "Quạ réo vong hồn", quay lại clip và reply vào mail cho chúng tôi. Sau khi kiểm duyệt xong chúng tôi sẽ gửi bạn một mã OPT, điền mã đó vào ô dưới đây bạn sẽ giải được câu hỏi:</p>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="OTP code" onChange={(e)=>this.inputAns(e)} disabled={this.state.disable}/>
                                    </div>
                                    { this.state.disable && 
                                        <div>
                                            <div class="alert alert-success" role="alert">
                                                Đúng rùi, đây là phần thưởng <br/> Lớp bánh thứ 2. <br/> Ấn và kiểm tra phần Cake xem :3
                                            </div>
                                            <div id="stuff-b" onClick={()=> this.pushStuff("stuff-b")}></div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

    			</div>            
                
            </div>
        );
    }
}
export default Profile;



