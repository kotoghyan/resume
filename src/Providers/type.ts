import {languages, MyResume} from "../MyResume/MyResume";

export enum Lang {
    en='en',
    ru='ru',
}

export type Translate = <T extends Lang>(word: keyof typeof languages[T])=> typeof languages[T][typeof word] | '';

export type DefaultValue = {
    language: Lang;
    setLanguage: (language: Lang) => void;
    t: Translate;
    l: typeof MyResume[Lang]
}