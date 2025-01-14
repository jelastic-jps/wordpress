import com.hivext.api.Response;
import org.yaml.snakeyaml.Yaml;
import com.hivext.api.core.utils.Transport;

var cdnAppid = "c05ffa5b45628a2a0c95467ebca8a0b4test";
var lsAppid = "9e6afcf310004ac84060f90ff41a5aba";
var isCDN = jelastic.dev.apps.GetApp(cdnAppid);
var isLS = jelastic.dev.apps.GetApp(lsAppid);

var settings = jps.settings;
var fields = {};
for (var i = 0, field; field = jps.settings.fields[i]; i++)
  fields[field.name] = field;
 
if (isLS.result == 0 || isLS.result == Response.PERMISSION_DENIED) {  
  fields["ls-addon"].hidden = false;
  fields["ls-addon"].value = true;
} else {
  fields["ls-addon"].hidden = true;
  fields["ls-addon"].value = false;
  fields["ls-addon"].showIf = null;
}
  
if (isCDN.result == 0 || isCDN.result == Response.PERMISSION_DENIED) {
  fields["cdn-addon"].hidden = false;
  fields["cdn-addon"].value = true;
} else {
  fields["cdn-addon"].hidden = true;
  fields["cdn-addon"].value = false;
}

return {
    result: 0,
    settings: settings
};
