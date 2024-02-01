import * as React from 'react'

export const LanguageContext = React.createContext("ja")

export const useLanguage = () => {
    const context = React.useContext(LanguageContext)

    return { lang: context }
}

