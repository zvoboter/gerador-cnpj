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

const getRandom = (a) => {
    return Math.round(Math.random() * a)
}

const getMod = (a, o) => {
    return Math.round(a - Math.floor(a / o) * o)
}