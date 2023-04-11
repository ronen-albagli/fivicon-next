import { useEffect, useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { fontSizes, fontWeights } from './texts';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'code-block'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'codeblock',
  'code',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'code-block',
];

export const TextInput = ({
  placeholder,
  color,
  borderVisible,
  size = fontSizes.medium,
  onChange = () => {},
  value = '',
  weight = fontWeights.regular,
  onFocus = () => {},
  onBlur = () => {},
}: any) => {
  return (
    <Input
      onBlur={onBlur}
      onFocus={onFocus}
      tabIndex="1"
      color={color}
      borderVisible={borderVisible}
      value={value}
      onChange={onChange}
      size={size}
      weight={weight}
      placeholder={placeholder}
    />
  );
};

export const TextAreaInput = ({
  placeholder,
  color,
  size = fontSizes.medium,
  weight = fontWeights.regular,
  onChange = () => {},
  value = '',
  isAdvance = false,
  onBlur = () => {},
}: any) => {
  const [inputValue, setValue] = useState(value);

  const handleInputChanged = (e: any) => {
    setValue(e);
  };

  useEffect(() => onChange(inputValue), [inputValue]);

  return (
    <TextContainer>
      {isAdvance ? (
        <></>
      ) : (
        // <ReactQuill
        //   modules={modules}
        //   formats={formats}
        //   placeholder={placeholder}
        //   onBlur={onBlur}
        //   value={inputValue}
        //   onChange={handleInputChanged}
        // />
        <InputArea
          onBlur={onBlur}
          advance={isAdvance}
          color={color}
          size={size}
          weight={weight}
          value={inputValue}
          onChange={handleInputChanged}
          placeholder={placeholder}
        />
      )}
    </TextContainer>
  );
};

const TextContainer = styled.div<any>`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .ql-toolbar {
    border: none;
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 2;
  }

  .ql-editor {
    // margin-top: 30px;
  }

  .ql-container {
    border: none;
    overflow-y: scroll;
    position: relative;
    top: 36px;
  }

  .ql-underline {
    svg {
      opacity: 0;
      z-index: -1;
    }

    &:before {
      content: '';
      height: 17px;
      width: 15px !important;
      display: block;
      background-size: cover;
    }

    &.ql-active {
      &:before {
      }
    }
  }
`;

const Input = styled.input<any>`
      font-family: inherit;
      font-weight: ${(props) => props.weight || 'inherit'};
      font-size: ${(props) => props.size || 'inherit'};
      color ${(props) => props.color || 'inherit'};
      background-color: transparent;
      border:none;
      outline:none;
      ${({ borderVisible }) =>
        borderVisible &&
        css`
          border-bottom: 1px solid black;
        `}
  `;

const InputArea = styled.textarea<any>`
      font-family: inherit;
      font-weight: ${(props) => props.weight || 'inherit'};
      font-size: ${(props) => props.size || 'inherit'};
      color ${(props) => props.color || 'inherit'};
      width: 100%;
      border:none;
      outline:none;
      resize:none;
  `;
