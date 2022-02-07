const IsValid = require("./IsValid.js");

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera parametru', () => {
            expect(IsValid.username('')).toBe('Pamirsai irasyti slapyvardi');
        });
        test('paduodamas objektas', () => {
            expect(IsValid.username({})).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas masyvas', () => {
            expect(IsValid.username([])).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas boolean', () => {
            expect(IsValid.username(true)).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas skaicius', () => {
            expect(IsValid.username(12345)).toBe('Netinkamo tipo parametras');
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
        test('abcdefghijklmnopqrst - leistini simboliai [a-t]', () => {
            expect(IsValid.username('abcdefghijklmnopqrst')).toBe(true);
        });
        test('uvwxyzABCDEFGHIJKLMN - leistini simboliai [u-N]', () => {
            expect(IsValid.username('uvwxyzABCDEFGHIJKLMN')).toBe(true);
        });
        test('OPQRSTUVWXYZ0123456 - leistini simboliai [O-6]', () => {
            expect(IsValid.username('OPQRSTUVWXYZ0123456')).toBe(true);
        });
        test('789_ - leistini simboliai', () => {
            expect(IsValid.username('789_')).toBe(true);
        });
    })
})

describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.email('')).toBe('Pamirsai irasyti el. pasta');
        });
        test('paduodamas objektas', () => {
            expect(IsValid.email({})).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas masyvas', () => {
            expect(IsValid.email([])).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas boolean', () => {
            expect(IsValid.email(true)).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas skaicius', () => {
            expect(IsValid.email(12345)).toBe('Netinkamo tipo parametras');
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
        test('Du taskai eina is eiles', () => {
            expect(IsValid.email('vardas..pavarde@example.com')).toBe('El. pastas negali tureti dvieju is eiles einanciu tasku');
        });
        test('_ simbolis domain dalyje', () => {
            expect(IsValid.email('vardas.pavarde@exa_mple.com')).toBe('El. pastas negali tureti _ simbolio po @ simbolio');
        });

    })
    describe('Tinkami parametrai', () => {
        test('simple@example.com', () => {
            expect(IsValid.email('simple@example.com')).toBe(true);
        });
        test('very.common@example.com', () => {
            expect(IsValid.email('very.common@example.com')).toBe(true);
        });
    })
})

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.password('')).toBe('Pamirsai irasyti slaptazodi');
        });
        test('paduodamas objektas', () => {
            expect(IsValid.password({})).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas masyvas', () => {
            expect(IsValid.password([])).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas boolean', () => {
            expect(IsValid.password(true)).toBe('Netinkamo tipo parametras');
        });
        test('paduodamas skaicius', () => {
            expect(IsValid.password(12345)).toBe('Netinkamo tipo parametras');
        });
    })
    describe('Tinkamo tipo parametras, bet su blogomis reiksmemis', () => {
        test('per trumpas slaptazodis', () => {
            expect(IsValid.password('12345')).toBe('Per trumpas slaptazodis');
        });
        test('slaptazodis be skaiciu', () => {
            expect(IsValid.password('slaptazodisss')).toBe('Slaptazodis turi tureti bent viena skaiciu');
        });
    })
}) 