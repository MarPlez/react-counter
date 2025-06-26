import React, { useState } from 'react';

function DecreaseButton({ Decrease }) {
  return <button onClick={Decrease}>-</button>;
}

class IncreaseButton extends React.Component {
  render() {
    return <button onClick={this.props.Increase}>+</button>;
  }
}

function App() {
  const [number, setNumber] = useState(0);

  const plus = () => setNumber(number => number + 1);
  const minus = () => setNumber(number => number - 1);

  return (
    <div>
      <div>{number}</div>
      <DecreaseButton Decrease={minus} />
      <IncreaseButton Increase={plus} />
    </div>
  );
}

export default App;