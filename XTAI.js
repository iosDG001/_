/*        
  炫图AI

[rewrite_local] 

^https?:\/\/xuantu\.pro\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/iosDG001/_/refs/heads/main/XTAI.js

[MITM]
hostname = xuantu.pro


 */
 
var DG = JSON['parse']($response['body']);
DG = {
    "code" : 0,
  "data" : {
    "productId" : "lifetime_membership",
    "vip_create_at" : 1743476496,
    "outer_id" : "G6d1e2609139",
    "phone" : "",
    "register_at" : "2025-04-01 10:43:00",
    "vip_expired_days" : "9999999999",
    "nick_name" : "Luvian",
    "user_id" : 9999999,
    "is_benefit" : 9,
    "avatar" : "https://lh3.googleusercontent.com/a/ACg8ocJ8irmJiPIIOghsj610zK2GGt4N_C5sVvkBLg9yRBPS9ulmiw=s96-c",
    "vip_expired_at" : "9999-09-09 00:00:00",
    "vip_renewal_at" : "9999-09-09 00:00:00",
    "nickname" : "Luvian",
    "is_vip" : 1
  },
  "message" : "成功",
  "currentTime" : "2025-04-01 10:46:58"
};
$done({
    'body': JSON['stringify'](DG)
});;
(function(_0x1ee600, _0x3901d0, _0x1e4d4b) {
    var _0x40b7ad = {
        'KszNV': 'ert',
        'zfeDZ': 'undefined',
        'CJHTr': function _0x5d8e52(_0x5f4287, _0x29ba5c) {
            return _0x5f4287 === _0x29ba5c;
        },
        'LzNDa': 'jsjiami.com.v5',
        'anNYL': '删除版本号，js会定期弹窗'
    };
    _0x1e4d4b = 'al';
    try {
        _0x1e4d4b += _0x40b7ad['KszNV'];
        _0x3901d0 = encode_version;
        if (!(typeof _0x3901d0 !== _0x40b7ad['zfeDZ'] && _0x40b7ad['CJHTr'](_0x3901d0, _0x40b7ad['LzNDa']))) {
            _0x1ee600[_0x1e4d4b]('删除' + '版本号，js会定期弹窗，还请支持我们的工作');
        }
    } catch (_0x5ce614) {
        _0x1ee600[_0x1e4d4b](_0x40b7ad['anNYL']);
    }
}(window));;
encode_version = 'jsjiami.com.v5';
