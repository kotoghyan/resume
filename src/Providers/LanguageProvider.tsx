import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react';
import {languages, MyResume} from "../MyResume/MyResume";
import {DefaultValue, Lang, Translate} from "./type";


const defaultValue: DefaultValue = {
    language: Lang.en,
    setLanguage: (language) => {},
    t: (word) => '',
    l:MyResume.en
}
export const LanguageContext = createContext(defaultValue);

type Props = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
    const [language, setLanguage] = useState<Lang>(defaultValue.language);
    const data = MyResume[language]

    const setter = useCallback((language:Lang) => {
        setLanguage(language);
    }, [setLanguage])



    const t: Translate = useCallback((word)=>{
        return languages[language][word]
    }, [language])

    const value = useMemo(() => ({language, setLanguage: setter, t,l: data}), [language]);

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    return useContext(LanguageContext);
}