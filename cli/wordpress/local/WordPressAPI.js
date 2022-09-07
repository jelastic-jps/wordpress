//@local

var WordPressAPI = function (envName) {
    this.getMasterNode = function () {
        var resp = jelastic.env.control.GetEnvInfo(envName, session);
        
        if (resp.result != 0) return resp;
    
        for (var i = 0, k = resp.nodes; i < k.length; i++) {
            if (k[i].nodeGroup == 'cp' && k[i].ismaster)
                nodeId = k[i].id;
        }
        return nodeId;
    };

    this.execCmd = function (cmd) {
        var cmd = "bash ~/bin/japp.sh " + cmd;

        var resp = api.env.control.ExecCmdById(envName, session, this.getMasterNode(), toJSON([{ command: cmd }]));
        if (resp.result != 0) return resp;
        return resp;
    };

    this.ReturnResult = function (scriptResp, apiName) {
        try {
            scriptResp = JSON.parse(scriptResp.responses[0].out);
        } catch(ex) {
            scriptResp = { result: Response.ERROR_UNKNOWN, error: ex, resp: resp }
        }

        return { result: 0, apiName: scriptResp };
    };
    
    this.getVersion = function () {
        var scriptResp = this.execCmd('getVersion');
        return this.ReturnResult(scriptResp, 'version');
    };

    this.getPlugins = function () {
        return this.execCmd('getPlugins');
    };
    
    
    this.activatePlugin = function (pluginName) {
        return this.execCmd('activatePlugin --pluginName ' + pluginName);
    };
}
