class IsValid {
    static username(text) {
        const minUsernameLength = 4;
        const maxUsernameLength = 20;

        text = text.trim();

        if (text === '') {
            return 'Pamirsai irasyti slapyvardi';
        }
        if (text.length < minUsernameLength) {
            return 'Per trumpas slapyvardis';
        }
        if (text.length > maxUsernameLength) {
            return 'Per ilgas slapyvardis';
        }
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        for (const t of text) {
            if (!allowedSymbols.includes(t)) {
                return `Slapyvardyje yra neleistinas simbolis (${t})`;
            }
        }
        return true;
    }

    static email(text) {
        if (text === '') {
            return 'Pamirsai irasyti el. pasta';
        }
        if(text.indexOf('@') === -1){
            return 'El. pastas turi tureti @ simboli';
        }
        if(text.indexOf('.') === -1){
            return 'El. pastas turi tureti .';
        }
        if(text[0] === '@'){
            return 'El. pastas turi tureti teksta pries @ simboli';
        }
        if(text[text.indexOf('@') + 1] === text[text.indexOf('.')]){
            return 'El. pastas turi tureti teksta tarp @ simbolio ir tasko';
        }
        let etaSimboliuSuma = 0;
        for (const simbolis of text){
            if(simbolis === '@'){
                etaSimboliuSuma++;
            }
        }
        if(etaSimboliuSuma > 1){
            return 'El. pastas negali tureti daugiau nei vieno @ simbolio';
        }
        let localEmailPart = text.split('@')[0];
        if(localEmailPart.length > 64){
            return 'El. pastas negali tureti daugiau nei 64 simbolius pries @ simboli';
        }
        return true;
    }

    static password(text) {
        const minPasswordLength = 12;

        if (text === '') {
            return 'Pamirsai irasyti slaptazodi';
        }
        if (text.length < minPasswordLength) {
            return 'Per trumpas slaptazodis';
        }
        return true;
    }
}

module.exports = IsValid;