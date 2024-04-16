import { Moon, Sun } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Portfolio } from "../../components/Portfolio";
import { ProfileCard } from "../../components/ProfileCard";
import { ButtonBottom, ButtonLanguageBottom, ContainerButtons, HomePageCotainer } from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PresentationCard } from "../../components/PresentationCard";

interface HomePageProps {
    toggleTheme: (checked: boolean) => void
}

export function HomePage ({toggleTheme}: HomePageProps){
    const { t, i18n:{changeLanguage, language} } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [isLight, setIsLight] = useState<boolean>(false);    

    const toggleSwitch = () => {
        setIsLight(previousState => !previousState);
        toggleTheme(!isLight)
    } 
    
    const handleCurrentLanguage = () =>{
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return (
        <HomePageCotainer>
            <Header/>
            <PresentationCard/>
            <ProfileCard/>
            <Portfolio/>
            <Footer/>
            <ContainerButtons>
                <ButtonLanguageBottom onClick={handleCurrentLanguage} title={currentLanguage ? "English Translation" : "Tradução Protuguês"}>
                    {currentLanguage == "en" ?
                        "Pt"
                        :
                        "En"
                    }
                </ButtonLanguageBottom>
                <ButtonBottom onClick={toggleSwitch} title={isLight ? t('Light_Mode') : t('Dark_Mode')}>
                    {isLight ?
                        <Sun size={28} weight="fill"/>
                        :
                        <Moon size={28} weight="fill"/>
                    }
                </ButtonBottom>
            </ContainerButtons>
        </HomePageCotainer>
    )
}