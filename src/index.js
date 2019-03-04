/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let arr=[];
  for (let i=0;i<preferences.length;i++)arr.push(preferences[i]);
  arr.sort(compareNumeric);
  let countDif=1;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]!=arr[j]){
        countDif++;
        i=j-1;
        break;
      }
    }
  }
  preferences.unshift(0);
  let countTriangle=0;
  if(countDif>=3){
    for(let i=1; i<preferences.length; i++){
      let a=i;
      let b=preferences[a];
      let c=preferences[b];
      if(preferences[c]==a && preferences[c]!=b && preferences[c]!=c) {countTriangle++; break;}
    }
    return countTriangle;
  }
  return countTriangle;

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
};
