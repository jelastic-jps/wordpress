import com.hivext.api.environment.Trigger;

var APPID = hivext.local.getParam("TARGET_APPID");
var SESSION = hivext.local.getParam("session");
triger =hivext.local.exp.wrapRequest(new Trigger(APPID, SESSION));

oRespTurnOn = triger.addTrigger({
    data : {
        "isEnabled": true,
        "name": "hs-add-nginx",
        "nodeType": "nginxphp",
        "nodeGroup": "cp",
        "period": 1,
        "condition": {
            "type": "GREATER",
            "value": 70,
            "resourceType": "CPU",
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "ADD_NODE",
                "customData": {
                    "limit": 6,
                    "count": 1,
                    "notify": true
                }
            }
        ]
    }
});

if (oRespTurnOn.result != 0) {
    return oRespTurnOn;
}

oRespTurnOff = triger.addTrigger({
    data : {
        "isEnabled": true,
        "name": "hs-remove-nginx",
        "nodeType": "nginxphp",
        "nodeGroup": "cp",
        "period": 15,
        "condition": {
            "type": "LESS",
            "value": 5,
            "resourceType": "CPU",
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "REMOVE_NODE",
                "customData": {
                    "limit": 2,
                    "count": 1,
                    "notify": true
                }
            }
        ]
    }
});


if (oRespTurnOff.result != 0) {
    return oRespTurnOff;
}

return {
    result : 0
};