//@local

import com.hivext.api.Response;

include_once com.hivext.scripting.wordpress.local.Constants;

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
        return resp;
    };

    this.returnResult = function (scriptResp) {
        try {
            scriptResp = JSON.parse(scriptResp.responses[0].out);
        } catch(ex) {
            scriptResp = { result: Response.ERROR_UNKNOWN, error: ex, resp: scriptResp }
        }

        return scriptResp;
    };

    this.getEngineVersion = function () {
        return this.returnResult(this.execCmd('getEngineVersion'));
    };

    this.getPlugins = function () {
        return this.returnResult(this.execCmd('getPlugins'));
    };    

    this.getEngineUpdates = function () {
        return this.returnResult(this.execCmd('getEngineUpdates'));
    };   
    
    this.updateEngine = function (engineVersion) {
        var resp = this.validateVersion(engineVersion);
        if (resp.result != 0) return resp;
        var cmd = "updateEngine " + resp.version;
        return this.returnResult(this.execCmd(cmd));
    };

    this.getPluginInfo = function (pluginName) {
        var resp = this.validatePluginName(pluginName);
        if (resp.result != 0) return resp;
        var cmd = "getPluginInfo " + resp.pluginName;
        return this.returnResult(this.execCmd(cmd));
    };

    this.updatePlugin = function (pluginName) {
        var resp = this.validatePluginName(pluginName);
        if (resp.result != 0) return resp;
        var cmd = "updatePlugin " + resp.pluginName;
        return this.returnResult(this.execCmd(cmd));
    };

    this.activatePlugin = function (pluginName) {
        var resp = this.validatePluginName(pluginName);
        if (resp.result != 0) return resp;
        var cmd = "activatePlugin " + resp.pluginName;
        return this.returnResult(this.execCmd(cmd));
    };

    this.deactivatePlugin = function (pluginName) {
        var resp = this.validatePluginName(pluginName);
        if (resp.result != 0) return resp;
        var cmd = "deactivatePlugin " + resp.pluginName;
        return this.returnResult(this.execCmd(cmd));
    };

    this.deletePlugin = function (pluginName) {
        var resp = this.validatePluginName(pluginName);
        if (resp.result != 0) return resp;
        var cmd = "deletePlugin " + resp.pluginNamep;
        return this.returnResult(this.execCmd(cmd));
    };

    this.validatePluginName = function (pluginName) {
        if (!/^[A-Za-z0-9,_,-]*$/.test(pluginName)) {
            return { result: INVALID_PARAM, errOut: "PluginName is not valid" }
        }
        return { result: 0, pluginName: pluginName }
    };

    this.validateVersion = function (version) {
        if (!/^[0-9,.]*$/.test(version)) {
            return { result: INVALID_PARAM, errOut: "Version is not valid" }
        }
        return { result: 0, version: version }
    };
  
}
