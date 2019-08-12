var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let num1 = 0;
  let num2 = 0;
  for(let item of s3){
    
  }
  return true;
}
// let s1 = "aabccde", s2 = "dbbca", s3 = "aadbebcbcacde";
   let s1 = "aabccde", s2 = "dbecca", //   aa b
                                             dbe 
// aa b c c
//   dbbc  a
//    b c                                    bbcabebcaf
                                             bbcaebca
                                             bbcaebcaf
//       b  c

let s1 = "aabc", s2 = "abad", s3 = "aabcabad";
                                     
console.log(isInterleave(s1, s2, s3));

'abcdefgacdef'// 可以啊
'abcdefgbcdef'
'abcdefagbcdef....'

'cca'
'ac'
'c'