import React,{ Component } from 'react';
import * as actions from '../store/actions';
import { Button } from 'antd';

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
        <Button onClick={this.sendTo} type="primary">点击请求内容</Button>
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