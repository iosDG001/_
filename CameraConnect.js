/*        
        ➪：Camera Connect

        ★：解锁永久🆅🅸🅿
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/traditional-opera\.meappstore\.top\/camera\/api\/users\/iosUserLogin url script-response-body https://raw.githubusercontent.com/iosDG001/_/refs/heads/main/CameraConnect.js

[MITM]
hostname = traditional-opera.meappstore.top


*/

let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {

    obj.data.vipState = 1;               
    obj.data.perpetualState = 1;         
    obj.data.renewState = 1;        

    let farFuture = "2099-12-31 23:59:59";
    obj.data.vipEndDateTime = farFuture;
    obj.data.vipEndTime = farFuture;
    obj.data.vipStartDateTime = "2026-08-23 02:26:02";
    obj.data.vipStartTime = "2026-08-23 02:26:02";

  
    obj.data.freeNum = 99999;            
    obj.data.importImageNum = 99999;     
    obj.data.controlCameraNum = 99999;   
    obj.data.beautyNum = 99999;

}

$done({ body: JSON.stringify(obj) });
