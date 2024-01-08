/**

 **PETITE DESCRIPTION**

@param {number[]} data

@returns {number}
*/
export default function average(data){
if (!Array.isArray(data) || !data.every(Number.isFinite)) {
    return NaN;
}
const sum = data.reduce((acc, n) => acc + n, 0);
return sum / data.length;
}