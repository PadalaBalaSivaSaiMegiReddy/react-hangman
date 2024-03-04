import React from 'react'


const HEAD=(<div style={{height:"60px",width:"60px",borderRadius:"100%",position:"absolute",border:"10px solid black",top:"40px",right:"-25px"}}/>)

const BODY=(<div style={{width:"10px",height:"100px",background:"black",position:"absolute",top:"95px",right:"0"}}/>)

const RIGHT_ARM=(<div style={{width:"100px",height:"10px",background:"black",position:"absolute",top:"125px",right:"-95px",rotate:"-30deg",transformOrigin:"left bottom"}}/>)


const LEFT_ARM=(<div style={{width:"100px",height:"10px",background:"black",position:"absolute",top:"72px",right:"-5px",rotate:"30deg",transformOrigin:"left bottom"}}/>)

const RIGHT_LEG=(<div style={{width:"100px",height:"10px",background:"black",position:"absolute",top:"186px",right:"-90px",rotate:"60deg",transformOrigin:"left bottom"}}/>)

const LEFT_LEG=(<div style={{width:"100px",height:"10px",background:"black",position:"absolute",top:"186px",right:"0px",rotate:"-60deg",transformOrigin:"right bottom"}}/>)


export default function HangmanDrawing() {
  return (
    

    <div style={{position:"relative"}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
                <div style={{height:"50px",width:"10px",background:"black",position:"absolute",right:"0px",top:"0px"}}/>

        <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}}/>
        

        <div style={{height:"400px",width:"10px",background:"black",marginLeft:"120px"}}/>
        <div style={{height:"10px",width:"250px",background:"black"}}/>
    </div>
  )
}
