import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;

  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    border: 0;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right-width: 0;
    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    transition: 0.5s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    width: 100%;
    display: flex;
    background: #ffffff;
    border-radius: 8px;
    align-items: center;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      overflow: hidden;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
