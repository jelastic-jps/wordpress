getversion - Get Wordpress current version    
getplugins - Get all plugins (name, version, status)    
checkforupdate - Get major and minor updates    

https://app.{hoster}/wordpress/getversion?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 43
    },
    "time": 3607
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": "6.0.2"
    }
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
      "time": 34
    },
    "time": 4236
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": [
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
}
```

https://app.{hoster}/wordpress/checkforupdate?appid=ext&session=[string]&envName=[string]   
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 70
    },
    "time": 4605
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": "WordPress is up to date"
    }
  }
}
```
or    
```
{
  "result": 0,
  "debug": {
    "cpu": {
      "usage": "0",
      "time": 39
    },
    "time": 4242
  },
  "response": {
    "result": 0,
    "out": {
      "result": 0,
      "response": [
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
