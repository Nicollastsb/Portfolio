import { Browsers, FigmaLogo, GithubLogo } from "@phosphor-icons/react";
import { PortfolioContainer, PortfolioContent, PortfolioItemsContent, PortfolioItemsTextContent, PortfolioTitleContent } from "./styles";
import githubblog from '../../assets/githubblog.jpg'
import todolist from '../../assets/todoList.jpg'

export function Portfolio (){
    return (
        <PortfolioContainer>
            <PortfolioContent>
                <PortfolioTitleContent>
                    <Browsers size={24} weight="bold" />
                    <span>Portfolio</span>
                </PortfolioTitleContent>
                <PortfolioItemsContent>
                    <div>
                        <img src={githubblog} alt=""/>
                        <PortfolioItemsTextContent>
                            <h2>GitHub blog</h2>
                            <p>
                                Uma aplicação que utiliza a API do GitHub para buscar issues deste repositório, dados do perfil para exibi-los como um blog.
                            </p>
                            <div>
                                <a title="nicollas-barbosa-dev" href={"https://www.figma.com/community/file/1138814951106121051"} target="_blank">
                                    <FigmaLogo size={24} weight="bold" /><span>Figma</span>
                                </a>
                                <a title="Nicollastsb" href={"https://github.com/Nicollastsb/Github-blog"} target="_blank">
                                    <GithubLogo size={24} weight="fill" /><span>GitHub</span>
                                </a>
                            </div>
                        </PortfolioItemsTextContent>
                    </div>
                    <div>
                        <img src={todolist} alt=""/>
                        <PortfolioItemsTextContent>
                            <h2>GitHub blog</h2>
                            <p>
                                Uma aplicação que utiliza a API do GitHub para buscar issues deste repositório, dados do perfil para exibi-los como um blog.
                            </p>
                            <div>
                                <a title="nicollas-barbosa-dev" href={"https://www.figma.com/community/file/1138814951106121051"} target="_blank">
                                    <FigmaLogo size={24} weight="bold" /><span>Figma</span>
                                </a>
                                <a title="Nicollastsb" href={"https://github.com/Nicollastsb/Github-blog"} target="_blank">
                                    <GithubLogo size={24} weight="fill" /><span>GitHub</span>
                                </a>
                            </div>
                        </PortfolioItemsTextContent>    
                    </div>
                </PortfolioItemsContent>
            </PortfolioContent>
        </PortfolioContainer>
    )
}