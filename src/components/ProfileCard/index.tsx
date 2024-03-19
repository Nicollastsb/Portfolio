import { ProfileCardContainer, ProfileCardContent, ProfileCardTextContent } from "./styles";
import avatar from '../../assets/face.jpg'
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function ProfileCard (){
    return (
        <ProfileCardContainer>
            <ProfileCardContent>
                <img src={avatar} alt=""/>
                <ProfileCardTextContent>
                    <div>Oi, eu sou Nícollas. Sou desenvolvedor de software full-stack.</div>
                    <div>
                        <a title="nicollas-barbosa-dev" href={"https://www.linkedin.com/in/nicollas-barbosa-dev/"} target="_blank">
                            <LinkedinLogo size={24} weight="fill" /><span>LinkedIn</span>
                        </a>
                        <a title="Nicollastsb" href={"https://github.com/Nicollastsb"} target="_blank">
                            <GithubLogo size={24} weight="fill" /><span>GitHub</span>
                        </a>
                        <a title="email"><Envelope size={24} weight="fill" /><span>nicollastsb@gmail.com</span></a>
                    </div>
                </ProfileCardTextContent>
            </ProfileCardContent>
        </ProfileCardContainer>
    )
}