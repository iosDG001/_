/*        
       [GIF Master]

[rewrite_local] 
^https?:\/\/gif-master\.nionco\.com\/api\/v1\/settings? url script-response-body https://raw.githubusercontent.com/iosDG001/_/refs/heads/main/GIF.js

[MITM]
hostname = gif-master.nionco.com

 */
let body = $response.body;
body = body.replace(/("vip"\s*:\s*)\d+/g, '$11');
$done({ body });
