import com.hivext.api.environment.Environment;
  
var NODE_MISSION_COMPUTE = "cp",
    PROCEDURE_PROCESS_NODE = "installLsync",
    APPID = hivext.local.getParam("TARGET_APPID"),
    SESSION = hivext.local.getParam("session"),
    callArgs,
    env,
    envInfoResponse;

env = hivext.local.exp.wrapRequest(new Environment(APPID, SESSION));
envInfoResponse = env.getEnvInfo();
str  = env.getEnvInfo();
if (!envInfoResponse.isOK()) {
    return envInfoResponse;
}

var nodes = envInfoResponse.getNodes();
var iterator = nodes.iterator();
var computeNodes = [];
  
while(iterator.hasNext()) {
    var softNode = iterator.next();
    var softNodeProperties = softNode.getProperties();
      
    if (NODE_MISSION_COMPUTE.equals(softNodeProperties.getNodeMission())) {
        computeNodes.push(softNode);
    }
}

callArgs = [];
for (var i = 0, n = computeNodes.length; i < n; i += 1) {
    var mirrorServerIp = computeNodes[(i + 1) === computeNodes.length ? 0 : i + 1].getAddress();

    callArgs.push({
        procedure : PROCEDURE_PROCESS_NODE,
        params : {
            nodeId : computeNodes[i].getId(),
            mirrorServerIp : mirrorServerIp
        }
    });

} 

return {
    result : 0,
    onAfterReturn : {
        call : callArgs
    }
}; 
