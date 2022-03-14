import com.hivext.api.Response;

var cdnAppid = "c05ffa5b45628a2a0c95467ebca8a0b4",
    lsAppid = "9e6afcf310004ac84060f90ff41a5aba",
    fields = {},
    field,
    resp,
    LE = "le-addon",
    CDN = "cdn-addon";

function defineAppFields(appid, name) {
    resp = jelastic.dev.apps.GetApp(appid);
    
    if (resp.result == 0 || resp.result == Response.PERMISSION_DENIED) {
        fields[name].hidden = false;
        fields[name].value = true;
    } else {
        fields[name].hidden = true;
        fields[name].value = false;
    }
}

for (var i = 0, n = jps.settings.fields.length; i < n; i++) {
    field = jps.settings.fields[i];
    fields[field.name] = field;
}

if (fields[CDN]) defineAppFields(cdnAppid, CDN);
if (fields[LE]) defineAppFields(lsAppid, LE);

  if (!fields[LE].hidden) {
      if (("${quota.environment.externalip.enabled}" == 0 || "${quota.environment.externalip.maxcount}" == 0 || "${quota.environment.externalip.maxcount.per.node" == 0) &&
          ("${quota.environment.externalipv6.enabled}" == 0 || "${quota.environment.externalipv6.maxcount}" == 0 || "${quota.environment.externalipv6.maxcount.per.node}" == 0)) {
          fields[LE].hidden = true;
          fields[LE].value = false;
      };
  }

return {
    result: 0,
    settings: jps.settings
};
