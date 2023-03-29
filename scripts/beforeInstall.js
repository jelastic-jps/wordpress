var wpbfp = '${settings.wp_protect}' == 'true' ? "THROTTLE" : "OFF";

var resp = {
  result: 0,
  ssl: !!jelastic.billing.account.GetQuotas('environment.jelasticssl.enabled').array[0].value,
  nodes: []
}

if ('${settings.ls-addon:false}'== 'true') {
  resp.nodes.push({
    nodeType: "llsmp",
    engine: "${settings.php_engine:php8.2}",
    count: 1,
    flexibleCloudlets: ${settings.flexibleCloudlets:16},
    fixedCloudlets: ${settings.fixedCloudlets:1},
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
    engine: "${settings.php_engine:php8.2}",
    count: 1,
    flexibleCloudlets: ${settings.flexibleCloudlets:16},
    fixedCloudlets: ${settings.fixedCloudlets:1},
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
