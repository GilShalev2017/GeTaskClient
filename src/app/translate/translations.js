// app/translate/translation.ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import translations
const lang_en_1 = require("./lang-en");
const lang_he_1 = require("./lang-he");
// translation token
//export const TRANSLATIONS = new OpaqueToken('translations');
exports.TRANSLATIONS = 'translations';
// all traslations
const dictionary = {
    [lang_en_1.LANG_EN_NAME]: lang_en_1.LANG_EN_TRANS,
    [lang_he_1.LANG_HE_NAME]: lang_he_1.LANG_HE_TRANS,
};
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
//# sourceMappingURL=translations.js.map