import com.hivext.api.environment.Environment;
  
var NODE_MISSION_COMPUTE = "cp",
    sPath = "${nginxphp.SERVER_WEBROOT}/ROOT/db-config.php",
    PROCEDURE_PROCESS_NODE = "replace",
    APPID = hivext.local.getParam("TARGET_APPID"),
    SESSION = hivext.local.getParam("session"),
    callArgs = [],
    aActions = [],
    item,
    env,
    isEvenNode,
    envInfoResponse;

env = hivext.local.exp.wrapRequest(new Environment(APPID, SESSION));
envInfoResponse = env.getEnvInfo();

if (!envInfoResponse.isOK()) {
    return envInfoResponse;
}

var nodes = envInfoResponse.getNodes();
var iterator = nodes.iterator();
  
while(iterator.hasNext()) {
    var softNode = iterator.next();
    var softNodeProperties = softNode.getProperties();
      
    if (NODE_MISSION_COMPUTE.equals(softNodeProperties.getNodeMission())) {
        callArgs.push(softNode);
    }
}

for (var i = 0, n = callArgs.length; i < n; i+=1) {
  isEventNode = (i % 2 === 0);
      aActions.push({
	procedure : PROCEDURE_PROCESS_NODE,
	params : {
	  nodeid : callArgs[i].id,
	  path : sPath,
	  pattern : isEventNode ? "{DB_HOST1}" : "{DB_HOST2}",
	  replacement : "{TMP}"
	}
      },{
	procedure : PROCEDURE_PROCESS_NODE,
	params : {
	  nodeid : callArgs[i].id,
	  path : sPath,
	  pattern : isEventNode ? "{DB_HOST2}" : "{DB_HOST1}",
	  replacement : "${nodes.sqldb[0].address}"
	}
      },{
	procedure : PROCEDURE_PROCESS_NODE,
	params : {
	  nodeid : callArgs[i].id,
	  path : sPath,
	  pattern : "{TMP}",
	  replacement : "${nodes.sqldb[1].address}"
	}
      });
}

return {
    result: 0,
    onAfterReturn : {
      call : aActions
    }
};