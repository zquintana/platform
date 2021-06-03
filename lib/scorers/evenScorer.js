const qualifies = ({streetName}) => streetName.length % 2 === 0;
const calculate = ({driversName}) => driversName.match(/[aeiou]/gi).length * 1.5;

module.exports = {
    qualifies,
    calculate,
}