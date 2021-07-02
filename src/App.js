import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';



const App = () => {
  let InitNum = 0;

  const [num, setNum] = useState(InitNum)

  const incNum = () => {
    setNum(num + 1);
  }

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('cannot decrease than 0');
      setNum(0);
    }

  }

  return (
    <>
      <div className='main_div'>

        <div className='center_div'>
          <h6>
            <Clock />
          </h6>
          <h1> {num} </h1>
          <div className='btn_div'>
            <Tooltip title="Add">
              <Button onClick={incNum} className='btn_green'>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decNum} className='btn_red'>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;