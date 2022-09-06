//@auth
//@url(wordpress.coreupdate)
//@req(envName)

import com.hivext.api.Response;

var envInfo = jelastic.env.control.GetEnvInfo(envName, session);

if (envInfo.result != 0) return envInfo;
    
for (var i = 0, k = envInfo.nodes; i < k.length; i++) {
    if (k[i].nodeGroup == 'cp' && k[i].ismaster)
        nodeId = k[i].id;
}

var cmd = "curl --silent https://raw.githubusercontent.com/jelastic-jps/wordpress/master/cli/japp.sh > ~/bin/japp.sh && bash ~/bin/japp.sh coreUpdate";

var resp = api.env.control.ExecCmdById(envName, session, nodeId, toJSON([{ command: cmd }]));

if (resp.result != 0) return resp;

var scriptResp;

try {
    scriptResp = JSON.parse(resp.responses[0].out);
} catch(ex) {
    scriptResp = { result: Response.ERROR_UNKNOWN, error: ex, resp: resp }
}

return { result: 0, out: scriptResp };
