import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './Name.jsx';
import Job from './Job.jsx';
import {firstName, jobName} from "../../../Constants/constants.jsx";

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
`;

class Title extends Component {
  render() {
    return (
      <Container>
        <Name text={firstName} fontFam="Valencia" timeDelay={500} />
        <br />
        <Job text={jobName} fontFam="AvenirRoman" timeDelay={1300} />
      </Container>
    );
  }
}

export default Title;
