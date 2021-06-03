// Pattern taken from https://salesforce.stackexchange.com/a/274273
const pattern = /^(\b\D+\b)?\s*(\b.*?\d.*?\b)\s*(\b\D+\b)?$/

module.exports = (streetAddress) => {
    const m = streetAddress.match(pattern);

    return m[3];
};
