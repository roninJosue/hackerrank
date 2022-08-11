const table = {
  'ab': 'c',
  'ac': 'b',
  'cb': 'a',
  'ba': 'c',
  'ca': 'b',
  'bc': 'a'
}

const stringReduction = (s, m = 0, n = 1) => {
  if (n >= s.length) return s
  if (s.length === 1) return s

  const swap = table[`${s[m]}${s[n]}`]

  if (s[m] !== s[n] && swap !== s[n + 1]) {
    let newString = ''
    if (m === 0 && n === 1) {
      newString = swap + s.slice(2)
    } else {
      newString = s.slice(0, n-1) + swap + s.slice(n+1, s.length)
    }

    return stringReduction(newString, 0, 1)
  } else {
    return stringReduction(s, m + 1, n + 1)
  }
}

//console.log(1 === stringReduction('ccaabcccbcabcbccbabacbbccccabbbababbccbbbbaacaabbccaababbacacbbbcaa', 0, 1))
//console.log(stringReduction('abbbbaaaa', 0, 1))
console.log(stringReduction('aabccaaaccbccaacacbbcaaacbbaccbaacccaabaaccaaaaaabccccccbcaaccbacbaabbaa', 0, 1))
console.log(stringReduction('bbccba', 0, 1))


//console.log(stringReduction('cab', 0, 1))
;
/*console.log(1 === stringReduction('aabccaaaccbccaacacbbcaaacbbaccbaacccaabaaccaaaaaabccccccbcaaccbacbaabbaa', 0, 1))
console.log(1 === stringReduction('aacbbabcabacbccbacaac', 0, 1))
console.log(2 === stringReduction('cab', 0, 1))
console.log(1 === stringReduction('acbabcbababcabaaccababbccaccbbabcc', 0, 1))
console.log(1 === stringReduction('acababcaccacbbbaccbbca', 0, 1))
console.log(1 === stringReduction('bbacaccaabaccaacccbcbcabcaabcabccbcaccaabcbbcbbbbcbaccccacbbacacbcabcacbabacababbacbcbba', 0, 1))
console.log(2 === stringReduction('abaabbcccbbcbaacaacccbbcaabbccacbbaccacbbccbcaaaaaaacbcabbcbbabcc', 0, 1))
console.log(1 === stringReduction('cccacbcccbcbcabcbabbbbaccbcabbaacaabcaaccaacbcaabbccccbcbcacbbaabccbcaccaccacaabbaacaaccaccbbacb', 0, 1))
console.log(1 === stringReduction('cacac', 0, 1))
console.log(1 === stringReduction('bcccccaabbbacccccaccbccacbbbcabbaaaaabbcbacaaacbabacbabbbcabccabaabaaacbbaccbc', 0, 1))
console.log(1 === stringReduction('bcbbabccbbacccabaaccbcbcbccbacbcbbccabbbbcbbcbcaaccbaccbbbcaacacaccabbaabbbbabbaabbaabccaccbbbbc', 0, 1))
console.log(2 === stringReduction('bbbcbbacacabbaaaaabcaacbbcacbbccccbbbabcacbbabcbaabbcaaaababca', 0, 1))
console.log(2 === stringReduction('ccaacbbcbbabcaabbccabbbcbccbbababcbaaccacabbacacbaacbbcaabbcaacbaabca', 0, 1))
console.log(1 === stringReduction('ccaabcccbcabcbccbabacbbccccabbbababbccbbbbaacaabbccaababbacacbbbcaa', 0, 1))
console.log(1 === stringReduction('cbabcaa', 0,1))
console.log(2 === stringReduction('cabacbbbabccabacacbccb', 0, 1))
console.log(1 === stringReduction('aacbcaccaabaaaccbbbbbbbccbbaaacbacbbaababaca', 0, 1))
console.log(2 === stringReduction('ccaacbabaaabbaccabbccaacbcccccabbacbbccca', 0,1))
console.log(1 === stringReduction('acbacccaababbcbacaacbabcbcbbaacacbbbcaacbaabaccaaaaaabccbbbbbaaba', 0,1))
console.log(1 === stringReduction('bcabbcccaacbbabbbcaacabbcabcbcccbabacbabcacaba', 0,1))
console.log(1 === stringReduction('cabccbbabcabbcbbcb', 0, 1))
console.log(1 === stringReduction('cbcacbccaaabbacbacacbcccbccababccbccabbbabccccaacc', 0, 1))
console.log(1 === stringReduction('abcc', 0, 1))
console.log(1 === stringReduction('cbbcaabcbbccbbbcaabcacacbacbaabacaacbcaaaacc', 0, 1))
console.log(1 === stringReduction('abcccccacabbccbabbaccabba'))
console.log(1 === stringReduction('abacacbabbcabaabbbacbccccbaabbcbbaacaccbcacbabcccacbacbaccbabb'))
console.log(1 === stringReduction('c'))
console.log(1 === stringReduction('cbcacaccaacbbcbccbcccabccbbaacccbcaaaccabcacbbcccb'))
console.log(2 === stringReduction('cacccbbacba'))
console.log(1 === stringReduction('ccaaaacababbcbabbacbacbcbaaababbcbbcbbabbacbbbacbabbaabaabbabcbbaabaccbbcbaacbabcbcacbababbcb'))
console.log(1 === stringReduction('bcbcaaaccababbccabbabbccaacbabcbbaccaabaaaabcabacaabcabcbbbccabaaaabbabcaaaa'))
console.log(1 === stringReduction('aacbccaabaccbbbcbccbaaaaaababcbbaccababcabbcaabbcbaacbaabcaacccabc'))
console.log(1 === stringReduction('acbcb'))
console.log(2 === stringReduction('baacabcbaabcbbcbcabccbacacacbbc'))
console.log(1 === stringReduction('ccaacacabacaccbbccbabccacccabbcccaabbcbabaabbcaaccabcbcbbccb'))
console.log(2 === stringReduction('cbaabcbcacababcabbcabbaaabcabbcacabacccacababbbbcacbcaacccaaacbaacacabccbcaabbcaabccc'))
console.log(1 === stringReduction('cccbcabcacbbcbcabbccbacbbcabccbbcbaa'))
console.log(1 === stringReduction('cccbabacbabaabcaabcccbbcabcbbcbb'))
console.log(1 === stringReduction('ccbabbccaaaccbcabacccacbcbbbacacacabbabbabbbaccbcabcabbccabaabaaaccccbcbcacacbb'))
console.log(1 === stringReduction('bcccabbbcaccbabaaacccbaacaacac'))
console.log(2 === stringReduction('ccccbaaaabccaaaa'))
console.log(1 === stringReduction('cbbbccbcaaabccacccbabbaaccaabccbbacbacbaccccbacacbababbaaaccab'))
console.log(1 === stringReduction('bbbcbabaaacccaccabacabbaabaacbbaaacaabbbbbbbcabacacacbbaccbca'))
console.log(1 === stringReduction('cbccbabacabacaacaacaacbcacb'))
console.log(1 === stringReduction('bcbcbbcccaabbcbbccaababcaacaabcabbccabaccabacacc'))
console.log(1 === stringReduction('aacbcccccababbccacacaabbacbacbcccbbccabbbaccbccccabcbabbaaaccccbcaabbaaaaccabcc'))
console.log(1 === stringReduction('a'))
console.log(1 === stringReduction('bccabcaccaa'))
console.log(1 === stringReduction('ccabbcbbccbbcbbccbbbbbcbccacabbaaabccabbaaaabbaabccaabcacaacccabccabacabcbcbacccccaaacbaac'))
console.log(1 === stringReduction('abbbcbcabccccacabbabacccacacbcccbaaacacbabbcbbacabbcbabcacbbcaaacbbbcaaccaaacbaacccaabcaac'))
console.log(1 === stringReduction('caabccaccaabcbcababccbcacbbacaaaabb'))
console.log(1 === stringReduction('bc'))
console.log(2 === stringReduction('acbccbcacccbabbbaacbaacacbcbcbcabbcbccc'))
console.log(2 === stringReduction('acbbaacbaacbbccabcbabbbaabcabcacbcaccca'))
console.log(2 === stringReduction('acacccaacabbbcccc'))
console.log(1 === stringReduction('abbaa'))
console.log(2 === stringReduction('abcbbcccacbcccbacacbbbbaabbaacaaaabbabbababbaabcaabbcabaca'))
console.log(1 === stringReduction('cccbacaaccbbacccccbcccbcccabbccccbbabbbbacaccccbccccbbbcaaacaccccaaacccaccabc'))
console.log(2 === stringReduction('bbcacbbbaccbcabcabcbbcbb'))
console.log(1 === stringReduction('b'))
console.log(1 === stringReduction('baabbcbcca'))
console.log(1 === stringReduction('bbabaaccaaaacbabaccbaacccbbccbabbcccacbaccaabbbcacbcaabccacbaaabaaaaccaacbaabcacbbbbbabcbbbbccccaaca'))
console.log(2 === stringReduction('aacabcbbaac'))
console.log(2 === stringReduction('ccccabbbaccccbcccaccbccacbcaccccbbccabbbaabbccbbaccbb'))
console.log(2 === stringReduction('cbbbbbbcaabaaabccaaabcacbabbaaacbbcbcbaabcbbcaabaaabbaccbbbbbbbbaaaabbbbaacbabcbbc'))
console.log(2 === stringReduction('cbacc'))
console.log(1 === stringReduction('aabccaaaaacbcaacabacbcababcbbcaaacacaacabacbaaabbbacabbcabababcbacbacbbbbbaccbbaacabbcababac'))
console.log(1 === stringReduction('abaacbacacacaabbcbccabacccabaaabcbccaabbaaba'))
console.log(1 === stringReduction('abbabaaaaccaaabbccbababbcbbaccbacaaababaaaabcba'))
console.log(2 === stringReduction('bbcabcabacbacbabcbcacbaabbcbaaccbaaacbacaccaacccbcababba'))
console.log(1 === stringReduction('bbbbcaacbabcbbbbabbacbcbcbcaacbbaaccbacaaaacccaaccbbbbcacbccbbbcbbccbcacacbbbcbbaccbbcaabaaab'))
console.log(1 === stringReduction('aaaaababbcbaacbbcbcbaabacbaccccaccaacccbbabcaaacccbabaaabcaabcabacbabbbcbabbbccaaabbbccabcaaacb'))
console.log(1 === stringReduction('babcbaccbaccabbacccacbbbbcccbaaacccaabbbc'))
console.log(2 === stringReduction('ccaaacaaabcccbccabbbbababbcccbbbbbccbbacccccbbccaaababcbccccaabccbcbccaccccabccbcaaabccbb'))
console.log(1 === stringReduction('acbccbbbcbbabaabaaaabaacbccaabbbbcbaaacccacaabcbbacabcccbcbcbccccabcbabacccabcccabcccaabcbcbbb'))
console.log(1 === stringReduction('accaabbabbabcaabbacaacacccbbbccbbabccbbacbbacababbcbaa'))
console.log(1 === stringReduction('aaabbcbbcbabacabaccacccabb'))
console.log(1 === stringReduction('cbabcabbabccabcacaaaaaaaaacbcaccacaabcbbbcbcabcbbbbbccccbcbaaaaabcbcbabacca'))
console.log(2 === stringReduction('aababbcbacbbbbcbcaaaabcbcbacaabcbcaabcccbbbacbaacaaccbbaabcccacbbcccbbcaabbbcbbcccbcbaccccbcbaba'))
console.log(2 === stringReduction('acbcacabb'))
console.log(1 === stringReduction('bcaaccccbccbccccaaaaccbabbacacbbbccbabbcababbaababacacaabbabaaaaccccbbccccabcbacbbcbabcbcbabcacb'))
console.log(1 === stringReduction('bccabbbcacbbaccbbc'))
console.log(1 === stringReduction('ccaabacabcabbaaccabbabbccaabcabaccabbacccccacaacacabbbcbcccccbccbababb'))
console.log(1 === stringReduction('aacbbaaabcbbababaccacacbcaacbcaccababcbabababcccbbabaacacabaacbbcacbcbcabbbaabccaaaabacacabccc'))
console.log(1 === stringReduction('ccbaccaabbbbcabbbccbbbbcbbababaaabbbaabcbaacbcbcccbaaacccbabcacacbbcbab'))
console.log(2 === stringReduction('bcaaabacacbbaaaabcbbaacabaabbacaccbabbaaaccbcbccaababaaaccbbcbccaaaa'))
console.log(1 === stringReduction('babac'))
console.log(1 === stringReduction('aacabacccaaacacbcbaccaacbbabcac'))
console.log(1 === stringReduction('bcaacaacababcacbcabaabcacabcbaccaaabaa'))
console.log(1 === stringReduction('bcccbccaaacaaacbbaaabcaccbcacacbabbccaccacccbcaaabacaccaacca'))
console.log(1 === stringReduction('bcaaaacbabcabcbaabbcccacbaabcbbbaccaabcbaabbcacacbabaabcccbcaababaabcbacbbbacbcbccbaaaaccbcaabbcbcb'))
console.log(1 === stringReduction('acbbaa'))
console.log(2 === stringReduction('bbccbbbccbccbcccaaacbaaaaccabaacbacacbccabbabbcbbaabbccbbbcabaaaaaaacaaaacabbaaabbccacbabca'))
console.log(2 === stringReduction('ccbbcaccaccacbcacacbbbacacaacabccabcaaccaaacbabaaacabccaccbcaccbcabbbcabcbabcccccbccbcabcbabaa'))
console.log(1 === stringReduction('abcbcbcaabccabbaccbbbbbacabaa'))
console.log(2 === stringReduction('abaabbcabacbaabcb', 0, 1))
console.log(1 === stringReduction('cacbbabab', 0, 1))
console.log(1 === stringReduction('bbccaaabbccbccaaaba', 0, 1))
console.log(1 === stringReduction('cacbbacacaaacababbbabbcbbccbbcaaaaabaccaaaccaaaaccaababccbbbbccbccbbcabcbbaccacbaaccaccbbbcabccbcacc', 0, 1))
console.log(1 === stringReduction('bcabccabaabbaaaca', 0, 1))*/
