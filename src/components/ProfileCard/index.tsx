import { ProfileCardContainer, ProfileCardContent, ProfileCardSubTitle, ProfileCardTextContent, ProfileCardTitle, ImagesTools, ImgItem, ConhecimentoEm, ProfileDownloadCV } from "./styles";
import avatar from '../../assets/face.jpg'
import Boostrap from '../../assets/Bootstrap.png'
import CSharp from '../../assets/CSharp.png'
import Css from '../../assets/CSS3.png'
import Javascript from '../../assets/JavaScript.png'
import NetCore from '../../assets/NETCore.png'
import React from '../../assets/React.png'
import SQLServer from '../../assets/sqlserver.png'
import TypeScript from '../../assets/TypeScript.png'
import Curriculo from '../../assets/Currículo Nicollas Desenvolvedor Full Stack.pdf'
import { DownloadSimple } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';

export function ProfileCard (){
    const { t } = useTranslation()
    return (
        <ProfileCardContainer id="aboutMe">
            <ProfileCardContent>
                <div>
                    <img src={avatar} alt=""/>
                    <ConhecimentoEm>{t('ProfileCard_ToolBoxTitle')}</ConhecimentoEm>
                    <ImagesTools>
                        <ImgItem>
                            <img src={Boostrap} alt=""/>
                            <span>Boostrap</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={CSharp} alt=""/>
                            <span>C#</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={Css} alt=""/>
                            <span>Css</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={Javascript} alt=""/>
                            <span>Javascript</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={NetCore} alt=""/>
                            <span>.Net Core</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={React} alt=""/>
                            <span>React</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={SQLServer} alt=""/>
                            <span>SQL Server</span>
                        </ImgItem>
                        <ImgItem>
                            <img src={TypeScript} alt=""/>
                            <span>TypeScript</span>
                        </ImgItem>
                    </ImagesTools>
                </div> 
                <ProfileCardTextContent>
                    <ProfileCardTitle>
                        {t('ProfileCard_Title')}
                    </ProfileCardTitle>
                    <ProfileCardSubTitle>
                        {parse(t('ProfileCard_Text'))}
                    </ProfileCardSubTitle>
                    <ProfileDownloadCV>
                        <span>{t('ProfileCard_CurriculumText')}</span>
                        <a href={Curriculo} download="Currículo Nicollas Desenvolvedor Full Stack">
                            Download <DownloadSimple size={26} weight="fill" />
                        </a>                                                                 
                    </ProfileDownloadCV>
                </ProfileCardTextContent>
            </ProfileCardContent>
        </ProfileCardContainer>
    )
}