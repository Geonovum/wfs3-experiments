# Clients: experiences to use OGC API Features
This document collects experiences and findings on using OGC API Features (OAF) in all kinds of clients. A client could be a custom application, a software library

OGC [has already collected information on clients](https://github.com/opengeospatial/WFS_FES/blob/master/implementations.md). Some of the results we collect here, could be input for that document too.

## General
### Getting the max number of items: limit parameter
Many APIs have a default limit on the number of items in a response. Sometimes the serverside limit is higher than this default limit. To get the maximum number of items an API supports in a single request, one should add the ```limit``` parameter to a request and set it to ```-1```. For example:

```
https://demo.pygeoapi.io/master/collections/dutch_castles/items?f=json&limit=-1
```

Note that a server may still have a limit in a response.

[Screencast (YouTube) of adding GeoJSON from an OGC API Features implementation in QGIS](https://www.youtube.com/watch?v=-PTHglQlfLE&feature=youtu.be)

## Geospatial clients
### QGIS
Support is limited. If the API provides GeoJSON, the data can easily be used / opened in QGIS as a Vector Layer. Because QGIS supports loading a remote dataset, like GeoJSON.

*TODO: create simple screencast*

Properly accessing the API is not available, like accessing the OpenAPI doc and using the paging mechanism.

### NL Maps
Question: what is the best way to use / consume OAF implementations?

## Custom applications
* No tests done yet *

## Javascript: jQuery
[The OAF / WFS3 test client](http://inspirelab.geonovum.nl/wfs3testclient/) uses jQuery to consume an API and display data on a Leaflet JS map. [Source code is available at Github](https://github.com/opengeogroep/ogc-api-features-testclient/).
