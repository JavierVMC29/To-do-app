import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamily};

  :active,
  :focus {
    outline: none;
    border: none;
  }
`;

interface TitleEditableProps {
  defaultTitle: string;
}
interface TitleEditableState {
  currentTitle: string;
}

class TitleEditable extends React.Component<
  TitleEditableProps,
  TitleEditableState
> {
  constructor(props: TitleEditableProps) {
    super(props);
    const { defaultTitle } = props;
    this.state = {
      currentTitle: defaultTitle
    };
  }

  updateTitle = (): void => {
    const { currentTitle } = this.state;
    console.log(currentTitle);
  };

  render(): React.ReactNode {
    const { currentTitle } = this.state;

    return <Container value={currentTitle} onChange={this.updateTitle} />;
  }
}

export default TitleEditable;
