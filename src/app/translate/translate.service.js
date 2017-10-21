"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const translations_1 = require("./translations"); // import our opaque token
let TranslateService = class TranslateService {
    // inject our translations
    constructor(_translations) {
        this._translations = _translations;
    }
    get currentLang() {
        return this._currentLang;
    }
    use(lang) {
        // set current language
        this._currentLang = lang;
    }
    translate(key) {
        // private perform translation
        let translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    }
    instant(key) {
        // public perform translation
        return this.translate(key);
    }
};
TranslateService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(translations_1.TRANSLATIONS)),
    __metadata("design:paramtypes", [Object])
], TranslateService);
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map