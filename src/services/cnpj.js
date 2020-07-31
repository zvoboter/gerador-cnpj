export const createCnpj = () => {
    var o = getRandom(9),
        r = getRandom(9),
        n = getRandom(9),
        t = getRandom(9),
        m = getRandom(9),
        i = getRandom(9),
        s = getRandom(9),
        d = getRandom(9),
        u = 2 + 6 * d + 7 * s + 8 * i + 9 * m + 2 * t + 3 * n + 4 * r + 5 * o;
    (u = 11 - getMod(u, 11)) >= 10 && (u = 0);
    var e = 2 * u + 3 + 0 + 0 + 0 + 7 * d + 8 * s + 9 * i + 2 * m + 3 * t + 4 * n + 5 * r + 6 * o;
    // eslint-disable-next-line no-unused-expressions
    (e = 11 - getMod(e, 11)) >= 10 && (e = 0);
    return "" + o + r + "." + n + t + m + "." + i + s + d + "/0001-" + u + e;
}

export const validateCnpj = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, '')

    // Valida a quantidade de caracteres
    if (cnpj.length !== 14)
        return false

    // Elimina inválidos com todos os caracteres iguais
    if (/^(\d)\1+$/.test(cnpj))
        return false

    // Cáculo de validação
    let t = cnpj.length - 2,
        d = cnpj.substring(t),
        d1 = parseInt(d.charAt(0)),
        d2 = parseInt(d.charAt(1)),
        calc = x => {
            let n = cnpj.substring(0, x),
                y = x - 7,
                s = 0,
                r = 0

            for (let i = x; i >= 1; i--) {
                s += n.charAt(x - i) * y--;
                if (y < 2)
                    y = 9
            }

            r = 11 - s % 11
            return r > 9 ? 0 : r
        }

    return calc(t) === d1 && calc(t + 1) === d2
}

const getRandom = (a) => {
    return Math.round(Math.random() * a)
}

const getMod = (a, o) => {
    return Math.round(a - Math.floor(a / o) * o)
}
