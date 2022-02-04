const IsValid = require("./IsValid.js");

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera parametru', () => {
            expect(IsValid.username('')).toBe('Pamirsai irasyti slapyvardi');
        });
        //jeigu objektas ir panasus inputai
    })
    describe('Tinkamo tipo parametras, bet su blogomis reiksmemis', () => {
        test('Li - per trumpas', () => {
            expect(IsValid.username('Li')).toBe('Per trumpas slapyvardis');
        });
        test('Limonadas123456789098 - per ilgas', () => {
            expect(IsValid.username('Limonadas123456789098')).toBe('Per ilgas slapyvardis');
        });
        test('Limonadas( - su neleistinu simboliu pabaigoje', () => {
            expect(IsValid.username('Limonadas(')).toBe('Slapyvardyje yra neleistinas simbolis (()');
        });
        test('Limonadas( - su neleistinu simboliu pradzioje', () => {
            expect(IsValid.username('(Limonadas')).toBe('Slapyvardyje yra neleistinas simbolis (()');
        });
        test('Limonadas( - su neleistinu simboliu viduryje', () => {
            expect(IsValid.username('Limo(nadas')).toBe('Slapyvardyje yra neleistinas simbolis (()');
        });
        test('Limonadas 1 - su tarpu', () => {
            expect(IsValid.username('Limonadas 1')).toBe('Slapyvardyje yra neleistinas simbolis ( )');
        });
    })
    describe('Tinkami parametrai', () => {
        test('Star', () => {
            expect(IsValid.username('Star')).toBe(true);
        });
        test('Butterfly1233212340 - ilgiausias leistinas', () => {
            expect(IsValid.username('Star')).toBe(true);
        });
        //patikrint visus leistinus simbolius, min, max
    })
})

describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.email('')).toBe('Pamirsai irasyti el. pasta');
        });
    })
    describe('Tinkamo tipo parametras, bet su blogomis reiksmemis', () => {
        test('nera @', () => {
            expect(IsValid.email('jonas')).toBe('El. pastas turi tureti @ simboli');
        });
        test('nera .', () => {
            expect(IsValid.email('jonas@jn')).toBe('El. pastas turi tureti .');
        });
        test('nera teksto pries @', () => {
            expect(IsValid.email('@jn.lt')).toBe('El. pastas turi tureti teksta pries @ simboli');
        });
        test('nera teksto tarp @ ir .', () => {
            expect(IsValid.email('fhfhf@.lt')).toBe('El. pastas turi tureti teksta tarp @ simbolio ir tasko');
        });
        test('Daugiau nei vienas @', () => {
            expect(IsValid.email('fh@fhf@.lt')).toBe('El. pastas negali tureti daugiau nei vieno @ simbolio');
        });
        test('Pries @ simboli daugiau nei 64 zenklai', () => {
            expect(IsValid.email('1234567890123456789012345678901234567890123456789012345678901234+x@example.com')).toBe('El. pastas negali tureti daugiau nei 64 simbolius pries @ simboli');
        });

    })
})

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.password('')).toBe('Pamirsai irasyti slaptazodi');
        });
        test('per trumpas slaptazodis', () => {
            expect(IsValid.password('12345')).toBe('Per trumpas slaptazodis');
        });
    })
}) 