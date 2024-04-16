import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleCoda: css`
      font-family: 'Coda', sans-serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 500;
      color: ${props => props.theme['textColor']};
    `,

    tecnologieCoda: css`
      font-family: 'Coda', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 500;
      color: ${props => props.theme['textColor']};
    `,

    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-size: 3rem;
      line-height: 160%;
      font-weight: 600;
      letter-spacing: .3rem;
      color: ${props => props.theme['textColor']};
    `,

    textCard: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 150%;
      font-weight: 400;
      color: ${props => props.theme['secondtextColor']};
    `,

    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme['textColor']};
    `,

    titleMPost: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
    `,
    
    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
    `,
    
    profileCardTitle: css`
      font-family: 'Nunito', sans-serif;
      font-size: 2rem;
      line-height: 150%;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
      text-align: center;
    `,

    profileCardText: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 200%;
      font-weight: 400;
      color: ${props => props.theme['textColor']};
    `,
    
    textS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.775rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
      text-align: center;
    `,
    
    textM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
    `,
    
    ButtonText: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      font-style: italic;
      line-height: 160%;
      font-weight: 600;
      color: ${props => props.theme['textColor']};
      text-decoration: none; 
    `,

    SimpleText: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 600;
      color: ${props => props.theme['textColor']};
    `,
    
    
    ButtonLanguage: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      color: ${props => props.theme['textColor']};
      text-align: center;
    `,
  },
}
