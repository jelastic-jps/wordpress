getversion - Get Wordpress current version    
getplugins - Get all plugins (name, version, status)    
checkforupdate - Get major and minor updates    
coreupdate - Update core to latest version

https://app.{hoster}/wordpress/getversion?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 43
    },
    "time": 2435
  },
  "response": {
    "result": 0,
    "version": "5.5.3"
  }
}
```

https://app.{hoster}/wordpress/getplugins?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 45
    },
    "time": 3101
  },
  "response": {
    "result": 0,
    "plugins": [
      {
        "name": "akismet",
        "update": "available",
        "version": "4.2.4",
        "status": "inactive"
      },
      {
        "name": "hello",
        "update": "none",
        "version": "1.7.2",
        "status": "inactive"
      },
      {
        "name": "nginx-cache",
        "update": "none",
        "version": "1.0.5",
        "status": "active"
      },
      {
        "name": "w3-total-cache",
        "update": "available",
        "version": "2.2.1",
        "status": "active"
      },
      {
        "name": "advanced-cache.php",
        "update": "none",
        "version": "",
        "status": "dropin"
      }
    ]
  }
}
```

https://app.{hoster}/wordpress/checkforupdate?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 28
    },
    "time": 2408
  },
  "response": {
    "result": 0,
    "versionsToUpdate": [
      {
        "update_type": "minor",
        "version": "5.5.10"
      },
      {
        "update_type": "major",
        "version": "6.0.2"
      }
    ]
  }
}
```

https://app.{hoster}/wordpress/coreupdate?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 9
    },
    "time": 20259
  },
  "response": {
    "result": 0,
    "version": "6.0.2"
  }
}
```


### Errors    

**The system result (for example script does not exist)**   
```
{
  "result": 1702,
  "debug": {
    "cpu": {
      "usage": "13",
      "time": 34
    },
    "time": 63
  },
  "response": null,
  "source": "hx-core",
  "error": "script = wordpress.failmethod not found"
}
```
**Script result (for examle, if environment does not exist, or not running ……)**    
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "1",
      "time": 12
    },
    "time": 206
  },
  "response": {
    "result": 2212,
    "responses": [
      
    ],
    "source": "JEL",
    "error": "Not allowed to execute this service for current Environment status [ENV_STATUS_TYPE_SLEEP]. Required statuses [ENV_STATUS_TYPE_RUNNING]"
  }
}
```
**WP-CLI result (for examle, wp-config.php does not exist**    
Code result: **99**
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 33
    },
    "time": 3051
  },
  "response": {
    "result": 0,
    "out": {
      "result": 99,
      "response": "Get plugins list failed, please check /tmp/japp.log for details"
    }
  }
}
```
read logs
https://app.{hoster}/JElastic/env/file/rest/read?appid=[appid]&nodeid=[nodeid]&nodeGroup=cp&path=%2Ftmp%2Fjapp.log&session=[string]   

```
{
  "result": 0,
  "body": "\n[2022-09-05 11:09:12]: Install WP-CLI...done\n[2022-09-05 11:09:13]: Get plugins list...failed\n==============ERROR==================\nError: 'wp-config.php' not found.\nEither create one manually or use `wp config create`.\n============END ERROR================\n"
}
```
