import { EmailButtonStylle, GitHubButtonStylle, LinkedInButtonStylle, ProfileCardBottomContent, ProfileCardContainer, ProfileCardContent, ProfileCardSubTitle, ProfileCardTextContent, ProfileCardTitle, SocialButtons, WhatsAppButtonStylle } from "./styles";
import { Copy, Envelope, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser';

export function PresentationCard (){
    const [copy, setCopy] = useState(false);
    const { t } = useTranslation()

    const copyToClipBoard = async () => {
        await navigator.clipboard.writeText("nicollastsb@gmail.com")
        setCopy(true)
        toast.success(t('Email_copied'), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }

    return (
        <ProfileCardContainer>
            <ProfileCardContent>
                <ProfileCardTextContent>
                    <ProfileCardTitle>
                        {t('PresentationCard_Title')}
                    </ProfileCardTitle>
                    <ProfileCardBottomContent>
                        <ProfileCardSubTitle>
                            {parse(t('PresentationCard_Subtitle'))}
                        </ProfileCardSubTitle>

                        <Link to="aboutMe" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} >
                            {t('PresentationCard_Button')}</Link>
                    </ProfileCardBottomContent>
                        
                        <SocialButtons>
                            <LinkedInButtonStylle title="nicollas-barbosa-dev" href={"https://www.linkedin.com/in/nicollas-barbosa-dev/"} target="_blank">
                                <LinkedinLogo size={26} weight="fill" />
                            </LinkedInButtonStylle>
                            <GitHubButtonStylle title="Nicollastsb" href={"https://github.com/Nicollastsb"} target="_blank">
                                <GithubLogo size={26} weight="fill" />
                            </GitHubButtonStylle>
                            <WhatsAppButtonStylle title="(38) 98822-3723" href={"https://wa.me/5538988223723"} target="_blank">
                                <WhatsappLogo size={26} weight="fill" />
                            </WhatsAppButtonStylle>
                            <EmailButtonStylle title="nicollastsb@gmail.com" onClick={copyToClipBoard}>
                                <Envelope size={26} weight="fill" />nicollastsb@gmail.com {!copy && <Copy size={26} weight="fill" />}
                            </EmailButtonStylle>
                        </SocialButtons>
                </ProfileCardTextContent>
            </ProfileCardContent>
            <ToastContainer/>
        </ProfileCardContainer>
    )
}