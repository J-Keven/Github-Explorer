import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issue } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/apiClient';

interface RepositoryParams {
  repository: string;
}

interface RepositoryProps {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssueProps {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRespository] = useState<RepositoryProps | null>(null);
  const [issue, setIssue] = useState<IssueProps[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRespository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssue(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={26} />
          <p>Voltar</p>
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues Abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issue>
        {issue.map(item => {
          return (
            <a href={item.html_url} key={item.id}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          );
        })}
      </Issue>
    </>
  );
};

export default Repository;
