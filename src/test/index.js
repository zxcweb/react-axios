import React,{ Component } from 'react';
import * as actions from '../store/actions';

import { connect } from 'react-redux';

class Test extends Component {
  
  componentDidMount(){

  }
  sendTo = (e) =>{
    this.props.dispatch(actions.getMsg())
  }
  render(){
    return (
      <div>
        <button onClick={this.sendTo}>点击请求内容</button>
        <div>
          我是请求的内容：{this.props.msg}
        </div>
      </div>
    )
  }
}
export default connect(
  (state)=>{
    return {
      msg:state.msg
    }
  }
)(Test);