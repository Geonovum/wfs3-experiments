# Clients: experiences to use OGC API Features
This document collects experiences and findings on using OGC API Features (OAF) in all kinds of clients. A client could be a custom application, a software library 

OGC [has already collected information on clients](https://github.com/opengeospatial/WFS_FES/blob/master/implementations.md). Some of the results we collect here, could be input for that document too.

## Geospatial clients
### QGIS
Support is limited, but if the API provides GeoJSON, the data can easily be used / opened in QGIS as a Vector Layer.
Properly accessing the API is not available, like accessing the OpenAPI doc and using the paging mechanism.

### NL Maps
Question: what is the best way to use / consume OAF implementations?

## Custom applications
* No tests done yet *

## Javascript: jQuery
[The OAF / WFS3 test client](http://inspirelab.geonovum.nl/wfs3testclient/) uses jQuery to consume an API and display data on a Leaflet JS map. [Source code is available at Github](https://github.com/opengeogroep/ogc-api-features-testclient/).



