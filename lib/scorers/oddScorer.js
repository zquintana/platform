const qualifies = ({streetName}) => streetName.length % 2 !== 0;
const calculate = ({driversName}) => driversName.replace(/\s+/g, '').length - driversName.match(/[aeiou]/gi).length;

module.exports = {
    qualifies,
    calculate,
}