//@local

import com.hivext.api.Response;

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
        var cmd = "curl --silent https://raw.githubusercontent.com/jelastic-jps/wordpress/master/cli/japp.sh > ~/bin/japp.sh && bash ~/bin/japp.sh " + cmd;
        var resp = api.env.control.ExecCmdById(envName, session, this.getMasterNode(), toJSON([{ command: cmd }]));
        if (resp.result != 0) return resp;
        return resp;
    };

    this.ReturnResult = function (scriptResp) {
        try {
            scriptResp = JSON.parse(scriptResp.responses[0].out);
        } catch(ex) {
            scriptResp = { result: Response.ERROR_UNKNOWN, error: ex, resp: scriptResp }
        }

        return scriptResp;
    };

    this.getEngineVersion = function () {
        return this.ReturnResult(this.execCmd('getEngineVersion'));
    };

    this.getPlugins = function () {
        return this.ReturnResult(this.execCmd('getPlugins'));
    };    

    this.getEngineUpdates = function () {
        return this.ReturnResult(this.execCmd('getEngineUpdates'));
    };   
    
    this.updateEngine = function () {
        return this.ReturnResult(this.execCmd('updateEngine'));
    };

    this.getPluginInfo = function (pluginName) {
        var cmd = "getPluginInfo " + pluginName;
        return this.ReturnResult(this.execCmd(cmd));
    };

    this.updatePlugin = function (pluginName) {
        var cmd = "updatePlugin " + pluginName;
        return this.ReturnResult(this.execCmd(cmd));
    };

    this.activatePlugin = function (pluginName) {
        var cmd = "activatePlugin " + pluginName;
        return this.ReturnResult(this.execCmd(cmd));
    };

    this.deactivatePlugin = function (pluginName) {
        var cmd = "deactivatePlugin " + pluginName;
        return this.ReturnResult(this.execCmd(cmd));
    };

    this.deletePlugin = function (pluginName) {
        var cmd = "deletePlugin " + pluginName;
        return this.ReturnResult(this.execCmd(cmd));
    };
}
