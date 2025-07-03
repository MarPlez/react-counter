import React, { useState } from 'react';
import Container from './components/container';
import Button from './components/button';
import Counter from './components/counter';

function DecreaseButton({ Decrease }) {
  return <Button onClick={Decrease}>-</Button>;
}

class IncreaseButton extends React.Component {
  render() {
    return <Button onClick={this.props.Increase}>+</Button>;
  }
}

function App() {
  const [number, setNumber] = useState(0);

  const plus = () => setNumber(number => number + 1);
  const minus = () => setNumber(number => number - 1);

  return (
    <Container>
      <div>
        <Counter>{number}</Counter>
        <DecreaseButton Decrease={minus} />
        <IncreaseButton Increase={plus} />
      </div>
    </Container>
  );
}

export default App;