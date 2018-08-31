import styled from 'styled-components';

const FirstChartStyles = styled.div`

  .line {
    position: relative;
    width: 10px;
    height: 50px;
    border-left: 3px solid red;
    z-index: 1;
  }
  .line::before {
    position: absolute;
    content: "";
    width: 1rem;
    height: 1rem;
    top: 50%;
    left: -100%;
    margin-top: -.5rem;
    margin-left: -.75px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 100;
    border-top: 3px solid red;
    border-right: 3px solid red;
  }

`;

export default FirstChartStyles;