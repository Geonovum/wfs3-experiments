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

[Basic screencast how to use QGIS for visualising data from OGC API Features](https://www.youtube.com/watch?v=-PTHglQlfLE&feature=youtu.be)

Properly accessing the API is not possible now, like accessing the OpenAPI doc and using the paging mechanism.

### NL Maps
Question: what is the best way to use / consume OAF implementations?

### GeoNetwork
Implemented an early wfs3 client to facilitate data downloads from metadata advertising a wfs3 endpoint.
Question: in some xslt cases we’d prefer to have the root and collections response encoded as xml, how does the service advertise that it supports that encoding, only via the api-yaml file? So we’d need to parse that file before connecting to the service (requires a parser for yet another encoding)?
Question: what are the conventions to identify a link to external collection metadata between the other links?

### GDAL / OGR
There is experimental support for WFS 3 in GDAL / OGR, a well-known and much used conversion/transformation library for many geospatial formats. See [the GDAL documentation on WFS3](https://gdal.org/drivers/vector/wfs3.html) for implementation details.

## Custom applications
*No tests done yet*

## Javascript: jQuery
[The OAF / WFS3 test client](http://inspirelab.geonovum.nl/wfs3testclient/) uses jQuery to consume an API and display GeoJSON data on a Leaflet JS map. [Source code is available at Github](https://github.com/opengeogroep/ogc-api-features-testclient/).
