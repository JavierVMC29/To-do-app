import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: absolute;
  left: -40px;
  top: 88px;
  :hover {
    cursor: pointer;
  }
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #000;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  left: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  background: #6284dd;
  border-radius: 5px;
`;

interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.Component<any, CheckboxState> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false
    };
  }

  check = (): void => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render(): React.ReactNode {
    const { checked } = this.state;
    return (
      <Container onClick={this.check}>
        <Input type="checkbox" defaultChecked={checked} />
        {checked ? <Checkmark /> : ''}
      </Container>
    );
  }
}

export default Checkbox;
