import com.hivext.api.environment.Environment;
import com.hivext.api.environment.File;

var sPath = "${nginxphp.SERVER_WEBROOT}/ROOT/db-config.php",
    NODE_MISSION_COMPUTE = "cp",
    PROCEDURE_PROCESS_NODE = "replace",
    APPID = hivext.local.getParam("TARGET_APPID"),
    SESSION = hivext.local.getParam("session"),
    aComputeNodes = [],
    aActions = [],
    item,
    lastCoNode,
    envInfoResponse,
    isEventNode;
    

env = hivext.local.exp.wrapRequest(new Environment(APPID, SESSION));
envInfoResponse = env.getEnvInfo();
str  = env.getEnvInfo();
if (!envInfoResponse.isOK()) {
    return envInfoResponse;
}

var nodes = envInfoResponse.getNodes();
var iterator = nodes.iterator();

while(iterator.hasNext()) {
    var softNode = iterator.next();
    var softNodeProperties = softNode.getProperties();
      
    if (NODE_MISSION_COMPUTE.equals(softNodeProperties.getNodeMission())) {
        aComputeNodes.push(softNode);
    }
}
//java.lang.System.out.println("---------dzotic-aComputeNodes.length-------->" + aComputeNodes.length);

lastCoNode = aComputeNodes[aComputeNodes.length-1].id;

if (aComputeNodes.length %2 == 1) {

  aActions.push({
      procedure : PROCEDURE_PROCESS_NODE,
      params : {
      nodeid : "${event.response.array.id}",
	  nodeId : "${event.response.array.id}",
	  path : sPath,
	  pattern : "${nodes.sqldb[0].address}",
	  replacement : "{ONE_DB}"
      }
  },{
      procedure : PROCEDURE_PROCESS_NODE,
      params : {
      nodeid : "${event.response.array.id}",
	  nodeId : "${event.response.array.id}",
	  path : sPath,
	  pattern : "${nodes.sqldb[1].address}",
	  replacement : "${nodes.sqldb[0].address}"
      }
  },{
      procedure : PROCEDURE_PROCESS_NODE,
      params : {
      nodeid : "${event.response.array.id}",
	  nodeId : "${event.response.array.id}",
	  path : sPath,
	  pattern : "{ONE_DB}",
	  replacement : "${nodes.sqldb[1].address}"
      }
  });
  //java.lang.System.out.println("---------dzotic-aActions-------->" + toJSON(aActions));
}

return {
    result: 0,
    onAfterReturn : {
        call : aActions
    }
};