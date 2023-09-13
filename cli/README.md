## API Methods for WordPress Environments

#### GetEngineVersion

Returns the current version of the WordPress engine.

https://app.{hoster}/wordpress/getengineversion?appid=ext&session=[string]&envName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token

Response:
```
  "response": {
    "result": 0,
    "version": "5.5.3"
  }
```

#### GetEngineUpdates

Returns the latest minor and major versions to which the current WordPress engine can be updated.

https://app.{hoster}/wordpress/getengineupdates?appid=ext&session=[string]&envName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token

Response:
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

If the version is up to date:
```
  "response": {
    "result": 0,
    "versionsToUpdate": []
  }
```

#### UpdateEngine

Updates the WordPress engine to the specified version.

https://app.{hoster}/wordpress/updateengine?appid=ext&session=[string]&envName=[string]&engineVersion=[version]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **engineVersion**: "engine version" - WordPress engine version to update to (see the *GetEngineUpdates* method)

Response:
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

Returns the list of currently installed WordPress plugins.

https://app.{hoster}/wordpress/getplugins?appid=ext&session=[string]&envName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token

Response:
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

Returns detailed information on the specific WordPress plugin.

https://app.{hoster}/wordpress/getplugininfo?appid=ext&session=[string]&envName=[string]&pluginName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **pluginName**: "plugin name" - target WordPress plugin name (see the *GetPlugins* method)

Response:
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

Activates a specific WordPress plugin.

https://app.{hoster}/wordpress/activateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **pluginName**: "plugin name" - target WordPress plugin name (see the *GetPlugins* method)

Response:
```
  "response": {
    "result": 0,
    "pluginStatus": "active"
  }
```

#### DeactivatePlugin

Deactivates a specific WordPress plugin.

https://app.{hoster}/wordpress/deactivateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **pluginName**: "plugin name" - target WordPress plugin name (see the *GetPlugins* method)

Response:
```
  "response": {
    "result": 0,
    "pluginStatus": "inactive"
  }
```


#### UpdatePlugin

Updates a specific WordPress plugin.

https://app.{hoster}/wordpress/updateplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **pluginName**: "plugin name" - target WordPress plugin name (see the *GetPlugins* method)

Response:
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

Deletes a specific WordPress plugin.

https://app.{hoster}/wordpress/deleteplugin?appid=ext&session=[string]&envName=[string]&pluginName=[string]

Parameters:
- **envName** : "string" - target environment name
- **session** : "string" - user session or personal access token
- **pluginName**: "plugin name" - target WordPress plugin name (see the *GetPlugins* method)

Response:
```
  "response": {
    "result": 0,
    "pluginStatus": "deleted"
  }
```


### Errors

- **system results** (for example, the script does not exist)

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

- **script results** (for examle, environment does not exist, not running, etc.)    

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

- **WP API results** (for examle, wp-config.php does not exist)

```
  "response": {
    "result": 13001,
    "errOut": "Error: 'wp-config.php' not found.\nEither create one manually or use `wp config create`."
  }

```
