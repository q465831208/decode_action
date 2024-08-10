//Sat Aug 10 2024 14:33:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
目标:  睡觉宝App
码子:  

变量：捉包https://mapi.shuijiaobao.cn/login/code域名 body里的equipmentCode=xxxxxxx 同时header里也包含这串 (#这是设备标识，多账号自己想办法)

格式：export sleep="ua=5201314"  多账号换行隔开
cron：23 15 8,12,18,21,23, * * *
CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

交流群：https://t.me/meetclover
*/

const $ = new Env("\u7761\u89C9\u5B9D");
let envSplitor = ["\n"]; //多账号隔开方式，默认换行可自定义
let iphone = "HUAWEI"; //设备标识，可以不改
let app = "2.0.5"; //app版本
let ah = "10"; //安卓版本 (7.1就是7 | 8.2就是8 不要具体到小数点)

var _0xods = "jsjiami.com.v6",
  _0xods_ = ["\u202E_0xods"],
  _0xdbdb = [_0xods, "5LmJ6LSw5Yyf", "N8OXZMKBwqXDu8OqU8KUGw==", "w5rDumPDsU8GWHkaI8O4TQ==", "JTHChMKYwqfDhRUCEMKrwpEZKcKu", "w4vDsH3DqUsLSQ==", "woTClMKtwqIv", "worDpW/CiQ==", "NnFlw7XDsBHCnQ==", "wrXCqsOqwp3CsA==", "U8Ofw7/DtsK/", "wrZxUMKiwq0Fwos=", "wpXCi8KlwrI=", "CjvChMKLwrbDgw==", "EcOQwrHDmxM=", "K8OBThjCug==", "AsKRMzzDrg==", "WcORw4/DlcKV", "w6pQw7TCsgw=", "KsKzw4IGbA==", "wqbDtsKvwqHCoQ==", "eMKEwpzDqxM=", "flRgw58=", "w5U7FsK7wpY=", "JGpBOsKE", "O8KFw4MnZAvDtQ==", "wqRgw4U=", "6Kyp5rGW5aSA6Lej", "w7ZQw4LCrwRlO8KGDA==", "wq5/QsKAwqo=", "GMK1w44BwqU=", "OMOZb8O3Z1XDhA==", "J8KZBOairOW9gOmVqOisgQ==", "c8Ohw6nDhcKk", "HV5aBcK9Lg==", "wpPCiMKaw4El", "wrpqw5Edw41MfA==", "KsK9UH9c", "wqrChl/DnHo=", "AcOCbBnCuw==", "w47Ci1fDmSw=", "Onpsw7DDug==", "w7rCh2jDkD0=", "VF0uwrM=", "wpvCgsOswoU=", "VEkWasOH", "HMKOw7g=", "6La25Y65BA==", "NcOKdRk=", "w6PCrcKkW34=", "6LW95Y2cQw==", "NsOBXg==", "w5QvFcKxwrg=", "wqzCgVXDh3jCuQ==", "wp3DisOXw5jDvw==", "wrPCgcK3w6IM", "GcKSw5Eiwq1e", "w5xHwqs=", "w5MJNMKwwqY=", "VlQaYMKZwr/DtFzCrsKTE8Olw4QZBQ==", "wonCkcOhwotfEVN3YsOrFMOKRwU=", "w7sfEcKewqY=", "bMOWw6jDqMKU", "IMKOw5QtcA==", "WsOqwp7ClQ==", "woHDpG/ClXQ=", "JMKFKAnDuSQn", "wp1sw4cWw7Y=", "FMORwo7DiAs=", "wpRUQMKCfQ==", "A8KVw61/wqNIdsK/", "VVkcwqsMM0o=", "wpvDlcKVwr7Cmw==", "w5jCq2LDkRA=", "wofDuMO4wps=", "dMOYw7HDtsKTcHY=", "wofDisKcwoDCog==", "EFNUGQ==", "cMOSw7fDk8KYZktSdlHDlmA=", "CnjCjEzDig==", "wpXCgsOvwpXCug==", "w7bDskMbDA==", "AMKOw6w5", "Z1tIw5nChw==", "w6HDo0wxJQ==", "woVgSsK7dQ==", "wpZQQcKMfMOTPQ==", "M8OfbAzCh17DmsKLaXAOw5fCj8KbYQTCnMOVGwsIaMKNFQ7DqcOLUxVGwofDqT4rwoh+wpcc", "SFoMZMOZ", "XcOTw6vDpcKRVcOaw6kXwpNhwrBPGw==", "LnV2w7DDuA==", "DsKXNhTDkw==", "Ql0hwq8O", "wp3CjMO8wp0=", "DkxWw6kHBWnCuQ==", "B3fCnEg=", "w4XCusKxQlUwA8KO", "KMOOew7CkRDCqsOPYWg=", "w7/ClX/DkRHDhmzCiA==", "w5TDv1/CiA==", "w7fDpxg7JsKhwqo9", "w5LCgljDujU=", "eMOcw6TDsw==", "VEcowqgMP3HDosKkPsOn", "wpvCgcKvwqwvw5w=", "wqjCi8Otwp1WGk4+", "PcKmVGlIwqw=", "HsK7O8Ox", "eV0UNsO0WSPCgMKLSBY=", "w6JLw5zCojVsJ8KNFx3CmQ==", "HMKOw7gMwqdfV8K+wrJCAMKJ", "6LSQ5Y+FEQ==", "w6tFw53Cow==", "JueZhOW9puaKi+WLkUvkva/nmZLnop3lrqc=", "wqrnjZbmnJPphbLluZk=", "Ey3Cj8KewovDhQdA", "w6XDuxEtMMKswqM7w5U=", "w5jCgsO4wrvCgCLDuRXCsA==", "wrDCiFzDjGs=", "TsKAwqXDoBhGPA==", "JumHruW4suS6lui3vUvml6/msIPmjYznjYc=", "w6sZJAMkeibDgTXCgsO7dQ==", "DmXCjw==", "woHDucK2wrbCpDQN", "w6xIw7/CnCQ=", "D8OvwrPDtw==", "d8OPw5DDucKY", "w67DuxoIAcKrwoI9w49ew5bDnw==", "6LWZ5Y23wps=", "wqTCn8Oiwpo=", "LeW/oeayi+ayrOiNvuW+rA==", "woHDtsOowoM=", "wrl7XcKiwpcZwo3DqhhowoA=", "w6LCkm7DkyvCkiXDiHtHMi7DoMOaw4nDu8OIwonCs8KQwrAOcFU7w4R7VMK4wq7DgX7Ci1LChnnChA==", "w4LDsV7Ch8KA", "PMOObCjCnQnCkA==", "woPCi8KSwr8pw511Jg==", "MsOrfcO6QA==", "BGp7", "a8KCCQ==", "woXCnMOkwqPCp1TDjMKXwrvDgw==", "A8Kxw7DCu0LDr089wqwZH8K9TQ==", "cMKifsOE", "wrHCnXDDjXI=", "XGFGw43CiA==", "w4t5wpjDnxo=", "wovCr8O/wqvCuQ==", "JcKPw5cJZhnDniPDg8OjwrAs", "Fl1EAQ==", "HGZlH8OWEDI6Vg==", "5aSRwoLojKnlvJs=", "w4PCoMKzXkM3C8KHCw==", "wpbDvsO7wozCrVjCg8OLwoIBw5JKPMK9MA==", "RsOuwoDCn8KSwrd9", "AlNDFA==", "AcKkw4cdUg==", "wqnDusKzwq7Cow==", "KMOmOsOIFMKOwoZSw4jCosOlbcKCPwsaZsOAXCJ/w73DuBnDoMOWc14QwpPDlknCiXLCgENeWyXDsw==", "w6XDoFIGCQ==", "GMOlwrTDlxvDvhg=", "wrHCnUjDnG7CtVQV", "wr5Vw6sBw4Y=", "woPDr3I=", "wovClcKtwpQow5h+JHhi", "BlNbBcKw", "EHZuw4PDnA==", "wolsRsK8wrw=", "OcKbw7s8wp8=", "wonDuMO7wqPCnEzCosOTwpMaw6tQ", "6LWS5Yypw50=", "w57Dv0bCjA==", "UMOqworCr8KSwqhrw5c=", "w67Cg2nDgA==", "wqDDikhJ552L6KaW6aK86aKX6YWo5biC", "H15Hw7o=", "w5TDv1LCtsKIT8KYCw==", "HsK/PMOz", "OMOTeMKuw6TDs8O1Tg==", "JMOzJsOUFg==", "M21oEsKU", "McKww4c/woM=", "U8ODw5/DlcK7", "XMONwobCtMKH", "K8KLIRrDsiENw5jCtEjDll0=", "6LS65Y2Kw4s=", "w5fDtGDDoA==", "B3fCkXvDl2vDmjPDoQ==", "ccOOw7c=", "w7IhO8Ks", "AXnCjFA=", "JMOzN8OqAsODw4gPw4E=", "wrXCnWjDnA==", "wq3Cm8O7wqtTEkI=", "w77CiUnDlyrDgWTCgA==", "wpFPZ8KhdQ==", "Xz8y", "RgVcBsK6MREsJUkIesKLHTdj", "w4vCgsO/wrrCsQ==", "J8OadCPChwjCkMOBdG0=", "IsKVMzLDrCgmw5nCtH7Dk0vCnSs=", "TMONw7XDqcKP", "EsO4wprCl8KQw7w=", "EEYzwroFZx/Cu8O4", "wpPCqMO3wrd4", "G8O/e8KCw5s=", "w5fnn63luaXlk6noj6/lvL8=", "C252EA==", "wpFGV8KRT8OMNhvDmg==", "DmtmLsOuFjA4ZsOtwpnDsMOh", "BV1ZFA==", "wot1w6gLw6Y=", "w5JPw5nCkzk=", "w5coCsK/woU=", "LsOXcsKew6TDrMOj", "wrLCiMKhw6gQw7lB", "woFNRsKRccOGLA==", "E3nCm10=", "w57DllXDkmI=", "w7LDmUEHJA==", "P8KlDwHDlQ==", "w55MwqnDuSEeWg==", "w7bDuy49HcKmwqI1", "wo9QSw==", "w7N8Rw==", "woTCp0fCj8KATcKCDMOQF8Oaw6XDl8K3wpHCjQ==", "CMKvw6pmfh4rwo1IAA==", "EcKvw7NQfR8rwoZMI8KGwpBEcg==", "wpTCuzvDiDxcCzhVwrpFw6Yh", "CAtOeQ==", "w77Cj3fDhgvDnGvCimYb", "HkgXYsOaw68=", "w47DumrCiVNUQHoGwrALw7ApesKtwoTDt8O8", "L8OUYcOufQ==", "JT/CusKmwqs=", "wq3CnsK1", "fGsuA8OQ", "woBcXMKNdcOXGw/DkFhyZQ==", "wpfDssOvwo3Cnl7CiQ==", "wqLCisO7wo9JRQh1Q8OvCsOEHR7DusKkZsKiBnXDrChDw7XCozVxYGAZcsO4A8KEwqrCpsOWwpnCj8KwwqTDmj/CmjHDpg==", "MsO9O8OWAw==", "w4lmw7TCjQ4=", "DTvCkw==", "CAtO", "wpLCl8KCwoXCv05uFMOvwo/CpQ10", "w5XCp8Kswp4=", "NMO9JcOdCQ==", "w7xwwrbDmjg=", "McKlw5QZwqw=", "wq57QsKy", "wobDmErCo2Q=", "VFQZRMOawrbDm1DCssKTG8O5", "6LSS5Y28wqg=", "wrjmg6fpp7HmirHljpPojp/lvbs=", "wpfDvcKxwrg=", "6LaZ5Yyaw48=", "wpnChcKswq4=", "M2dj", "w6QEJiM+eyfDnCXCjsOvXyESw6EK", "w7LDuw49", "wr3CkE7Dom4=", "H8OkU8Ojcw==", "GMKVw6s9wroBNsO+wqtKFsKZw58NfMOcFA7DhmRNdivCgsKQwqE1Ik/DpynCkHvDjMOofsK/w4MGwrPDtgHDssOZb8KcwrRlUsOi", "wqfCiMKmw5MVw6JB", "w5vCrMKt", "BgJ6", "w6w/M8KKwqxuwo1rwqkR", "SgN6w7JQJhzCvMO7esOvw4fDgQ==", "w5zChjcDfA==", "w693w53ChAY=", "wp/Ds8KiwpjCpiYmwohlMMKhJg==", "6Lej5YyFQA==", "w5dIwrDDiA==", "wprCl8Km", "HW1WN8O7", "w4fCnFfDlDE=", "bcOewoTCosKW", "6LeD5Y2gw4c=", "w74vMsKw", "JuW8v+WQnOefuuimh/Cloqs=", "w53DrUw=", "w7/CncK2R1I=", "wqbCkcOowr5UG2k1WsOnHMOU", "w6kXLic=", "QeaDjemnveaLgeWOlzgl", "wqPCgsK+w6sZw6xQw4FpR8OSwqFfw7bDtMKe", "w6LCkm7DkyvCkiXDiHtHMi7DoMOaw4nDu8OIwonCs8KQwrAOcFU7w4R7VMKjwq3DiX7DlA7CjHHChkrCkikmK8OBd1/CoBEgw7zDnQ==", "IcK8TGVJ", "e8OYw6TDhsKfb2A=", "LMKBPw==", "w7bCl3bDvCvDhG/CgmZa", "SMK6w4PDiMOOwr0qwpF3w4/DucKgw6M=", "w57CvMK5UnksWA==", "w747MsK3wrpw", "ZsO7KsKF", "wozDk8OQw5/Do1c1Qg==", "BcOowobDsBs=", "Q3tEw7fCnA==", "6LWc5YytFA==", "6LW45Y+jXw==", "LHF3w77DuRXCiw==", "E0tHw6t0RCDCvcOxw5lBwpPDpsKqAMOXwo/Di8O3CMKVSsKBw7o/ExTDvXIyeMO0aQHDvMKOLsKJWB3Cu17Co8OyGh8aw5BxLcOew6cnF8OtwqwBw5bCrlg=", "wqnCkcOrwpo=", "AsK/w6pQaQ==", "PcKJw50t", "Anxl", "woPDoMOkw4/DvA==", "M8KNKz4=", "CjHCjcKtwqzDjy9AKMKnwpkH", "F8K/w6hraBMq", "MMK8XW4=", "HcKIw4ceTg==", "wobDuMO4woc=", "w4zCqAU0WA==", "w77or6Pmo7HmnKPljqnlrrHmi67lnq8uSuafiOWZseS5vMK/KcKYCnLDlMK2PXbDtMOG5aWR6I+q5Yyl5Y+v5a6t", "BTHCjsKJ", "POitiuWJr+WmiOWnsuS9veeUrVJw6Ye16KG154625aGO6YOG5omD6K6o6IGD57Cm5L+f6IOz6KeL6ZuN", "bsOYw6PDvcKadGA=", "wrXDgMK5w7LDsmzCu1HDs8OlScObwq9Mw5XDpui1r+WPmOaipua2qVPDvsOQV2zDisKKwp7DicOIPMK9w6zCr8OG", "wrDDigcVciwZbcKI", "w44fLhcw", "w4LCpsKTV3U=", "ZVwuwrsE", "wpvDiMOWw5jDqVsyQ8K9", "wqPCm3fDnHnCrg==", "w4npgZbnnpLlj4rvvY7CtuKbue+6j+W+oeW9geS5guW9oEflvJLmn47lmJ3lkqnmj7/phZfmgIfvv4tIX+atvuiHtOacvuaeh+Wnk+S7o+WsuOaVuOS7tuWLt8Oz5pSE772iw781woMSOD7DsWcEMcK/AgfCpcK5wo1PwrZ8UMKwwoNScVnCmOaake+8scOcw55rwrbDtDxmcMKJaj7DocKoTg3DqjcywpU/w5vDuAIZUQ==", "wo5WQcKEUg==", "G8KoCMOFLQ==", "w7zCpRA+VQ==", "woLDicOVw7zDoVYSScKtw5HCv0Q=", "K8OHSsO+", "w4nCjMO4wrbCuw==", "cMOYw77DtcKCag==", "wqTDscO8w63Dvg==", "GF5dw4krCms=", "RMO+woDCmA==", "wohaVcKKfg==", "w73Ch3PDlw==", "AnrChA==", "M8OiTjXCpw==", "EGbChEDDhg==", "w7rCk2nDiw==", "woTCjcKmwqU=", "w5fDsHrDiUMbWA==", "JMKyUH8=", "XcKJwro=", "PsKmw57DncOTw6w1wo5sw5XCqMK9wrItR8OR5a2V5peX5Lug5Yq5IMOQVsOzDzM2w7ViIxh1woQIag==", "w6PDgXIaFw==", "wodCdMKQRw==", "w4/CmMOnwrc=", "w5rDp2jDpF4NYyYKP8O6e0NwwrJz", "5L6h5oOxEcOJ542U5ZyO5pSd6ZaL", "54Oqw7PpnafmiZjljYzmlKjplLM=", "w7nCsQkcfA==", "wr1ZQcKlwp4=", "M1vCjWfDnQ==", "J8Kww6JIaQ==", "NMKwBw/Dmg==", "w7HDgDwdKQ==", "wrDCmMKhw68=", "w4lcwq7DhQ==", "P8OCdhLCkRbCtsOWYXAKw5s=", "wpvDo8OUw7HDtg==", "w7VowrjDqwk=", "F3Rfw5gD", "FsK1KMORIRXCoMOlwrfCrsOMw68=", "5oO36aSbeWLnj7rlnLbmlp7plZo=", "54GAw43pn5bmiq/ljrXml47plZ0=", "w4DCqMKmQ3k=", "6LWh5YyTHQ==", "WFMnwq8=", "GMKxw6E=", "wp7DtsO1w6nDjA==", "wpNgWsKAUQ==", "wqJew7Ijw6s=", "wprDssKhwrzCsA0O", "wqRgw4Uzw49eVydSKnnCpQ==", "ZeW+ouWSseefreikqPCRkJs=", "FS7ChsKFwrY=", "w4DCvMKnWA==", "w5PCgsOz", "AUfCqV7DpA==", "w6lLw5c=", "5Ya05oqM5Yir", "jSZsjFRiamwSi.cWWqoCm.v6Np=="];
if (function (_0x623fbf, _0xc0bc99, _0x3fad76) {
  function _0x528bc5(_0x5b6ce0, _0x94e0ea, _0x5c4f64, _0x5ee67e, _0x204ab1, _0x5181d1) {
    _0x94e0ea = _0x94e0ea >> 8, _0x204ab1 = "po";
    var _0x530bda = "shift",
      _0x2a9b6b = "push",
      _0x5181d1 = "\u202E";
    if (_0x94e0ea < _0x5b6ce0) {
      while (--_0x5b6ce0) {
        _0x5ee67e = _0x623fbf[_0x530bda]();
        if (_0x94e0ea === _0x5b6ce0 && _0x5181d1 === "\u202E" && _0x5181d1["length"] === 1) {
          _0x94e0ea = _0x5ee67e, _0x5c4f64 = _0x623fbf[_0x204ab1 + "p"]();
        } else if (_0x94e0ea && _0x5c4f64["replace"](/[SZFRwSWWqCNp=]/g, "") === _0x94e0ea) {
          _0x623fbf[_0x2a9b6b](_0x5ee67e);
        }
      }
      _0x623fbf[_0x2a9b6b](_0x623fbf[_0x530bda]());
    }
    return 1132752;
  }
  ;
  return _0x528bc5(++_0xc0bc99, _0x3fad76) >> _0xc0bc99 ^ _0x3fad76;
}(_0xdbdb, 434, 111104), _0xdbdb) {
  _0xods_ = _0xdbdb["length"] ^ 434;
}
;
function _0x1b08(_0x2699a9, _0x501e82) {
  _0x2699a9 = ~~"0x"["concat"](_0x2699a9["slice"](1));
  var _0x4a9879 = _0xdbdb[_0x2699a9];
  if (_0x1b08["sdiJVl"] === undefined) {
    (function () {
      var _0x589c6d = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0x5b08bd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x589c6d["atob"] || (_0x589c6d["atob"] = function (_0x4ef491) {
        var _0x11657b = String(_0x4ef491)["replace"](/=+$/, "");
        for (var _0x26c666 = 0, _0x2ad2ff, _0x4cbc11, _0x425aa0 = 0, _0x51f58a = ""; _0x4cbc11 = _0x11657b["charAt"](_0x425aa0++); ~_0x4cbc11 && (_0x2ad2ff = _0x26c666 % 4 ? _0x2ad2ff * 64 + _0x4cbc11 : _0x4cbc11, _0x26c666++ % 4) ? _0x51f58a += String["fromCharCode"](255 & _0x2ad2ff >> (-2 * _0x26c666 & 6)) : 0) {
          _0x4cbc11 = _0x5b08bd["indexOf"](_0x4cbc11);
        }
        return _0x51f58a;
      });
    })();
    function _0x4e130a(_0x327155, _0x501e82) {
      var _0x44b31e = [],
        _0x58157c = 0,
        _0x1d33e,
        _0x4086cd = "",
        _0x4880bf = "";
      _0x327155 = atob(_0x327155);
      for (var _0x5f7f12 = 0, _0x11bf85 = _0x327155["length"]; _0x5f7f12 < _0x11bf85; _0x5f7f12++) {
        _0x4880bf += "%" + ("00" + _0x327155["charCodeAt"](_0x5f7f12)["toString"](16))["slice"](-2);
      }
      _0x327155 = decodeURIComponent(_0x4880bf);
      for (var _0x2a1a7e = 0; _0x2a1a7e < 256; _0x2a1a7e++) {
        _0x44b31e[_0x2a1a7e] = _0x2a1a7e;
      }
      for (_0x2a1a7e = 0; _0x2a1a7e < 256; _0x2a1a7e++) {
        _0x58157c = (_0x58157c + _0x44b31e[_0x2a1a7e] + _0x501e82["charCodeAt"](_0x2a1a7e % _0x501e82["length"])) % 256;
        _0x1d33e = _0x44b31e[_0x2a1a7e];
        _0x44b31e[_0x2a1a7e] = _0x44b31e[_0x58157c];
        _0x44b31e[_0x58157c] = _0x1d33e;
      }
      _0x2a1a7e = 0;
      _0x58157c = 0;
      for (var _0x3717e1 = 0; _0x3717e1 < _0x327155["length"]; _0x3717e1++) {
        _0x2a1a7e = (_0x2a1a7e + 1) % 256;
        _0x58157c = (_0x58157c + _0x44b31e[_0x2a1a7e]) % 256;
        _0x1d33e = _0x44b31e[_0x2a1a7e];
        _0x44b31e[_0x2a1a7e] = _0x44b31e[_0x58157c];
        _0x44b31e[_0x58157c] = _0x1d33e;
        _0x4086cd += String["fromCharCode"](_0x327155["charCodeAt"](_0x3717e1) ^ _0x44b31e[(_0x44b31e[_0x2a1a7e] + _0x44b31e[_0x58157c]) % 256]);
      }
      return _0x4086cd;
    }
    _0x1b08["vmlRtr"] = _0x4e130a;
    _0x1b08["GqoUlc"] = {};
    _0x1b08["sdiJVl"] = !![];
  }
  var _0xfdf934 = _0x1b08["GqoUlc"][_0x2699a9];
  if (_0xfdf934 === undefined) {
    if (_0x1b08["Ywrneo"] === undefined) {
      _0x1b08["Ywrneo"] = !![];
    }
    _0x4a9879 = _0x1b08["vmlRtr"](_0x4a9879, _0x501e82);
    _0x1b08["GqoUlc"][_0x2699a9] = _0x4a9879;
  } else {
    _0x4a9879 = _0xfdf934;
  }
  return _0x4a9879;
}
;
let httpResult, httpReq, httpResp;
let userCookie = ($[_0x1b08("\u202B0", "!]oS")]() ? process["env"][_0x1b08("\u202E1", "^szk")] : $["getdata"](_0x1b08("\u202B2", "YlpT"))) || "";
let userCGkey = ($[_0x1b08("\u202E3", "VOJY")]() ? process[_0x1b08("\u202E4", "Tv8h")][_0x1b08("\u202E5", "*Dww")] : $["getdata"]("CGkey")) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
const {
  machineId,
  machineIdSync
} = require(_0x1b08("\u202E6", "i(Id"));
machineId()["then"](_0x5e09b6 => {});
let uuid = machineIdSync();
class UserInfo {
  constructor(_0x290596) {
    var _0xe1841a = {
      "gyRTw": "content-type",
      "tVYYj": _0x1b08("\u202E7", "MSV8"),
      "UcedW": _0x1b08("\u202E8", "*Dww"),
      "hIPgS": function (_0x4b908b, _0x2a6dae) {
        return _0x4b908b !== _0x2a6dae;
      },
      "RMxrH": _0x1b08("\u202E9", "IfwJ")
    };
    this[_0x1b08("\u202Ba", "ZX5d")] = ++userIdx;
    this[_0x1b08("\u202Eb", "4$IG")] = this[_0x1b08("\u202Ec", "gaDu")];
    this["valid"] = ![];
    this[_0x1b08("\u202Ed", "jzER")] = ![];
    try {
      if (_0xe1841a[_0x1b08("\u202Ee", "IBkx")] === _0x1b08("\u202Ef", "$IoQ")) {
        this[_0x1b08("\u202E10", "JqCQ")] = $[_0x1b08("\u202E11", "VOJY")](_0x290596);
        this[_0x1b08("\u202B12", "*ISa")] = !![];
      } else {
        return Promise["resolve"](1);
      }
    } catch (_0x3b2164) {
      if (_0xe1841a[_0x1b08("\u202E13", "(bTu")](_0xe1841a[_0x1b08("\u202E14", "J^rk")], _0xe1841a["RMxrH"])) {
        urlObject[_0x1b08("\u202E15", "@F]h")] = body;
        urlObject[_0x1b08("\u202E16", "Tm*N")][_0xe1841a["gyRTw"]] = "application/x-www-form-urlencoded";
        urlObject["headers"][_0xe1841a[_0x1b08("\u202B17", "(bTu")]] = urlObject["body"] ? urlObject[_0x1b08("\u202E18", "Kp$K")]["length"] : 0;
      } else {
        this["ckValid"] = ![];
        $[_0x1b08("\u202E19", "Tm*N")]("\u8D26\u53F7[" + this[_0x1b08("\u202B1a", "E5!Z")] + "]CK\u683C\u5F0F\u9519\u8BEF");
      }
    }
  }
  async [_0x1b08("\u202B1b", "HhxN")]() {
    var _0x4b6b81 = {
      "jjFbN": function (_0x39ed0d, _0xae1f7d) {
        return _0x39ed0d !== _0xae1f7d;
      },
      "aUxXe": _0x1b08("\u202E1c", "abI6"),
      "IspOO": _0x1b08("\u202E1d", "VOJY"),
      "XdBYm": function (_0x36c3a2, _0x583100) {
        return _0x36c3a2 > _0x583100;
      },
      "BTDmd": function (_0x2e0b9d, _0x41b08e) {
        return _0x2e0b9d === _0x41b08e;
      },
      "uzGdw": "TxzAP"
    };
    try {
      if (_0x4b6b81[_0x1b08("\u202E1e", "A9Ud")](_0x4b6b81[_0x1b08("\u202B1f", "abI6")], _0x4b6b81[_0x1b08("\u202B20", "JqCQ")])) {
        return Promise[_0x1b08("\u202B21", "JqCQ")](1);
      } else {
        let _0x180164 = _0x1b08("\u202B22", "0R2X");
        let _0x12256b = "" + this[_0x1b08("\u202E23", "i(Id")]["ua"];
        let _0x31cd6f = _0x1b08("\u202B24", "IfwJ") + this[_0x1b08("\u202E25", "wi[P")]["ua"];
        let _0x2a9378 = populateUrlObject(_0x180164, _0x12256b, _0x31cd6f);
        await httpRequest(_0x4b6b81[_0x1b08("\u202E26", "jzER")], _0x2a9378);
        let _0x5bcfc8 = httpResult;
        if (!_0x5bcfc8) return;
        if (_0x5bcfc8["ok"] = 1) {
          this[_0x1b08("\u202B27", "*ISa")] = _0x5bcfc8[_0x1b08("\u202E28", "HhxN")][_0x1b08("\u202E29", "E6#k")]["accessToken"];
          this["key"] = _0x5bcfc8[_0x1b08("\u202E2a", "E5!Z")][_0x1b08("\u202E2b", "yNZR")][_0x1b08("\u202E2c", "0R2X")];
          this["id"] = _0x5bcfc8["data"][_0x1b08("\u202E2d", "J^rk")]["id"];
          this["equipment_code"] = _0x5bcfc8[_0x1b08("\u202B2e", "7OWV")][_0x1b08("\u202E2f", "G%%R")]["equipment_code"];
          if (_0x4b6b81[_0x1b08("\u202E30", "J^rk")](_0x5bcfc8[_0x1b08("\u202E31", "Tm*N")][_0x1b08("\u202E32", "*ISa")][_0x1b08("\u202B33", "fLlL")], 0)) {
            this[_0x1b08("\u202E34", "MSV8")] = _0x5bcfc8[_0x1b08("\u202E2a", "E5!Z")]["bubble_list"][0]["id"];
            this[_0x1b08("\u202B35", "526s")] = _0x5bcfc8[_0x1b08("\u202E36", "VgB!")][_0x1b08("\u202B37", "(Ic*")][0][_0x1b08("\u202B38", "to5a")];
          }
          $[_0x1b08("\u202E39", "VOJY")](_0x1b08("\u202E3a", "*ISa") + this[_0x1b08("\u202E3b", "to5a")] + _0x1b08("\u202E3c", "E6#k") + this["id"] + _0x1b08("\u202E3d", "J^rk") + _0x5bcfc8["data"][_0x1b08("\u202E3e", "e7$Z")][_0x1b08("\u202E3f", "G%%R")]);
          if (_0x4b6b81["XdBYm"](_0x5bcfc8[_0x1b08("\u202E28", "HhxN")]["userInfo"][_0x1b08("\u202B40", "@Z)q")], 10000)) {
            if (_0x4b6b81["BTDmd"](_0x4b6b81[_0x1b08("\u202E41", "!]oS")], _0x4b6b81["uzGdw"])) {
              await this["extract"]();
            } else {
              return Promise[_0x1b08("\u202E42", "5H9[")](1);
            }
          } else {
            $["logAndNotify"]("\u8D26\u53F7[" + this["name"] + _0x1b08("\u202E43", "E6#k"));
          }
        } else {
          $[_0x1b08("\u202E44", "jhl9")]("\u8D26\u53F7[" + this["name"] + "] " + _0x5bcfc8[_0x1b08("\u202B45", "E5!Z")] + "  \u26A0\uFE0F\u53D8\u91CF\u5DF2\u5931\u6548\u6216\u68C0\u67E5\u683C\u5F0F");
        }
      }
    } catch (_0x4a75ac) {} finally {
      return Promise[_0x1b08("\u202E46", "(bTu")](1);
    }
  }
  async ["sign"]() {
    var _0x367e34 = {
      "APTFI": function (_0x232846, _0x35b8e8) {
        return _0x232846 !== _0x35b8e8;
      },
      "OmNuy": _0x1b08("\u202B47", "to5a"),
      "AIoha": function (_0x1c7d86, _0x15ed15) {
        return _0x1c7d86 / _0x15ed15;
      },
      "iYDlK": function (_0x193bcf, _0x32dad7) {
        return _0x193bcf(_0x32dad7);
      },
      "QPHvA": function (_0x171aec, _0x27234e, _0x546ccb, _0x1e2896) {
        return _0x171aec(_0x27234e, _0x546ccb, _0x1e2896);
      },
      "rPErR": function (_0x35ef8b, _0x8b2d72, _0x20a54c) {
        return _0x35ef8b(_0x8b2d72, _0x20a54c);
      },
      "rBwWm": _0x1b08("\u202B48", "$IoQ")
    };
    try {
      if (_0x367e34["APTFI"](_0x367e34[_0x1b08("\u202B49", "IfwJ")], _0x367e34["OmNuy"])) {
        $[_0x1b08("\u202B4a", "G%%R")](_0x1b08("\u202E4b", "$IoQ") + this[_0x1b08("\u202B4c", "MSV8")] + _0x1b08("\u202E4d", "VOJY") + result[_0x1b08("\u202E4e", "@F]h")][_0x1b08("\u202E4f", "jEIF")] + "\u91D1\u5E01");
      } else {
        let _0x47e11d = _0x1b08("\u202B50", "J^rk");
        let _0x463be8 = Math[_0x1b08("\u202E51", "7OWV")](_0x367e34["AIoha"](new Date()[_0x1b08("\u202B52", "0R2X")](), 1000))[_0x1b08("\u202B53", "fLlL")]();
        let _0x3a891b = _0x367e34[_0x1b08("\u202E54", "OEaQ")](MD5Encrypt, "" + this["id"] + this[_0x1b08("\u202B55", "bLXe")] + _0x463be8 + _0x1b08("\u202B56", "OEaQ"));
        let _0x1af18d = "a|" + ah + "|" + app + _0x1b08("\u202E57", "HhxN") + this["equipment_code"] + _0x1b08("\u202E58", "$IoQ") + this["id"] + "|" + _0x463be8 + _0x1b08("\u202B59", "#A6R") + _0x3a891b + "|" + this[_0x1b08("\u202B5a", "!]oS")] + "|" + iphone;
        let _0x2b2e62 = "";
        let _0x50c929 = _0x367e34[_0x1b08("\u202E5b", "A9Ud")](populateUrlObject, _0x47e11d, _0x1af18d, _0x2b2e62);
        await _0x367e34[_0x1b08("\u202B5c", "Tv8h")](httpRequest, _0x367e34[_0x1b08("\u202B5d", "HhxN")], _0x50c929);
        let _0x2327a0 = httpResult;
        if (!_0x2327a0) return;
        $[_0x1b08("\u202E5e", "ZX5d")]("\u8D26\u53F7[" + this["name"] + "]\u7B7E\u5230\uFF1A\u7B2C" + _0x2327a0[_0x1b08("\u202B5f", "Kp$K")][_0x1b08("\u202B60", "bLXe")]["day_num"] + _0x1b08("\u202E61", "IfwJ") + _0x2327a0[_0x1b08("\u202E2a", "E5!Z")][_0x1b08("\u202B62", "yNZR")][_0x1b08("\u202B63", "@F]h")] + "\u91D1\u5E01");
      }
    } catch (_0x4bf773) {} finally {
      return Promise[_0x1b08("\u202E64", "4$IG")](1);
    }
  }
  async ["newList"]() {
    var _0x15099d = {
      "eVfoI": function (_0x7670b0, _0x22fad6) {
        return _0x7670b0 / _0x22fad6;
      },
      "vZIsg": function (_0xacf082, _0x277322) {
        return _0xacf082(_0x277322);
      },
      "NbjRI": function (_0x238306, _0x6ceb5e, _0x51bd18, _0x1f181c) {
        return _0x238306(_0x6ceb5e, _0x51bd18, _0x1f181c);
      },
      "Wxwzt": function (_0x334638, _0x35140e, _0x4caad6) {
        return _0x334638(_0x35140e, _0x4caad6);
      },
      "IzdqV": _0x1b08("\u202B65", "Kp$K"),
      "vCAmF": function (_0x368c56, _0x5cf51e) {
        return _0x368c56 < _0x5cf51e;
      },
      "dahlq": function (_0x256719, _0x3b1996) {
        return _0x256719 === _0x3b1996;
      },
      "AQXrJ": _0x1b08("\u202B66", "ZX5d"),
      "kaAYZ": function (_0x1557df, _0x531f09) {
        return _0x1557df !== _0x531f09;
      },
      "hFuDy": _0x1b08("\u202E67", "(bTu"),
      "iDrgD": "QeYnS"
    };
    try {
      let _0x36cb5b = _0x1b08("\u202E68", "#A6R");
      let _0x15214d = Math["round"](_0x15099d[_0x1b08("\u202E69", "abI6")](new Date()[_0x1b08("\u202B6a", "$IoQ")](), 1000))[_0x1b08("\u202B6b", "!]oS")]();
      let _0x320c69 = _0x15099d[_0x1b08("\u202E6c", "IBkx")](MD5Encrypt, "" + this["id"] + this[_0x1b08("\u202B6d", "gaDu")] + _0x15214d + "000");
      let _0x572103 = "a|" + ah + "|" + app + _0x1b08("\u202E6e", "fLlL") + this["equipment_code"] + "|1080|2267|0|" + this["id"] + "|" + _0x15214d + "000|" + _0x320c69 + "|" + this[_0x1b08("\u202E6f", "Kp$K")] + "|" + iphone;
      let _0x5ab129 = "";
      let _0x41dbf4 = _0x15099d[_0x1b08("\u202B70", "wi[P")](populateUrlObject, _0x36cb5b, _0x572103, _0x5ab129);
      await _0x15099d[_0x1b08("\u202E71", "jEIF")](httpRequest, _0x15099d[_0x1b08("\u202E72", "VOJY")], _0x41dbf4);
      let _0x7841e9 = httpResult;
      if (!_0x7841e9) return;
      $[_0x1b08("\u202B73", "@F]h")](_0x1b08("\u202B74", "BAnE") + this[_0x1b08("\u202E75", "7OWV")] + "]" + _0x7841e9["data"][_0x1b08("\u202E76", "4$IG")][1][_0x1b08("\u202E77", "J^rk")] + _0x1b08("\u202E78", "abI6") + _0x7841e9[_0x1b08("\u202E79", "E6#k")][_0x1b08("\u202E7a", "7OWV")][3][_0x1b08("\u202E7b", "VgB!")]);
      if (_0x15099d["vCAmF"](_0x7841e9["data"][_0x1b08("\u202E7c", "lVXt")][3]["curNum"], 8)) {
        if (_0x15099d[_0x1b08("\u202B7d", "#A6R")](_0x15099d[_0x1b08("\u202E7e", "Kp$K")], _0x15099d[_0x1b08("\u202E7f", "VOJY")])) {
          for (let _0x1ca4b8 = 1; _0x15099d["vCAmF"](_0x1ca4b8, 9); _0x1ca4b8++) {
            if (_0x15099d[_0x1b08("\u202B80", "IfwJ")](_0x15099d[_0x1b08("\u202B81", "4$IG")], _0x15099d["iDrgD"])) {
              $[_0x1b08("\u202E82", "jzER")](_0x1b08("\u202E83", "Tm*N") + this[_0x1b08("\u202B84", "&$0h")] + "]\u7B2C" + _0x1ca4b8 + "\u6B21\u770B\u89C6\u9891\u5E7F\u544A");
              await this[_0x1b08("\u202B85", "E5!Z")]();
            } else {
              $["logAndNotify"]("\u274C" + _0x7841e9[_0x1b08("\u202E86", "Tm*N")] + " \u8BF7\u68C0\u67E5\u5361\u5BC6\u6216\u5728TG\u673A\u5668\u4EBA @CGKEYBot \u5904\u83B7\u53D6\u5361\u5BC6");
            }
          }
        } else {
          try {
            httpResult = JSON["parse"](resp[_0x1b08("\u202E87", "*Dww")]);
          } catch (_0x3cf96e) {
            httpResult = resp[_0x1b08("\u202B88", "E5!Z")];
          }
        }
      }
    } catch (_0x5541f4) {} finally {
      return Promise["resolve"](1);
    }
  }
  async [_0x1b08("\u202B89", "#A6R")]() {
    var _0x4462d9 = {
      "uzUBe": function (_0x59a66e, _0x3a73d5) {
        return _0x59a66e(_0x3a73d5);
      },
      "rAVvN": function (_0x468c1b, _0x29e907) {
        return _0x468c1b(_0x29e907);
      },
      "srbcs": function (_0x2c30c2, _0x38fb61, _0x171acc, _0x50ef51) {
        return _0x2c30c2(_0x38fb61, _0x171acc, _0x50ef51);
      },
      "YVxHB": function (_0x500203, _0x27e91a, _0x5beb1a) {
        return _0x500203(_0x27e91a, _0x5beb1a);
      },
      "GMzsS": _0x1b08("\u202B8a", "!]oS"),
      "CzJyG": function (_0x42592a, _0x3d42a4) {
        return _0x42592a !== _0x3d42a4;
      }
    };
    try {
      let _0x6ba88 = "https://mapi.shuijiaobao.cn/task/dayReward";
      let _0x298f06 = Math["round"](new Date()[_0x1b08("\u202B8b", "MSV8")]() / 1000)[_0x1b08("\u202E8c", "J^rk")]();
      let _0x1140f7 = _0x4462d9[_0x1b08("\u202E8d", "JqCQ")](MD5Encrypt, "" + this["id"] + this["key"] + _0x298f06 + _0x1b08("\u202E8e", "bLXe"));
      let _0x521769 = _0x4462d9["rAVvN"](MD5Encrypt, this["id"] + _0x1b08("\u202B8f", "Kp$K") + _0x298f06 + this[_0x1b08("\u202B90", "@Z)q")]);
      let _0xd6d0c2 = "a|" + ah + "|" + app + _0x1b08("\u202E91", "0R2X") + this[_0x1b08("\u202E92", "jzER")] + "|1080|2267|0|" + this["id"] + "|" + _0x298f06 + "000|" + _0x1140f7 + "|" + this[_0x1b08("\u202B93", "IfwJ")] + "|" + iphone;
      let _0x311885 = "timeStamp=" + _0x298f06 + _0x1b08("\u202E94", "4$IG") + _0x521769 + _0x1b08("\u202E95", "*ISa");
      let _0x79be1b = _0x4462d9["srbcs"](populateUrlObject, _0x6ba88, _0xd6d0c2, _0x311885);
      await _0x4462d9[_0x1b08("\u202E96", "MSV8")](httpRequest, _0x4462d9[_0x1b08("\u202B97", "lVXt")], _0x79be1b);
      let _0x2ec2a2 = httpResult;
      if (!_0x2ec2a2) return;
      if (_0x2ec2a2["ok"] == 1) {
        $[_0x1b08("\u202B4a", "G%%R")]("\u8D26\u53F7[" + this["name"] + _0x1b08("\u202E98", "J^rk") + _0x2ec2a2[_0x1b08("\u202B99", "bLXe")][_0x1b08("\u202B9a", "JqCQ")][_0x1b08("\u202E9b", "bLXe")] + "\u91D1\u5E01");
        await $[_0x1b08("\u202E9c", "Kp$K")](35000);
      }
    } catch (_0x93d645) {} finally {
      if (_0x4462d9[_0x1b08("\u202B9d", "IBkx")](_0x1b08("\u202B9e", "to5a"), _0x1b08("\u202E9f", "*Dww"))) {
        return Promise[_0x1b08("\u202Ea0", "lVXt")](1);
      } else {
        return Promise[_0x1b08("\u202Ba1", "YlpT")](1);
      }
    }
  }
  async [_0x1b08("\u202Ea2", "JqCQ")]() {
    var _0x49a155 = {
      "xAIZI": function (_0x4ca2a7, _0x110d5f) {
        return _0x4ca2a7 / _0x110d5f;
      },
      "bNCYC": function (_0x193f05, _0x1cae37) {
        return _0x193f05(_0x1cae37);
      },
      "IiMZp": function (_0x19811e, _0x2a7c75, _0x586c0d, _0x47e40c) {
        return _0x19811e(_0x2a7c75, _0x586c0d, _0x47e40c);
      },
      "tfXxv": function (_0x502fa8, _0x1da40a, _0x2d0fdc) {
        return _0x502fa8(_0x1da40a, _0x2d0fdc);
      },
      "CaPJi": _0x1b08("\u202Ea3", "E5!Z"),
      "jaSTF": _0x1b08("\u202Ea4", "&$0h")
    };
    try {
      let _0x110160 = "https://mapi.shuijiaobao.cn/money/extract";
      let _0x57d2dc = Math[_0x1b08("\u202Ba5", "abI6")](_0x49a155[_0x1b08("\u202Ba6", "jzER")](new Date()[_0x1b08("\u202Ba7", "Tv8h")](), 1000))[_0x1b08("\u202Ba8", "G%%R")]();
      let _0xdfe9f1 = _0x49a155["bNCYC"](MD5Encrypt, "" + this["id"] + this[_0x1b08("\u202Ba9", "JqCQ")] + _0x57d2dc + _0x1b08("\u202Baa", "pd$b"));
      let _0x52e59b = MD5Encrypt(this["id"] + _0x1b08("\u202Eab", "7OWV") + _0x57d2dc + this["token"]);
      let _0x3199c9 = "a|" + ah + "|" + app + _0x1b08("\u202Eac", "BAnE") + this[_0x1b08("\u202Ead", "BAnE")] + _0x1b08("\u202Bae", "gaDu") + this["id"] + "|" + _0x57d2dc + _0x1b08("\u202Baf", "i(Id") + _0xdfe9f1 + "|" + this["token"] + "|" + iphone;
      let _0x581d40 = _0x1b08("\u202Bb0", "J^rk") + _0x57d2dc + _0x1b08("\u202Bb1", "i(Id") + _0x52e59b + _0x1b08("\u202Bb2", "gaDu");
      let _0x232368 = _0x49a155["IiMZp"](populateUrlObject, _0x110160, _0x3199c9, _0x581d40);
      await _0x49a155[_0x1b08("\u202Eb3", "OEaQ")](httpRequest, _0x49a155[_0x1b08("\u202Eb4", "e7$Z")], _0x232368);
      let _0x43f945 = httpResult;
      if (!_0x43f945) return;
      $[_0x1b08("\u202E5e", "ZX5d")](_0x1b08("\u202E4b", "$IoQ") + this["name"] + "]\u63D0\u73B0\uFF1A" + _0x43f945[_0x1b08("\u202Eb5", "YlpT")]);
    } catch (_0x372f67) {} finally {
      if (_0x49a155["jaSTF"] !== _0x1b08("\u202Bb6", "(Ic*")) {
        taskall["push"](user[_0x1b08("\u202Eb7", "JqCQ")]());
      } else {
        return Promise[_0x1b08("\u202Eb8", "@F]h")](1);
      }
    }
  }
  async ["dinnerCreate"]() {
    var _0xf22560 = {
      "LBDKd": function (_0x2de9b1, _0x2f0531) {
        return _0x2de9b1 / _0x2f0531;
      },
      "EYkwp": function (_0x3f3b4e, _0x4c6d41, _0xe95fb1, _0x582a9f) {
        return _0x3f3b4e(_0x4c6d41, _0xe95fb1, _0x582a9f);
      },
      "ADKTe": function (_0x238114, _0x29ec8d, _0x330be2) {
        return _0x238114(_0x29ec8d, _0x330be2);
      },
      "nRASh": function (_0x5d0c42, _0x2d9093) {
        return _0x5d0c42 == _0x2d9093;
      }
    };
    try {
      let _0x344fe8 = _0x1b08("\u202Bb9", "MSV8");
      let _0x19930a = Math[_0x1b08("\u202Bba", "#A6R")](_0xf22560[_0x1b08("\u202Bbb", "to5a")](new Date()["getTime"](), 1000))["toString"]();
      let _0x13def0 = MD5Encrypt("" + this["id"] + this[_0x1b08("\u202Bbc", "e7$Z")] + _0x19930a + _0x1b08("\u202Ebd", "i(Id"));
      let _0x39a4cc = "a|" + ah + "|" + app + "|ql_sleep|" + this["equipment_code"] + _0x1b08("\u202Bbe", "^szk") + this["id"] + "|" + _0x19930a + _0x1b08("\u202Ebf", "@F]h") + _0x13def0 + "|" + this[_0x1b08("\u202Ec0", "#A6R")] + "|" + iphone;
      let _0x20b2ae = "";
      let _0x551b2d = _0xf22560[_0x1b08("\u202Bc1", "Tv8h")](populateUrlObject, _0x344fe8, _0x39a4cc, _0x20b2ae);
      await _0xf22560[_0x1b08("\u202Bc2", "VOJY")](httpRequest, _0x1b08("\u202Ec3", "jEIF"), _0x551b2d);
      let _0x3fd96e = httpResult;
      if (!_0x3fd96e) return;
      if (_0xf22560[_0x1b08("\u202Ec4", "gaDu")](_0x3fd96e["ok"], 1)) {
        $[_0x1b08("\u202Ec5", "i(Id")](_0x1b08("\u202Bc6", "4$IG") + this["name"] + _0x1b08("\u202Bc7", "@F]h") + _0x3fd96e[_0x1b08("\u202Ec8", "(bTu")]["gold_number"] + "\u91D1\u5E01");
      } else {
        $["logAndNotify"](_0x1b08("\u202Bc9", "@Z)q") + this[_0x1b08("\u202Bca", "fLlL")] + "]\u6070\u996D\u6253\u5361: " + _0x3fd96e[_0x1b08("\u202Ecb", "wi[P")]);
      }
    } catch (_0x48b335) {} finally {
      return Promise["resolve"](1);
    }
  }
  async [_0x1b08("\u202Ecc", "jhl9")]() {
    var _0x36c263 = {
      "okBBL": function (_0x1c5a3c, _0x36123a, _0x5cd13b, _0x14fcc1) {
        return _0x1c5a3c(_0x36123a, _0x5cd13b, _0x14fcc1);
      },
      "jSmBl": _0x1b08("\u202Ecd", "G%%R"),
      "lomZS": function (_0x508ea8, _0x244f41) {
        return _0x508ea8 == _0x244f41;
      },
      "rbTFr": function (_0xcb1984, _0x2299bf) {
        return _0xcb1984 === _0x2299bf;
      },
      "MzMwi": _0x1b08("\u202Bce", "!]oS"),
      "YUwRh": "kjssg",
      "OTbwN": function (_0x3df579, _0x4a2dff) {
        return _0x3df579 !== _0x4a2dff;
      },
      "uormq": _0x1b08("\u202Bcf", "OEaQ")
    };
    try {
      let _0x3954e7 = _0x1b08("\u202Ed0", "VOJY");
      let _0x483832 = Math["round"](new Date()[_0x1b08("\u202Bd1", "YlpT")]() / 1000)["toString"]();
      let _0x13a960 = MD5Encrypt("" + this["id"] + this[_0x1b08("\u202Bd2", "yNZR")] + _0x483832 + _0x1b08("\u202Ed3", "*ISa"));
      let _0x3611ae = "a|" + ah + "|" + app + _0x1b08("\u202Ed4", "*Dww") + this["equipment_code"] + _0x1b08("\u202Ed5", "*ISa") + this["id"] + "|" + _0x483832 + "000|" + _0x13a960 + "|" + this[_0x1b08("\u202Bd6", "2hNW")] + "|" + iphone;
      let _0xbd3786 = "";
      let _0x338236 = _0x36c263["okBBL"](populateUrlObject, _0x3954e7, _0x3611ae, _0xbd3786);
      await httpRequest(_0x36c263[_0x1b08("\u202Ed7", "to5a")], _0x338236);
      let _0x4440f3 = httpResult;
      if (!_0x4440f3) return;
      if (_0x36c263["lomZS"](_0x4440f3["ok"], 1)) {
        $[_0x1b08("\u202Bd8", "(bTu")](_0x1b08("\u202Ed9", "!]oS") + this[_0x1b08("\u202Eda", "Tv8h")] + "]\u5F00\u542F\u7761\u89C9\uD83D\uDCA4" + _0x4440f3[_0x1b08("\u202Edb", "fLlL")]);
      } else {
        if (_0x36c263[_0x1b08("\u202Bdc", "bLXe")](_0x36c263[_0x1b08("\u202Bdd", "J^rk")], _0x36c263[_0x1b08("\u202Bde", "4$IG")])) {
          httpResult = resp["body"];
        } else {
          $[_0x1b08("\u202E82", "jzER")](_0x1b08("\u202Bdf", "@F]h") + this[_0x1b08("\u202Be0", "*Dww")] + _0x1b08("\u202Be1", "E6#k") + _0x4440f3[_0x1b08("\u202Be2", "7OWV")]);
        }
      }
    } catch (_0x92b861) {} finally {
      if (_0x36c263[_0x1b08("\u202Ee3", "yNZR")](_0x36c263["uormq"], "MTvmY")) {
        return Promise["resolve"](1);
      } else {
        $[_0x1b08("\u202Ee4", "MSV8")]("\u8D26\u53F7[" + this[_0x1b08("\u202Ee5", "jhl9")] + _0x1b08("\u202Be6", "Tm*N") + result["msg"]);
      }
    }
  }
  async [_0x1b08("\u202Be7", "YlpT")]() {
    var _0x36f1fd = {
      "wbEtN": function (_0x135a27, _0x221856) {
        return _0x135a27 / _0x221856;
      },
      "PsBcF": function (_0x12613f, _0x59625a) {
        return _0x12613f(_0x59625a);
      },
      "zhFsi": function (_0x4c1dd5, _0x5b4ee2, _0x4d3ba5, _0x42c37b) {
        return _0x4c1dd5(_0x5b4ee2, _0x4d3ba5, _0x42c37b);
      },
      "CItLB": function (_0x3009e8, _0x7656d1, _0x4ae7df) {
        return _0x3009e8(_0x7656d1, _0x4ae7df);
      },
      "NJJLU": "post"
    };
    try {
      let _0x39952b = _0x1b08("\u202Be8", "J^rk");
      let _0x424106 = Math[_0x1b08("\u202Ee9", "526s")](_0x36f1fd["wbEtN"](new Date()[_0x1b08("\u202Eea", "Tm*N")](), 1000))["toString"]();
      let _0x291ebe = _0x36f1fd["PsBcF"](MD5Encrypt, "" + this["id"] + this[_0x1b08("\u202Eeb", "jzER")] + _0x424106 + "000");
      let _0x273fcc = "a|" + ah + "|" + app + _0x1b08("\u202Eec", "J^rk") + this["equipment_code"] + _0x1b08("\u202Bed", "4$IG") + this["id"] + "|" + _0x424106 + "000|" + _0x291ebe + "|" + this[_0x1b08("\u202Ec0", "#A6R")] + "|" + iphone;
      let _0x26bbba = _0x1b08("\u202Eee", "yNZR") + this[_0x1b08("\u202Eef", "*Dww")] + _0x1b08("\u202Ef0", "#A6R") + this[_0x1b08("\u202Ef1", "^szk")];
      let _0x5dd950 = _0x36f1fd[_0x1b08("\u202Bf2", "$IoQ")](populateUrlObject, _0x39952b, _0x273fcc, _0x26bbba);
      await _0x36f1fd["CItLB"](httpRequest, _0x36f1fd[_0x1b08("\u202Bf3", "A9Ud")], _0x5dd950);
      let _0x39d971 = httpResult;
      if (!_0x39d971) return;
      if (_0x39d971["ok"] = 1) {
        $[_0x1b08("\u202E5e", "ZX5d")](_0x1b08("\u202Ef4", "VgB!") + this[_0x1b08("\u202E3b", "to5a")] + "]\u5F00\u6C14\u6CE1\u83B7\u5F97" + _0x39d971["data"]["gold_number"] + "\u91D1\u5E01");
      } else {
        $["logAndNotify"](_0x1b08("\u202Bf5", "wi[P") + this[_0x1b08("\u202B4c", "MSV8")] + "]\u6682\u65E0\u6C14\u6CE1\u5956\u52B1\u53EF\u9886\u53D6");
      }
    } catch (_0x58c9dc) {} finally {
      return Promise[_0x1b08("\u202Ef6", "wi[P")](1);
    }
  }
  async ["km"]() {
    var _0x4283e1 = {
      "xqQhH": function (_0x556a26, _0x1adb6c) {
        return _0x556a26 == _0x1adb6c;
      },
      "mFVrs": function (_0x530180, _0x153079) {
        return _0x530180(_0x153079);
      },
      "ThwVF": function (_0x5c8dbc, _0x375fa0) {
        return _0x5c8dbc == _0x375fa0;
      },
      "dAYRJ": function (_0x3b99ae, _0x20638b) {
        return _0x3b99ae == _0x20638b;
      },
      "eGfSg": function (_0x183075, _0x44ff50) {
        return _0x183075 == _0x44ff50;
      }
    };
    try {
      let _0x446f10 = _0x1b08("\u202Ef7", "E6#k") + userCGkey + "&uuid=" + uuid;
      let _0x5d9ed1 = "";
      let _0x3be53c = populateUrlObject(_0x446f10, _0x5d9ed1);
      await httpRequest("post", _0x3be53c);
      let _0x24ebec = httpResult;
      if (_0x4283e1["xqQhH"](_0x24ebec[_0x1b08("\u202Bf8", "MSV8")], 200)) {
        var _0xbf096 = "1|2|3|0|4"["split"]("|"),
          _0x17f6d9 = 0;
        while (!![]) {
          switch (_0xbf096[_0x17f6d9++]) {
            case "0":
              this[_0x1b08("\u202Ef9", "BAnE")] = !![];
              continue;
            case "1":
              this[_0x1b08("\u202Efa", "ZX5d")] = _0x24ebec[_0x1b08("\u202Efb", "bLXe")]["vip"];
              continue;
            case "2":
              this["time1"] = _0x4283e1[_0x1b08("\u202Efc", "^szk")](timestampToTime, this[_0x1b08("\u202Efd", "jzER")]);
              continue;
            case "3":
              $[_0x1b08("\u202Efe", "e7$Z")]("\uD83C\uDF8A\u5361\u5BC6\u9A8C\u8BC1\u6210\u529F \u6709\u6548\u671F\u81F3" + this["time1"]);
              continue;
            case "4":
              this[_0x1b08("\u202Bff", "BAnE")] = !![];
              continue;
          }
          break;
        }
      }
      if (_0x24ebec[_0x1b08("\u202E100", "526s")] == 149 || _0x4283e1[_0x1b08("\u202E101", "ZX5d")](_0x24ebec[_0x1b08("\u202B102", "@F]h")], 148) || _0x4283e1[_0x1b08("\u202B103", "2hNW")](_0x24ebec["code"], 112)) {
        $[_0x1b08("\u202E39", "VOJY")]("\u274C" + _0x24ebec["msg"] + _0x1b08("\u202B104", "jEIF"));
      }
      if (_0x4283e1["eGfSg"](_0x24ebec[_0x1b08("\u202B105", "e7$Z")], 402)) {
        $["logAndNotify"]("\u274C" + _0x24ebec[_0x1b08("\u202Ecb", "wi[P")] + _0x1b08("\u202E106", "Tm*N"));
      }
    } catch (_0x574e02) {} finally {
      return Promise[_0x1b08("\u202E107", "Tm*N")](1);
    }
  }
}
!(async () => {
  var _0xa41130 = {
    "Sndqd": function (_0x2a25bd, _0x2aa4b8) {
      return _0x2a25bd !== _0x2aa4b8;
    },
    "jcsgB": function (_0x38c868, _0x5c8800) {
      return _0x38c868 > _0x5c8800;
    },
    "arGUb": function (_0x4cbd66, _0x805a3e) {
      return _0x4cbd66 === _0x805a3e;
    },
    "PWxSo": "TLLXG",
    "cwFsW": function (_0x19b7bc, _0x45b3b8) {
      return _0x19b7bc > _0x45b3b8;
    },
    "JWNPq": _0x1b08("\u202E108", "@Z)q"),
    "hIVIS": "\n-------------- \u65E5\u5E38\u4EFB\u52A1 --------------",
    "oETek": _0x1b08("\u202B109", "abI6"),
    "yFlft": function (_0x833783, _0x508717) {
      return _0x833783 < _0x508717;
    },
    "QXUzn": function (_0x4725e2, _0x5e3fdf) {
      return _0x4725e2 < _0x5e3fdf;
    },
    "cMpcV": function (_0x37fda7, _0x5393b9) {
      return _0x37fda7 < _0x5393b9;
    },
    "PMeNo": function (_0x4ec7ba, _0x4f4dad) {
      return _0x4ec7ba > _0x4f4dad;
    },
    "sTATF": "naTcS",
    "uEfLy": function (_0x499440, _0x5d1e01) {
      return _0x499440 !== _0x5d1e01;
    },
    "LAeFA": _0x1b08("\u202E10a", "jhl9"),
    "lKlCM": _0x1b08("\u202E10b", "yNZR")
  };
  if (_0xa41130[_0x1b08("\u202E10c", "*ISa")](typeof $request, _0x1b08("\u202B10d", "^szk"))) {} else {
    if (!(await checkEnv())) return;
    let _0x407cba = [];
    let _0x169551 = userList[_0x1b08("\u202E10e", "!]oS")](_0x3cb076 => _0x3cb076["ckValid"]);
    $["logAndNotify"](_0x1b08("\u202E10f", "pd$b"));
    if (_0xa41130[_0x1b08("\u202B110", "JqCQ")](_0x169551["length"], 0)) {
      if (_0xa41130[_0x1b08("\u202B111", "VgB!")](_0x1b08("\u202B112", "2hNW"), _0xa41130["PWxSo"])) {
        $[_0x1b08("\u202E113", "^szk")]("\n-------------- \u5361\u5BC6\u9A8C\u8BC1 --------------");
        _0x407cba = [];
        for (let _0x280df5 of _0x169551) {
          _0x407cba[_0x1b08("\u202B114", "OEaQ")](_0x280df5["km"]());
        }
        await Promise["all"](_0x407cba);
        _0x169551 = _0x169551["filter"](_0x2207de => _0x2207de[_0x1b08("\u202E115", "@Z)q")]);
        if (_0xa41130["cwFsW"](_0x169551[_0x1b08("\u202B116", "Tm*N")], 0)) {
          $["logAndNotify"](_0xa41130[_0x1b08("\u202B117", "^szk")]);
          _0x407cba = [];
          for (let _0x302a43 of _0x169551["filter"](_0x38cbc9 => _0x38cbc9[_0x1b08("\u202B118", "E6#k")])) {
            _0x407cba[_0x1b08("\u202E119", "4$IG")](_0x302a43[_0x1b08("\u202B11a", "JqCQ")]());
            await $[_0x1b08("\u202E11b", "J^rk")](3000);
          }
          await Promise[_0x1b08("\u202E11c", "E5!Z")](_0x407cba);
          $["logAndNotify"](_0xa41130[_0x1b08("\u202B11d", "0R2X")]);
          _0x407cba = [];
          for (let _0x5a69c1 of _0x169551) {
            var _0x142bec = _0xa41130["oETek"][_0x1b08("\u202E11e", "E5!Z")]("|"),
              _0x452bdc = 0;
            while (!![]) {
              switch (_0x142bec[_0x452bdc++]) {
                case "0":
                  _0x407cba[_0x1b08("\u202E11f", "J^rk")](_0x5a69c1[_0x1b08("\u202E120", "fLlL")]());
                  continue;
                case "1":
                  _0x407cba["push"](_0x5a69c1["collectSleepGold"]());
                  continue;
                case "2":
                  _0x407cba["push"](_0x5a69c1[_0x1b08("\u202E121", "&$0h")]());
                  continue;
                case "3":
                  await $[_0x1b08("\u202B122", "526s")](3000);
                  continue;
                case "4":
                  await $["wait"](3000);
                  continue;
              }
              break;
            }
          }
          await Promise[_0x1b08("\u202E123", "5H9[")](_0x407cba);
          $[_0x1b08("\u202E39", "VOJY")](_0x1b08("\u202E124", "4$IG"));
          _0x407cba = [];
          for (let _0x341e6c of _0x169551) {
            h = local_hours();
            if (_0xa41130[_0x1b08("\u202E125", "abI6")](h, 12) && _0xa41130["yFlft"](h, 14) || _0xa41130[_0x1b08("\u202E126", "JqCQ")](h, 22) && h < 23) {
              _0x407cba[_0x1b08("\u202E127", "@Z)q")](_0x341e6c[_0x1b08("\u202E128", "&$0h")]());
            } else {
              $["logAndNotify"](_0x1b08("\u202B129", "7OWV") + h + _0x1b08("\u202E12a", "526s"));
            }
            if (h > 5 && h < 9 || h > 11 && _0xa41130[_0x1b08("\u202B12b", "2hNW")](h, 14) || h > 17 && _0xa41130[_0x1b08("\u202B12c", "jEIF")](h, 20) || _0xa41130[_0x1b08("\u202E12d", "E5!Z")](h, 21) && h < 23) {
              if (_0xa41130[_0x1b08("\u202B12e", "BAnE")](_0xa41130[_0x1b08("\u202E12f", "jzER")], _0xa41130[_0x1b08("\u202E130", "G%%R")])) {
                _0x407cba[_0x1b08("\u202B131", "YlpT")](_0x341e6c["createOrderSleep"]());
              } else {
                _0x407cba[_0x1b08("\u202B132", "Tv8h")](_0x341e6c[_0x1b08("\u202E133", "0R2X")]());
              }
            } else {
              if (_0xa41130[_0x1b08("\u202B134", "^szk")](_0xa41130[_0x1b08("\u202E135", "Tv8h")], _0xa41130[_0x1b08("\u202E136", "E6#k")])) {
                $[_0x1b08("\u202B137", "VgB!")](_0x1b08("\u202E138", "jhl9") + h + _0x1b08("\u202E139", "HhxN"));
              } else {
                httpResult = JSON[_0x1b08("\u202B13a", "yNZR")](resp["body"]);
              }
            }
          }
          await Promise["all"](_0x407cba);
        }
      } else {
        $[_0x1b08("\u202E113", "^szk")](_0x1b08("\u202B13b", "jzER") + this[_0x1b08("\u202E13c", "*ISa")] + "]\u5F00\u542F\u7761\u89C9\uD83D\uDCA4" + result["msg"]);
      }
    }
    await $["showmsg"]();
  }
})()["catch"](_0x42e485 => console[_0x1b08("\u202B13d", "BAnE")](_0x42e485))["finally"](() => $["done"]());
async function checkEnv() {
  var _0x3dd6e2 = {
    "pPGTC": function (_0x2c30f6, _0x14a988) {
      return _0x2c30f6 !== _0x14a988;
    },
    "aAtlf": "IZxbv",
    "jQPQJ": function (_0x5d1a7f, _0x1d9f12) {
      return _0x5d1a7f > _0x1d9f12;
    },
    "bQAwV": "\u672A\u627E\u5230CK \u8BF7\u9605\u8BFB\u811A\u672C\u8BF4\u660E"
  };
  if (userCookie) {
    let _0x5b5e71 = envSplitor[0];
    for (let _0x3b1660 of envSplitor) {
      if (_0x3dd6e2[_0x1b08("\u202B13e", "^szk")](_0x1b08("\u202B13f", "JqCQ"), _0x3dd6e2["aAtlf"])) {
        if (_0x3dd6e2[_0x1b08("\u202E140", "IBkx")](userCookie[_0x1b08("\u202E141", "(bTu")](_0x3b1660), -1)) {
          _0x5b5e71 = _0x3b1660;
          break;
        }
      } else {
        $[_0x1b08("\u202E142", "IBkx")]("\u8D26\u53F7[" + this[_0x1b08("\u202B84", "&$0h")] + _0x1b08("\u202E143", "IfwJ") + result["msg"]);
      }
    }
    for (let _0x34aeeb of userCookie[_0x1b08("\u202E144", "e7$Z")](_0x5b5e71)) {
      if (_0x34aeeb) userList[_0x1b08("\u202E145", "yNZR")](new UserInfo(_0x34aeeb));
    }
    userCount = userList["length"];
  } else {
    console[_0x1b08("\u202E146", "@Z)q")](_0x3dd6e2[_0x1b08("\u202E147", "E5!Z")]);
    return;
  }
  console[_0x1b08("\u202B148", "to5a")](_0x1b08("\u202B149", "!]oS") + userCount + _0x1b08("\u202B14a", "E5!Z"));
  return !![];
}
function populateUrlObject(_0x193187, _0xe432f4, _0x3f3554 = "") {
  var _0x3db6d2 = {
    "zeROX": _0x1b08("\u202B14b", "lVXt"),
    "LGbad": _0x1b08("\u202B14c", "&$0h"),
    "ObodI": "application/x-www-form-urlencoded",
    "cBaXx": _0x1b08("\u202E14d", "e7$Z")
  };
  let _0x9f7684 = _0x193187[_0x1b08("\u202E14e", "&$0h")]("//", "/")[_0x1b08("\u202E14f", "fLlL")]("/")[1];
  let _0x181b47 = {
    "url": _0x193187,
    "headers": {
      "Host": _0x9f7684,
      "ua": _0xe432f4,
      "Connection": _0x3db6d2["zeROX"]
    },
    "timeout": 5000
  };
  if (_0x3f3554) {
    _0x181b47[_0x1b08("\u202E150", "gaDu")] = _0x3f3554;
    _0x181b47[_0x1b08("\u202B151", "wi[P")][_0x3db6d2[_0x1b08("\u202B152", "HhxN")]] = _0x3db6d2[_0x1b08("\u202B153", "Tm*N")];
    _0x181b47[_0x1b08("\u202E154", "jEIF")][_0x3db6d2["cBaXx"]] = _0x181b47[_0x1b08("\u202E155", "fLlL")] ? _0x181b47["body"][_0x1b08("\u202B156", "e7$Z")] : 0;
  }
  return _0x181b47;
}
async function httpRequest(_0x508b76, _0x3896e6) {
  var _0xb51423 = {
    "EuInI": _0x1b08("\u202B157", "$IoQ"),
    "VVqZZ": _0x1b08("\u202E158", "0R2X"),
    "pksFb": function (_0x937fd1, _0x1184ea) {
      return _0x937fd1 !== _0x1184ea;
    },
    "hTQLl": _0x1b08("\u202B159", "jzER"),
    "KCwIE": function (_0x160a91, _0x510b03) {
      return _0x160a91 == _0x510b03;
    },
    "QeodJ": function (_0x1543b9, _0x3e0f4f) {
      return _0x1543b9 === _0x3e0f4f;
    },
    "SeHFY": _0x1b08("\u202B15a", "IfwJ"),
    "ynitq": _0x1b08("\u202B15b", "to5a"),
    "ZiteO": function (_0x38fa30, _0x49936f) {
      return _0x38fa30 !== _0x49936f;
    },
    "dnhao": _0x1b08("\u202E15c", "ZX5d"),
    "Sdpkb": _0x1b08("\u202E15d", "(bTu"),
    "DaJdg": function (_0xed96e1) {
      return _0xed96e1();
    }
  };
  httpResult = null, httpReq = null, httpResp = null;
  return new Promise(_0x2552c7 => {
    var _0x3234e3 = {
      "rONKf": function (_0x37ac98) {
        return _0xb51423[_0x1b08("\u202B15e", "5H9[")](_0x37ac98);
      }
    };
    $[_0x1b08("\u202E15f", "A9Ud")](_0x508b76, _0x3896e6, async (_0x38561f, _0x3ea950, _0x262ccf) => {
      try {
        httpReq = _0x3ea950;
        httpResp = _0x262ccf;
        if (_0x38561f) {
          if (_0xb51423[_0x1b08("\u202E160", "*Dww")] === _0xb51423[_0x1b08("\u202E161", "Kp$K")]) {
            return Promise[_0x1b08("\u202E162", "ZX5d")](1);
          } else {
            console[_0x1b08("\u202B163", "IBkx")](_0x508b76 + _0x1b08("\u202E164", "jEIF"));
            console["log"](JSON[_0x1b08("\u202E165", "to5a")](_0x38561f));
          }
        } else {
          if (_0x262ccf["body"]) {
            if (_0xb51423[_0x1b08("\u202B166", "jEIF")](_0xb51423[_0x1b08("\u202E167", "VOJY")], "Euugr")) {
              this[_0x1b08("\u202B168", "OEaQ")] = ![];
              $["logAndNotify"]("\u8D26\u53F7[" + this["index"] + _0x1b08("\u202E169", "VgB!"));
            } else {
              if (_0xb51423[_0x1b08("\u202B16a", "IfwJ")](typeof _0x262ccf["body"], _0x1b08("\u202E16b", "Kp$K"))) {
                if (_0xb51423["QeodJ"](_0xb51423[_0x1b08("\u202E16c", "YlpT")], "SIOVn")) {
                  return Promise[_0x1b08("\u202E16d", "IBkx")](1);
                } else {
                  httpResult = _0x262ccf["body"];
                }
              } else {
                if (_0xb51423[_0x1b08("\u202E16e", "526s")] === _0x1b08("\u202B16f", "!]oS")) {
                  try {
                    if (_0xb51423[_0x1b08("\u202E170", "0R2X")](_0x1b08("\u202B171", "J^rk"), _0xb51423[_0x1b08("\u202E172", "wi[P")])) {
                      httpResult = JSON[_0x1b08("\u202E173", "J^rk")](_0x262ccf[_0x1b08("\u202E174", "*ISa")]);
                    } else {
                      _0x3234e3["rONKf"](_0x2552c7);
                    }
                  } catch (_0x28b715) {
                    httpResult = _0x262ccf[_0x1b08("\u202B175", "HhxN")];
                  }
                } else {
                  return Promise["resolve"](1);
                }
              }
            }
          }
        }
      } catch (_0x133caa) {
        if (_0x1b08("\u202B176", "i(Id") !== "vWrjN") {
          console[_0x1b08("\u202B177", "VOJY")](_0x133caa);
        } else {
          $["logAndNotify"](_0x1b08("\u202B178", "*Dww") + this[_0x1b08("\u202E179", "0R2X")] + "]\u6682\u65E0\u6C14\u6CE1\u5956\u52B1\u53EF\u9886\u53D6");
        }
      } finally {
        if ("wdsCP" === _0xb51423[_0x1b08("\u202E17a", "yNZR")]) {
          $["logAndNotify"](_0x1b08("\u202B17b", "0R2X") + this["name"] + "] " + result[_0x1b08("\u202E17c", "OEaQ")] + "  \u26A0\uFE0F\u53D8\u91CF\u5DF2\u5931\u6548\u6216\u68C0\u67E5\u683C\u5F0F");
        } else {
          _0xb51423[_0x1b08("\u202E17d", "*Dww")](_0x2552c7);
        }
      }
    });
  });
}
;
_0xods = "jsjiami.com.v6";

////////////////////////////////////////////////////////////////////
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
    return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
}
function local_hours() {
  let myDate = new Date();
  h = myDate.getHours();
  return h;
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);
  var Y = date.getFullYear() + "-";
  var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D;
}
function getNowFormatDate() {
  var date = new Date();
  var separator = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + separator + month + separator + strDate;
  return currentdate;
}
function Env(name, env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != "get" && m != "post" && m != "put" && m != "delete") {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == "get" && t.headers) {
        delete t.headers["content-type"];
        delete t.headers["Content-Length"];
      } else if (t.body && t.headers) {
        if (!t.headers["content-type"]) t.headers["content-type"] = "application/json";
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == "get") delete conf.data;
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else if (this.isQuanX()) {
        t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        })), $task.fetch(t).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => e(t));
      } else if (this.isNode()) {
        this.got = this.got ? this.got : require("got");
        const {
          url: s,
          ...i
        } = t;
        this.instance = this.got.extend({
          followRedirect: false
        });
        this.instance[m](s, i).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) return;
      let notifyBody = this.name + " \u8FD0\u884C\u901A\u77E5\n\n" + this.notifyStr;
      if ($.isNode()) {
        var notify = require("./sendNotify");
        console.log("\n============== \u63A8\u9001 ==============");
        await notify.sendNotify(this.name, notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== \u7CFB\u7EDF\u901A\u77E5 =============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = "0") {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = "";
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(obj, c, encodeUrl = false) {
      let ret = [];
      for (let keys of Object.keys(obj).sort()) {
        let v = obj[keys];
        if (v && encodeUrl) v = encodeURIComponent(v);
        ret.push(keys + "=" + v);
      }
      return ret.join(c);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split("&")) {
        if (!item) continue;
        let idx = item.indexOf("=");
        if (idx == -1) continue;
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) v = decodeURIComponent(v);
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = "abcdef0123456789") {
      let str = "";
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t);
    }
  }(name, env);
}