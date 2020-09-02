import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #a8a8b3;
    transition: 0.3s;

    &:hover {
      color: ${shade(0.5, '#a8a8b3')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 20px;
      border: 2px solid #f0f0f0;
    }

    strong {
      font-size: 36px;
      margin-bottom: 20px;
      color: #3d3d4d;
    }

    p {
      color: #737380;
      font-size: 18px;
    }
  }

  ul {
    margin-top: 30px;
    display: flex;
    align-items: center;
    list-style: none;
    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 36px;
        margin-bottom: 20px;
        color: #3d3d4d;
      }

      p {
        color: #6c6c80;
        font-size: 18px;
      }
    }
  }
`;

export const Issue = styled.div`
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
