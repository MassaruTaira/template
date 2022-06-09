import Header from '../../../../components/Header';
import BannerProject from '../../../../components/BannerProject';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
    return (
        <ProjectContainer>
            <Header />
            <BannerProject 
            title="Project 1"
            type="text"
            imgUrl="https://compass-ssl.xbox.com/assets/17/74/17744025-4e9e-4ef1-a62d-e656fce375e3.jpg?n=Elden-Ring_Feature-Image-Priority_1_1248x702.jpg"
            />

            <main>
                <p>
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                    text text text text text text text text text text text text text text text text text text
                </p>
                <button type="button">
                    <a href="#">See the project online</a>
                </button>
            </main>
        </ProjectContainer>
    )
}