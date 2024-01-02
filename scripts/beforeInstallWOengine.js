var wpbfp = '${settings.wp_protect}' == 'true' ? "THROTTLE" : "OFF";

var resp = {
  result: 0,
  ssl: !!jelastic.billing.account.GetQuotas('environment.jelasticssl.enabled').array[0].value,
  nodes: []
}

if ('${settings.ls-addon:false}'== 'true') {
  resp.nodes.push({
    nodeType: "llsmp",
    count: 1,
    cloudlets: "${settings.cloudlets:16}",
    diskLimit: "${settings.diskspace:[quota.disk.limitation]}",
    nodeGroup: "cp",
    skipNodeEmails: "true",
    displayName: "AppServer",
    env: {
      SERVER_WEBROOT: "/var/www/webroot/ROOT",
      REDIS_ENABLED: "true",
      WAF: "${settings.waf}",
      WP_PROTECT: wpbfp,
      WP_PROTECT_LIMIT: 100
    }
  })
} else {
  resp.nodes.push({
    nodeType: "lemp",
    count: 1,
    cloudlets: "${settings.cloudlets:16}",
    diskLimit: "${settings.diskspace:[quota.disk.limitation]}",
    nodeGroup: "cp",
    skipNodeEmails: "true",
    displayName: "AppServer",
    env: {
      SERVER_WEBROOT: "/var/www/webroot/ROOT",
      REDIS_ENABLED: "true"
    }
  })
}

return resp;
