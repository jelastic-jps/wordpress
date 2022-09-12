## WordPress API methods for WordPress environments

#### GetEngineVersion 
Get Wordpress current version

https://app.{hoster}/wordpress/getengineversion?appid=ext&session=[string]&envName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  

Response  
```
  "response": {
    "result": 0,
    "version": "5.5.3"
  }
```

#### GetEngineUpdates 
Get major and minor versions for engine update 

https://app.{hoster}/wordpress/getengineupdates?appid=ext&session=[string]&envName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  

Response  
```
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
```
if version is up to date

```
  "response": {
    "result": 0,
    "versionsToUpdate": []
  }

```

#### UpdateEngine 
Update Wordpress engine

https://app.{hoster}/wordpress/updateengine?appid=ext&session=[string]&envName=[string]&engineVersion=[version]   

Parameters  
**envName** : "string"  
**session** : "string"  
**engineVersion**: "Engine version" 

Response  
```
  "response": {
    "result": 0,
    "version": {
      "oldVersion": "5.5.3",
      "newVersion": "6.0.2"
    }
  }
```

#### GetPlugins 
Get plugins list

https://app.{hoster}/wordpress/getplugins?appid=ext&session=[string]&envName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  

Response  
```
  "response": {
    "result": 0,
    "plugins": [
      {
        "name": "akismet",
        "update": "none",
        "version": "5.0",
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
        "update": "none",
        "version": "2.2.4",
        "status": "active"
      },
      {
        "name": "advanced-cache.php",
        "update": "none",
        "version": "",
        "status": "dropin"
      },
      {
        "name": "object-cache.php",
        "update": "none",
        "version": "",
        "status": "dropin"
      }
    ]
  }

```

#### GetPluginInfo 
Get info about plugin

https://app.{hoster}/wordpress/getplugininfo?appid=ext&session=[string]&envName=[string]&pluginName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  
**pluginName**: "Plugin name" 

Response  
```
  "response": {
    "result": 0,
    "pluginInfo": {
      "author": "Matt Mullenweg",
      "name": "hello",
      "description": "This is not just a plugin, it symbolizes the hope and enthusiasm of an\nentire generation summed up in two words sung most famously by Louis\nArmstrong: Hello, Dolly. When activated you will randomly see a lyric from\n<cite>Hello, Dolly<\/cite> in the upper right of your admin screen on every\npage.",
      "title": "Hello Dolly",
      "version": "1.7.2",
      "status": "inactive"
    }
  }
```

#### ActivatePlugin 
Activate plugin

https://app.{hoster}/wordpress/activateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  
**pluginName**: "Plugin name" 

Response  
```
  "response": {
    "result": 0,
    "pluginStatus": "active"
  }
```

#### DeactivatePlugin 
Dectivate plugin

https://app.{hoster}/wordpress/deactivateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  
**pluginName**: "Plugin name" 

Response  
```
  "response": {
    "result": 0,
    "pluginStatus": "inactive"
  }
```


#### UpdatePlugin 
Update plugin

https://app.{hoster}/wordpress/updateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  
**pluginName**: "Plugin name" 

Response  
```
  "response": {
    "result": 0,
    "version": {
      "oldVersion": "1.6",
      "newVersion": "1.7.2"
    }
  }
```

#### DeletePlugin 
Delete plugin

https://app.{hoster}/wordpress/deleteplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]   

Parameters  
**envName** : "string"  
**session** : "string"  
**pluginName**: "Plugin name" 

Response  
```
  "response": {
    "result": 0,
    "pluginStatus": "deleted"
  }
```


#### UpdateEngine 
Update Wordpress engine

https://app.{hoster}/wordpress/updateengine?appid=ext&session=[string]&envName=[string]&engineVersion=[version]   

Parameters  
**envName** : "string"  
**session** : "string"  
**engineVersion**: "Engine version" 

Response  
```
  "response": {
    "result": 0,
    "version": {
      "oldVersion": "5.5.3",
      "newVersion": "6.0.2"
    }
  }
```















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
