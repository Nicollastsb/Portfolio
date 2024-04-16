import { FigmaLogo, GithubLogo, Link } from "@phosphor-icons/react";
import { FooterLinks, FooterProjectCard, PortfolioContainer, PortfolioContent, PortfolioItemsContent, PortfolioItemsTextContent, PortfolioTitleContent, ProjectCardContent, TecnologiesContent } from "./styles";
import githubblog from '../../assets/githubblog.png'
import todolist from '../../assets/todo.png'
import { useTranslation } from "react-i18next";

interface Project {
    id: string
    title: string
    srcImage: string
    tecnologies: string[]
    description: string
    url: string
    urlFigma: string
    urlGithub: string
}  

export function Portfolio (){
    
    const { t } = useTranslation()
    const listProjects: Project[] = [
        {
            id: "0",
            title: "GitHub blog",
            srcImage: githubblog,
            tecnologies: ["Typescript", "ReactJs"],
            description: "Uma aplicação que utiliza a API do GitHub para buscar issues deste repositório, dados do perfil para exibi-los como um blog.",
            url: "https://nicollastsb.github.io/Github-blog",
            urlFigma: "https://www.figma.com/community/file/1138814951106121051",
            urlGithub: "https://github.com/Nicollastsb/Github-blog",
        },
        {
            id: "1",
            title: "To do list",
            srcImage: todolist,
            tecnologies: ["Typescript", "ReactJs"],
            description: "To do list, para treinar conceitos básicos de reactjs como, estado, imutabilidade do estado, listas e chaves, propriedades e componentização.",
            url: "https://nicollastsb.github.io/TodoListReactJs/",
            urlFigma: "https://www.figma.com/file/B24xz17wCfFXtphrCycgs3/ToDo-List-%E2%80%A2-Desafio-React-Copy?fuid=1204942815991854555",
            urlGithub: "https://github.com/Nicollastsb/TodoListReactJs",
        }
    ]
    
    return (
        <PortfolioContainer>
            <PortfolioContent>
                <PortfolioTitleContent>
                    <div>
                        <span>PORTFOLIO</span>
                    </div>
                    <p>{t('PortfolioCard_Subtitle')}</p>
                </PortfolioTitleContent>
                <PortfolioItemsContent>
                    {listProjects.map((project) => {
                        return (
                            <ProjectCardContent key={project.id}>
                                <img src={project.srcImage} alt=""/>
                                <PortfolioItemsTextContent>
                                    <h2>{project.title}</h2>                                                      
                                    <p>{project.title == "GitHub blog" ? t('PortfolioCard_GitHubText') : t('PortfolioCard_ToDoListText')}</p>
                                    <FooterProjectCard>      
                                        <div>
                                            <TecnologiesContent>
                                                {project.tecnologies.map((tecnology, index) =>{
                                                    return (
                                                        <div key={index}>{tecnology}</div>
                                                    )
                                                })}
                                            </TecnologiesContent> 
                                            <FooterLinks>
                                                <a title="Figma" href={project.urlFigma} target="_blank">
                                                    <FigmaLogo size={24} weight="bold" />
                                                </a>
                                                <a title="Github" href={project.urlGithub} target="_blank">
                                                    <GithubLogo size={24} weight="fill" />
                                                </a>
                                                <a title="Url" href={project.url} target="_blank">
                                                    <Link size={24} />
                                                </a>
                                            </FooterLinks>
                                        </div>                                  
                                    </FooterProjectCard>
                                </PortfolioItemsTextContent>
                            </ProjectCardContent>
                            )
                        })}
                </PortfolioItemsContent>
            </PortfolioContent>
        </PortfolioContainer>
    )
}