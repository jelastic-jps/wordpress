//@auth
//@url(wordpress.coreupdate)
//@req(envName)

import com.hivext.api.Response;

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

return new WordPressAPI(envName).coreUpdate();
