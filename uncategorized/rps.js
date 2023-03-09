/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = num => {
  //Edgecase
  if (num < 1) return [];
  const options = ['rock', 'paper', 'scissors'];
  const allPossibilities = [];
        
  const roundChoice = function(round, roundNumber) {
    for(let i = 0; i < options.length; i++){ 
      round.push(options[i]); 
      
      if(roundNumber === num){
        allPossibilities.push(round.slice());
      }else{
        roundChoice(round, roundNumber + 1);
      }
      round.pop();
    }
  }
  roundChoice([], 1);
  return allPossibilities;
};

// const rps = n => {
//   const results = [];

//   const generate = str => {
//     if (str.length === n ) {
//       results.push(str);
//       return;
//     }
//     generate(str + 'r');
//     generate(str + 'p');
//     generate(str + 's');
//   };
//   generate('');
//   return results;
// }

/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  
};

module.exports = {rps, passwords};
