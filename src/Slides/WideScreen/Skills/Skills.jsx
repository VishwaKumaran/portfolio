import React, { Component } from 'react';
import styled from 'styled-components';
import SkillsTitle from "./Title.jsx";
import SkillsContent from "./Content.jsx";

const Container = styled.div`
    height: 100vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsContent/>
      </Container>
    );
  }
}

export default Skills;
