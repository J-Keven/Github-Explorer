import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Repository: React.FC = () => {
  const { params } = useRouteMatch();
  return <h2>{params.repository}</h2>;
};

export default Repository;
