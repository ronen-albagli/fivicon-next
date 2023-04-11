import styled from 'styled-components';
import { AppHead } from './head';
import { CodeBlockProps } from './types';

export const CodeBlock = ({ code, onCopy }: CodeBlockProps) => {
  return (
    <>
      <PreCode>
        <code>{code}</code>
        <CoptWrapper onClick={onCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-duplicate"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 16H5a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v1M9 20h10a1 1 0 001-1V9a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1z"
            />
          </svg>
        </CoptWrapper>
      </PreCode>
    </>
  );
};

const PreCode = styled.pre`
  position: relative;
  background-color: #1e1e1e;
  padding: 16px 12px;
  border-radius: 4px;
  color: #b2b2b2;
  /* margin: 12px 0px; */
  width: 100%;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  code {
    @media only screen and (max-width: 767px) {
      width: 90%;
      overflow-x: scroll;
    }
  }
`;

const CoptWrapper = styled.div`
  /* position: absolute; */
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: end;
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
  }
`;
