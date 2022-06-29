import React from 'react';
import { ItemContainer } from './styles';

interface ExperienceProps {
  year: string;
  title: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ year, title, description }) => {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
export default ExperienceItem;