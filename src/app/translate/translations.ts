// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_HE_NAME, LANG_HE_TRANS } from './lang-he';

// translation token
//export const TRANSLATIONS = new OpaqueToken('translations');
export const TRANSLATIONS = 'translations';

// all traslations
export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_HE_NAME]: LANG_HE_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];

