import React from 'react'
import { decreaseCount, increaseCount } from '../redux/actions/CounterActions'
import { useDispatch, useSelector } from 'react-redux';

const ReduxCounter = () => {
    const dispatch = useDispatch()
    const reduxCount = useSelector((state) => state.counterReducer.count);

  return (
    <div className="redux-counter">
        <div className="card">
          <button>count is {reduxCount}</button>
          <button onClick={() => dispatch(increaseCount(reduxCount))}>
            Increase Count
          </button>
          <button onClick={() => dispatch(decreaseCount(reduxCount))}>
            Decrease Count
          </button>
          <p>This is a React-Redux counter</p>
        </div>
      </div>
  )
}

export default ReduxCounter
