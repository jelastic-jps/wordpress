import com.hivext.api.Response;
import org.yaml.snakeyaml.Yaml;
import com.hivext.api.core.utils.Transport;

var cdnAppid = "c05ffa5b45628a2a0c95467ebca8a0b4";
var lsAppid = "9e6afcf310004ac84060f90ff41a5aba";
var group = jelastic.billing.account.GetAccount(appid, session);
var isCDN = jelastic.dev.apps.GetApp(cdnAppid);
var isLS = jelastic.dev.apps.GetApp(lsAppid);

//checking quotas
var markup = "", cur = null, text = "used";

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
    
var extIP = jelastic.billing.account.GetQuotas('environment.externalip.enabled');
var extIPperEnv = jelastic.billing.account.GetQuotas('environment.externalip.maxcount');
var extIPperNode = jelastic.billing.account.GetQuotas('environment.externalip.maxcount.per.node');

if ((extIP.result == 0 && extIP.array[0].value) && (extIPperEnv.result == 0 && extIPperEnv.array[0].value >= 1) && (extIPperNode.result == 0 && extIPperNode.array[0].value >= 1)) {
  fields["displayfield"].markup = "Some advanced features are not available. Please upgrade your account.";
  fields["displayfield"].cls = "warning";
  fields["displayfield"].hideLabel = true;
  fields["displayfield"].height = 25;
  fields["le-addon"].disabled = false;
  fields["le-addon"].value = true;
  fields["bl_count"].markup = "External IP is not available. " + markup + "Please upgrade your account.";
}

return {
    result: 0,
    settings: settings
};
