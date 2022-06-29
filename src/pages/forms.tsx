import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import { ProjectsContainer } from '../styles/ProjectsStyles';

const Forms: React.FC = () => {
  return (
    <>
    <Header />
        <main className="container">
            <Form />
        </main>
    </>
  );
}
export default Forms
