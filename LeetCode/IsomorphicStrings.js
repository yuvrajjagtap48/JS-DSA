// function isomorphicStrings(s, t) {
//   let mapS = {};
//   let mapT = {};

//   for (let i = 0; i < s.length; i++) {
//     if (mapS[s[i]] !== mapT[t[i]]) {
//       return false;
//     }

//     mapS[s[i]] = i;
//     mapT[t[i]] = i;
//   }

//   return true;
// }

let s = "foo", t = "bar";
console.log(isomorphicStrings(s, t));


function isomorphicStrings(s, t) {
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < s.length; i++) {
        if( !mapS[s[i]] && !mapT[t[i]]){
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        }
        else if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]){    
            return false;
        }
    }
    return true;
}