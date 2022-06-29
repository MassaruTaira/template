import { useRouter } from 'next/router';
import Header from '../../components/Header';
import BannerProject from '../../components/BannerProject';
import { ProjectContainer } from '../../styles/ProjectStyles';

export default function Project() {
    const router = useRouter();
    const {slug} = router.query;

    let project:number = 0;

    switch (slug) {
        case 'project1':
            return (
                <ProjectContainer>
                    <Header />
                    <BannerProject 
                    title= "Project 1"
                    type="text"
                    imgUrl="https://compass-ssl.xbox.com/assets/17/74/17744025-4e9e-4ef1-a62d-e656fce375e3.jpg?n=Elden-Ring_Feature-Image-Priority_1_1248x702.jpg"
                    />
        
                    <main>
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                            text text text text text text text text text text text text text text text text text text {slug}
                        </p>
                        <button type="button">
                            <a href="#">See the project online</a>
                        </button>
                    </main>
                </ProjectContainer>
            )
        case 'project2':
            return (
                <ProjectContainer>
                    <Header />
                    <BannerProject 
                    title= "Project 2"
                    type="Art"
                    imgUrl="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/elden-ring-review.jpg"
                    />
        
                    <main>
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                            text text text text text text text text text text text text text text text text text text {slug}
                        </p>
                        <button type="button">
                            <a href="#">See the project online</a>
                        </button>
                    </main>
                </ProjectContainer>
            )
        case 'project3':
            return (
                <ProjectContainer>
                    <Header />
                    <BannerProject 
                    title= "Project 3"
                    type="Development"
                    imgUrl="https://files.tecnoblog.net/wp-content/uploads/2021/11/elden-ring-00.jpeg"
                    />
        
                    <main>
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                            text text text text text text text text text text text text text text text text text text {slug}
                        </p>
                        <button type="button">
                            <a href="#">See the project online</a>
                        </button>
                    </main>
                </ProjectContainer>
            )
        case 'project4':
            return (
                <ProjectContainer>
                    <Header />
                    <BannerProject 
                    title= "Project 4"
                    type="Art"
                    imgUrl="https://i.pinimg.com/originals/1d/f8/2d/1df82da15d8a835b16175c571b15061f.jpg"
                    />
        
                    <main>
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                            text text text text text text text text text text text text text text text text text text {slug}
                        </p>
                        <button type="button">
                            <a href="#">See the project online</a>
                        </button>
                    </main>
                </ProjectContainer>
            )
    }
}