//@auth
//@url(wordpress.getversion)
//@req(envName)

import com.hivext.api.Response;

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

return new WordPressAPI(envName).getVersion();
