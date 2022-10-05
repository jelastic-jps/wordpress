//@auth
//@url(wordpress.getplugins)
//@req(envName)

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

return new WordPressAPI(envName).getPlugins();
