//@auth
//@url(wordpress.getplugininfo)
//@req(envName,pluginName)

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

var pluginName = getParam("pluginName");

return new WordPressAPI(envName).getPluginInfo(pluginName);
