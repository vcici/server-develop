class IsValid {
    static username(text) {
        const minUsernameLength = 4;
        const maxUsernameLength = 20;
        if (typeof text !== 'string'){
            return 'Netinkamo tipo parametras';
        }
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
        if (typeof text !== 'string'){
            return 'Netinkamo tipo parametras';
        }
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
        for (let i = 0; i < text.length; i++){
            if(text[i] === '.' && text[i + 1] === '.'){
                return 'El. pastas negali tureti dvieju is eiles einanciu tasku';
            }
        }
        let domainEmailPart = text.split('@')[1];
        if (domainEmailPart.includes('_')){
            return 'El. pastas negali tureti _ simbolio po @ simbolio';
        }
        
        return true;
        
    }

    static password(text) {
        const minPasswordLength = 12;
        if (typeof text !== 'string'){
            return 'Netinkamo tipo parametras';
        }
        if (text === '') {
            return 'Pamirsai irasyti slaptazodi';
        }
        if (text.length < minPasswordLength) {
            return 'Per trumpas slaptazodis';
        }
        const arYraSkaicius = false;
        
        for(const letter of text){
            if(!isNaN(letter) ){
                arYraSkaicius = true;
            }
        }
        
        if (!arYraSkaicius){
            return 'Slaptazodis turi tureti bent viena skaiciu';
        }
            
        return true;
    }
}

module.exports = IsValid;