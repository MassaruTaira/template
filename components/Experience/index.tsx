import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="6 years" description="of experience" />

      <section>
        <ExperienceItem
          year="2022"
          title="Dev Front-end and Back-end"
          description="I worked on the automation project developing the user and machine interaction platform."
        />
        <ExperienceItem
          year="2021"
          title="Software Tester"
          description="I worked on the management and organization project of a factory via website, testing and locating possible bugs in the system."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-end and Back-end"
          description="I worked on the automation project developing the user and machine interaction platform."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-end and Back-end"
          description="I worked on the automation project developing the user and machine interaction platform."
        />
      </section>
    </Container>
  );
}

export default Experience;
