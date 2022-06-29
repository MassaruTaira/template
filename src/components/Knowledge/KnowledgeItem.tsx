import { KnowledgeContainer } from './styles';

interface KnowledgeProps {
    title: string;
    icon: React.ReactNode;
}

const KnowledgeItem:React.FC<KnowledgeProps> = ({ title, icon }) => {
    return (
        <KnowledgeContainer>
            <p>{title}</p>
            {icon}
        </KnowledgeContainer>
    )
}
export default KnowledgeItem;