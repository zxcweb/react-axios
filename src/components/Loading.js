import React from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

function Loading(props){
  let display = 'none';
  if(props.loading){
    display = 'flex';
  }else{
    display = 'none';
  }
  return (
    <div style={{...style,display}}>
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  )
}
const style = {
  position:'fixed',
  top:'0',
  left:'0',
  right:'0',
  bottom:'0',
  width:'100%',
  height:'100%',
  background:'rgba(0,0,0,.5)',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'#fff'
}
export default connect(
  (state)=>{
    return {
      loading:state.loading
    }
  }
)(Loading)