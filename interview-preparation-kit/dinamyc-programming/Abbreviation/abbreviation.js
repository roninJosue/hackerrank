const abbreviation = (a, b) => {
  const sizeStringB = b.length
  if (sizeStringB > a.length) return 'NO'

  let startB = 0
  let sum = 0

  for (let i = 0; i < a.length; i++) {
    const currInUpperCase = a[i].toUpperCase()
    console.log(`String a: ${a[i]}, index: ${i}`)
    //console.log(`String b: ${b[startB]}`)
    const currLetterIsUpper = a[i] === currInUpperCase

    const check = currInUpperCase === b[startB]

    if (!check && currLetterIsUpper) return 'NO'

    else if (check && (currInUpperCase !== a[i+1] && !currLetterIsUpper)){
      startB = startB < sizeStringB ? startB + 1 : startB
      sum++
    }
  }

  console.log(`Here ${sizeStringB} ${sum}`)
  return sizeStringB === sum ? 'YES' : 'NO'
}

console.time('abb')

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

const test = abbreviation(
  'abAxxaBa',
  'ABA'
)
console.log(test)
/*const test10 = abbreviation(
  'OVJZKEFYZSXQTYZGaQCQZNVMGVHRLVGJJBACNFCUWKGRDAcMJPTUAEHHSODHILKNQSTLTQOJHSKYOEBQQWNWTNCZCFOIURGTLESWSOAALWDIOWfCDMPJAROWSJJIOBMZYZVVXPMFAMINSWOLKOLJKRALZQMXBWTFRPHADEVUVFWHEMDSTRVBSKHARYXCQZCRZFAVYKKWQSOLKXCMpNMDMPWSOHUAGZBUOSWWIKVSNSdng',
  'OVJZKEFYZSXQTYZGQCQZNVMGVHRLVGJJBACNFCUWKGRDAMJPTUAEHHSODHILKNQSTLTQOJHSKYOEBQQWNWTNCZCFOIURGTLESWSOAALWDIOWCDMPJAROWSJJIOBMZYZVVXPMFAMINSWOLKOLJKRALZQMXBWTFRPHADEVUVFWHEMDSTRVBSKHARYXCQZCRZFAVYKKWQSOLKXCMNMDMPWSOHUAGZBUOSWWIKVSNS'
)*/

console.timeEnd('abb')
/*console.log(`test1: ${test1}`)
console.log(`test2: ${test2}`)
console.log(`test3: ${test3}`)
console.log(`test4: ${test4}`)
console.log(`test5: ${test5}`)
console.log(`test6: ${test6}`)
console.log(`test7: ${test7}`)
console.log(`test8: ${test8}`)*/
//console.log(`test9: ${test9}`)
//console.log(`test10: ${test10}`)