import { useState } from 'react'

const Souba = props => {
  const [state, setState] = useState(props)
  const {name, price} = state;
  return (
    <>
        <div>
          {name}の相場は{price}円です。
        </div>
        <div>
          <button onClick={() => {setState({...state, price: price + 1})}} >+1</button>
          <button onClick={() => {setState({...state, price: price - 1})}} >-1</button>
        </div>
        <div>
          <input value={name} onChange={e => {setState({...state, name:e.target.value })}} />
        </div>
    </>
  )
}

Souba.defaultProps = {
  name: "えび",
  price: 680
}

export default Souba
