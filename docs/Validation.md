# Validation, Testing and Monitoring
This relates to aspects that deal with the Quality of Service (QoS) for
WFS3 Endpoints and software tools to apply these.

## Open Geospatial Consortium (OGC)

OGC organizes Testbeds and has a standards compliance test tool (CITE).

* OGC Testbed for WFS3: https://docs.opengeospatial.org/per/18-045.html
* OGC Compliance: CITE tests https://cite.opengeospatial.org

CHECK: also CITE tests for WFS3? Where?

## Testing

Various clients where one can paste in a WFS3 endpoint URL.

* Geonovum Leaflet App: http://inspirelab.geonovum.nl/wfs3testclient/
* Brad Hards: OpenSphere https://frozen-lime.surge.sh/ with Plugin https://github.com/bradh/opensphere-plugin-ogcapi

## Validation

### OpenApi spec Validator 

Found at https://github.com/p1c2u/openapi-spec-validator

```
$ pip install openapi-spec-validator
$ python
>>> from openapi_spec_validator import validate_spec_url
>>> validate_spec_url('https://demo.pygeoapi.io/master/api?f=json')

(interesting error related to Processes/WPS REST)
```
## Monitoring

This is about continuously monitoring your endpoint, for example if a backend DB
is not running or corrupt, some of the WFS3 endpoints may be responding ok (as
response comes from configuration), but getting Items (Features) will give 
errors. Hence regular uptime checkers won't often detect these.

### GeoHealthCheck

[GeoHealthCheck](https://geohealthcheck.org) has added a [WFS3Drilldown Probe](https://github.com/geopython/GeoHealthCheck/blob/master/GeoHealthCheck/plugins/probe/wfs3.py): 
it will fetch and navigate/crawl down within a WFS3 endpoint, check for some required variables.

Two modes can be set: 'basic` (only "Capabilities-type" check) and 'full': got through
all Collections and do GetItem (limit=1) on each and check for some required attributes.

To test: 

* go to https://demo.geohealthcheck.org
* register if you don't have an account, provide a valid email if you ever forget password
* in Menu click `Add+|OGC API Features (WFS3)`
* enter the top (root) WFS3 endpoint URL (NOT e.g. the /api), no parameters like `f=json` needed)
* you will get into the editor for the WFS3Drilldown Probe
* click Edit button
* change `basic` to `full`
* click `Save` button on bottom
* click `Test` button on bottom
* see outcome `True` or `False`

* click `Details` to expand result




