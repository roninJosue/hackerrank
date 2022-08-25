const abbreviation = (a, b) => {
  const lenStringA = a.length
  const lenStringB = b.length

  let resolve = Array(lenStringA + 1)
    .fill(false)
    .map((e, i) => {
      //console.log(`index: ${i}, value: ${e}`)
      return Array(lenStringB + 1).fill(false)
    })

  resolve[0][0] = true
  for (let i = 1; i <= lenStringA; i++) {
    let isLower = a[i - 1].toLowerCase() === a[i - 1]
    if (isLower) {
      resolve[i][0] = resolve[i - 1][0]
    } /*else {
      DP[i][0] = false
    }*/
    //console.log(DP[i][0])
  }

  for (let i = 1; i <= lenStringA; i++) {
    //console.log(a[i])
    for (let j = 1; j <= lenStringB; j++) {
      const isUpper = a[i - 1] === a[i - 1].toUpperCase()
      //console.log(`a[${i - 1}]=${a[i - 1]}, b[${j - 1}]=${b[j - 1]}`)
      if (a[i - 1].toUpperCase() === b[j - 1] && isUpper) {
        resolve[i][j] = resolve[i - 1][j - 1]
        console.log('cond a')
        console.log(`[${i}][${j}] = ${resolve[i - 1][j - 1]}`)
      } else if (a[i - 1].toUpperCase() === b[j - 1] && !isUpper) {
        resolve[i][j] = resolve[i - 1][j - 1] || resolve[i][j - 1]
        console.log('cond b')
        console.log(`[${i}][${j}] = ${resolve[i - 1][j - 1] || resolve[i][j - 1]}`)
      } else if (a[i - 1].toUpperCase() !== b[j - 1] && isUpper) {
        resolve[i][j] = false
        console.log('cond d')
        console.log(`[${i}][${j}] = false`)
      } else if (a[i - 1].toUpperCase() !== b[j - 1] && !isUpper) {
        resolve[i][j] = resolve[i][j - 1]
        console.log('cond c')
        console.log(`[${i}][${j}] = ${resolve[i][j - 1]}`)
      }
    }
  }

  console.log(resolve)
  console.log(resolve[lenStringA][lenStringB])
}

console.time('abb')

abbreviation('beFgH', 'EFH')
//abbreviation('abbcB', 'B')
//abbreviation('abcBc', 'B')
//abbreviation('abAxxaBa', 'ABA')
/*const test0 = abbreviation(
  'AfPZN',
  'APZNC'
)

console.log(`test0: ${test0}`)*/

/*const test1 = abbreviation(
  'SVAHHHMVIIDYIcOSHMDUAVJRIBxBZQSUBIVEBHfVTZVSHATUYDJGDRRUBQFHEEEUZLQGXTNKFWUYBAeFKUHSFLZEUINBZYRIXOPYYXAEZZWELUPIEIWGZHEIYIROLQLAVHhMKRDSOQTJYYLTCTSIXIDAnPIHNXENWFFZFJASRZRDAPVYPAViVBLVGRHObnwlcyprcfhdpfjkyvgyzpovsgvlqbhtwrucvszaqinbgeafuswkjrcexvyzq',
  'SVAHHHMVIIDYIOSHMDUAVJRIBBZQSUBIVEBHVTZVSHATUYDJGDRRUBQFHEEEUZLQGXTNKFWUYBAFKUHSFLZEUINBZYRIXOPYYXAEZZWELUPIEIWGZHEIYIROLQLAVHMKRDSOQTJYYLTCTSIXIDAPIHNXENWFFZFJASRZRDAPVYPAVVBLVGRHO'
)

const test2 = abbreviation(
  'WIRUQDCAQUTtZVVAzLKMVWIOXLBESKUQSUOAEHEFMMhwwiyrqhaiixtqhaynwcsoihabohxepjbyroaglaobfwwzymlijsdhdsqlxazqggesnhdnblqbgouwjyowpjfmbshfenrtcoqyszmpamoaehnepi',
  'WIRUQDCAQUTZVVALKMVWIOXLBESKUQSUOAEHEFMM'
)

const test3 = abbreviation(
  'EPgDKTFPMjMXHIOYEFAFDWqNXNXCYOQwXOYDHNEJGBIKZYxiPrUALJFEVMRJEVKWZXNEMMPWAXMCAOjAsAGBhYTTKZHITGSYQQGyUMSLVDSFWOLJICNEWUBOMNOBOuFKUMREWGTObXRFKORKVUWNZMWCPXJGQNJETWHyKPNBYXLfWYUXQIXVVHFMGPNLcOKGRQFCADNCRmfBSbZJwLSWEpXvELKSDUMKsZlUHNYFEf',
  'EPDKTFPMMXHIOYEFAFDWNXNXCYOQXOYDHNEJGBIKZYPUALJFEVMRJEVKWZXNEMMPWAXMCAOAAGBYTTKZHITGSYQQGUMSLVDSFWOLJICNEWUBOMNOBOFKUMREWGTOXRFKORKVUWNZMWCPXJGQNJETWHKPNBYXLWYUXQIXVVHFMGPNLOKGRQFCADNCRBSZJLSWEXELKSDUMKZUHNYFE'
)

const test4 = abbreviation(
  'XWUTAMOTDYULFGPIZVLGEVUWTNCDFWMDMGOADGOGYWIKACOARBPBGCCEQZWCURWCDSFCCWVIRZJNVYWUXHNXABVQXUNGEQWSDJAMIQBDLRPHUVLMRXLDJIWKRWBDKIACCPGVXINRCSQNBWDVEVNVLGLSCCSALXRKICOGTOHYVXUUSMZCFMXUDEESPXPMBXRJSQGWBUXMXNJDWZVLWPVTNSJYVTPCDTWSCJFINKELQCDVPPXZISqmgnrzwt',
  'XWUTAMOTDYULFGPIZVLGEVUWTNCDFWMDMGOADGOGYWIKACOARBPBGCCEQZWCURWCDSFCCWVIRZJNVYWUXHNXABVQXUNGEQWSDJAMIQBDLRPHUVLMRXLDJIWKRWBDKIACCPGVXINRCSQNBWDVEVNVLGLSCCSALXRKICOGTOHYVXUUSMZCFMXUDEESPXPMBXRJSQGWBUXMXNJDWZVLWPVTNSJYVTPCDTWSCJFINKELQCDVPPXZIS'
)

const test5 = abbreviation(
  'ALRIGJCXcFvZDTYFKWEEJSpayhsytgccieascmcgdejyunrwguxnuxneurbgfegnfpwbxsuolsxchasjegjdhwpzmwsyocdfnoiajkxugbliytqsthglmkawozahjsrhwdojwnpyycbbgxwxlsbslapslyphdxqjdgpplhcpug',
  'ALRIGJCXFZDTYFKWEEJS'
)

const test6 = abbreviation(
  'QGBOZKPCPMvEHGOFRWOXUOBCZDADERSPXNNJPOjMNUIHFZRACZJZWMZSNHJHJUYNCHSJKFDSLFBGKVYFJdkfxesjrixmzefcgewgrnn',
  'QGBOZKPCPMEHGOFRWOXUOBCZDADERSPXNNJPOMNUIHFZRACZJZWMZSNHJHJUYNCHSJKFDSLFBGKVYFJ'
)

const test7 = abbreviation(
  'lHJCJMWDFhSMRRZUKEUJxRZGVWATJtFRJPOOWkFEIEKsYBVILWARcDISwXAVPOYJHWRNHUQNDBUSRGIRIZTMHdXxodmgzkfxbpperyhufxymrphzkyzewldrijewezvobdshebnbtzxkupcvgrscyscrtxuwsmywoyuuxvyzxajccydqdngartsmbeptpabthasbgqccvzqvbmnokjwwqpzqcqqb',
  'HJCJMWDFSMRRZUKEUJRZGVWATJFRJPOOWFEIEKYBVILWARDISXAVPOYJHWRNHUQNDBUSRGIRIZTMHX'
)

const test8 = abbreviation(
  'TIJTQKlOTDVMEMKKMNYZtZIWLZOLJPPGCGTGTQBKILAXYMDXOOQMONZYXDZSgSVGJBmIIXXaTOLdMLbSCODRIUANIBRIQLVSXokicxpigmnirkneh',
  'TIJTQKOTDVMEMKKMNYZZIWLZOLJPPGCGTGTQBKILAXYMDXOOQMONZYXDZSSVGJBIIXXTOLMLSCODRIUANIBRIQLVSX'
)*/

// const test9 = abbreviation(
//   'MCLGDNAYZOVXJqJDAYrFHrBYZOUDBGEFfBTBZpNEZLURWEcDEBJQWIITUTNEteBHYYKOEGROMXmLEudSEWlUEFFTvINEHWNFObNOMWTNJMIyBEXTWBWOAKHNZKeEdCFuUSfAPXXZUZTDCVYmDFTSSGECgOHOQHSPEBUUWTspaviedpoeh',
//   'MCLGDNAYZOVXJJDAYFHBYZOUDBGEFBTBZNEZLURWEDEBJQWIITUTNEBHYYKOEGROMXLESEWUEFFTINEHWNFONOMWTNJMIBEXTWBWOAKHNZKECFUSAPXXZUZTDCVYDFTSSGECOHOQHSPEBUUWT'
// )

// const test = abbreviation(
//   'NZKeEdCF',
//   'NZKECF'
// )

/*const test = abbreviation(
  'abAxxaBa',
  'ABA'
)
console.log(test)*/

/*const test = abbreviation(
  'abAxxaBa',
  'ABA'
)
console.log(test)*/


console.timeEnd('abb')

