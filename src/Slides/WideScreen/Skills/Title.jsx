import React, {Component} from "react";
import styled from "styled-components";
import device from "../../../Assets/Responsive/breakpoints.js";

const Title = styled.div.attrs({
    style: ({ scrollPercent }) => ({
        transform: `translateX(${(scrollPercent) * 5.5}%)`,
    }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:5%;
  left:-15%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

class SkillsTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0,
            scrollHeight: 0,
            scrollPercent: 0,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
        this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
        const maxlimit = (documentElement.clientHeight * 180) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= maxlimit + 3) {
            sp -= minlimit;
            this.setState({ scrollPercent: sp });
        }
    }

    render() {
        const { scrollPercent } = this.state;
        return (
            <Title scrollPercent={scrollPercent}>SKILLS</Title>
        );
    }
}

export default SkillsTitle;
