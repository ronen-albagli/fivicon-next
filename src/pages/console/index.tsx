import styled from 'styled-components';

const Console = () => {
  return <>This is console</>;
};

export const ConsoleLayout = styled.main`
  /* display: flex; */
  display: -webkit-inline-box;
  color: #7b8c9d;
  margin-top: 60px;
`;

export const ConsoleContainer = styled.div`
  background-color: #141a20;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`;

export const Content = styled.section`
  padding: 12px 24px;
`;

export default Console;
