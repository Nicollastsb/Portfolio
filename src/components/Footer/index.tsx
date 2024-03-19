import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FooterContainer, FooterContent, IconsFooter } from "./styles";

export function Footer (){
    return (
        <FooterContainer>
            <FooterContent>
                <div>Nícollas Barbosa</div>
                <IconsFooter>
                    <a title="nicollas-barbosa-dev" href={"https://www.linkedin.com/in/nicollas-barbosa-dev/"} target="_blank">
                        <LinkedinLogo size={24} weight="fill" />
                    </a>
                    <a title="Nicollastsb" href={"https://github.com/Nicollastsb"} target="_blank">
                        <GithubLogo size={24} weight="fill" />
                    </a>
                    <a title="nicollastsb@gmail.com">
                        <Envelope size={24} weight="fill" />
                    </a>
                </IconsFooter>
            </FooterContent>
        </FooterContainer>
    )
}