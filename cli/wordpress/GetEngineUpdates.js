//@auth
//@url(wordpress.getengineupdates)
//@req(envName)

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

return new WordPressAPI(envName).getEngineUpdates();
