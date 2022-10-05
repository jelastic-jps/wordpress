//@auth
//@url(wordpress.updateengine)
//@req(envName,engineVersion)

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

var engineVersion = getParam("engineVersion");

return new WordPressAPI(envName).updateEngine(engineVersion);
