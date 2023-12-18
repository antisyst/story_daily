import styled from "styled-components";
import { FaHeart } from "react-icons/fa";


const IntroBase = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    flex-direction: column;
    position: fixed;
    top: 0;
    background: var(--color-black);
    animation: IntroAnim 2s ease 1s 1 normal forwards;

    .intro_symbol {
        animation: LogoAnim 2s ease 0.8s 1 normal forwards;
        color: var(--color-main);
        font-size: 30px;
    }
`

const Intro = () => {
  return (
    <IntroBase>
        <FaHeart className="intro_symbol"/>
    </IntroBase>
  )
}

export default Intro;