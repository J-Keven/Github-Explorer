import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/apiClient';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    );

    return storageRepositories ? JSON.parse(storageRepositories) : [];
  });

  async function handleAddNewRepo(e: FormEvent<HTMLFormElement>): Promise<any> {
    e.preventDefault();
    if (!repo) {
      return setInputError('Digite o autor/nome do repositório');
    }

    try {
      const repository = await await api.get<Repository>(`repos/${repo}`);
      setNewRepo([repository.data, ...newRepo]);
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca pelo repositório');
    }
    return setRepo('');
  }
  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(newRepo),
    );
  }, [newRepo]);

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddNewRepo}>
        <input
          value={repo}
          onChange={e => setRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {newRepo.map(item => (
          <Link key={item.full_name} to={`/repositories/${item.full_name}`}>
            <img src={item.owner.avatar_url} alt={item.owner.login} />
            <div>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
