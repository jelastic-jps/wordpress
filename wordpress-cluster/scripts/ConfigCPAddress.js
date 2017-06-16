import com.hivext.api.environment.Environment;
  
var NODE_MISSION_COMPUTE = "cp";
var PROCEDURE_PROCESS_NODE = "BLConfiguring";
var APPID = hivext.local.getParam("TARGET_APPID");
var SESSION = hivext.local.getParam("session");
var callArgs;
var env;
var lenghtCP;
var envInfoResponse;

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
lenghtCP = computeNodes.length;

if (lenghtCP > 2) {
  for (var i = 2, n = computeNodes.length; i < n; i += 1) {
	callArgs.push({
	  procedure : PROCEDURE_PROCESS_NODE,
	  params : {
	      replacement : computeNodes[i].getAddress()
	  }
      });
  }
}

return {
    result : 0,
    onAfterReturn : {
        call : callArgs
    }
}; 
