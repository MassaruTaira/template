import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
