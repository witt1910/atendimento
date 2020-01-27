const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const SEGREDO = "DjdaeoijhndLJAKOÇSDNjkLBAS";

module.exports = async (request, response, next) => {
    const autorizacao = request.headers.authorization;

    if (!autorizacao) {
        return responde.status(401).send({ error: "Não foi fornecido o token." });
    }

    const [scheme, token] = autorizacao.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, SEGREDO);

        request.userId = decoded.id;

        return next();
    } catch (err) {
        return response.status(401).send({ error: "Token inválido." });
    }

};