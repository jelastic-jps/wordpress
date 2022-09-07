//@auth
//@url(wordpress.checkforupdate)
//@req(envName)

import com.hivext.api.Response;

include_once com.hivext.scripting.wordpress.local.WordpressAPI;

return new WordPressAPI(envName).checkForUpdate();
