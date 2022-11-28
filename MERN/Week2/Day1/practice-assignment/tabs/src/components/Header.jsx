import React, {useState} from 'react'
import './style.css'

const Header = (props) => {
    const [tab , setTab]=useState(props.tab1)
    const ontab = (e,value)=>{
        console.log(value);
        if (value===props.tab1){
            return <div>
                {setTab(props.tab1)}
                </div>
                
        }
        else if (value===props.tab2){
            return <div>
            {setTab(props.tab2)}
            </div>
        }
        else{
            {setTab(props.tab3)}

        }

    }
    return (
    <div>
        <div className='tab'>
            <button onClick={(e)=>ontab(e,props.tab1)}>Tab 1</button>
            <button onClick={(e)=>ontab(e,props.tab2)}>Tab 2</button>
            <button onClick={(e)=>ontab(e,props.tab3)}>Tab 3</button>
        </div>


        <div style={{border:'2px solid black',height:'200px',width:'600px',margin:'100px auto'}}>
            {tab.map((el)=>{return <p>{el}</p> })}
        </div>
</div>
  )
}

export default Header