import { GitHubButtonStylle, HeaderButtons, HeaderContainer, HeaderContent, LinkedInButtonStylle, WhatsAppButtonStylle } from "./styles";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";


export function Header (){

    return (
        <HeaderContainer>
            <HeaderContent>
                <div>Nícollas Barbosa</div>
                <HeaderButtons>
                    <LinkedInButtonStylle title="nicollas-barbosa-dev" href={"https://www.linkedin.com/in/nicollas-barbosa-dev/"} target="_blank">
                        <LinkedinLogo size={26} weight="fill" />
                    </LinkedInButtonStylle>
                    <GitHubButtonStylle title="Nicollastsb" href={"https://github.com/Nicollastsb"} target="_blank">
                        <GithubLogo size={26} weight="fill" />
                    </GitHubButtonStylle>
                    <WhatsAppButtonStylle title="(38) 98822-3723" href={"https://wa.me/5538988223723"} target="_blank">
                        <WhatsappLogo size={26} weight="fill" />
                    </WhatsAppButtonStylle>
                </HeaderButtons>
            </HeaderContent>
        </HeaderContainer>
    )
}