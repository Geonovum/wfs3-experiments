# CRS support in OGC API Features
The core of the API specification only supports WGS84. Work has been done already on an extension to support different CRSses. In this document we collect results on experiments with different CRSses.

[CRS Extension OGC API Features](https://github.com/opengeospatial/WFS_FES/blob/master/extensions/crs/18-058.adoc)

For NL we need RijksDriehoekstelsel,

*TODO*

## Sample implementations
* LDProxy implementation, API doc: https://www.ldproxy.nrw.de/topographie?f=json. This document contains several CRSes:
```
...
"crs": [
"http://www.opengis.net/def/crs/EPSG/0/25832",
"http://www.opengis.net/def/crs/OGC/1.3/CRS84",
"http://www.opengis.net/def/crs/EPSG/0/3034",
"http://www.opengis.net/def/crs/EPSG/0/3035",
"http://www.opengis.net/def/crs/EPSG/0/3043",
"http://www.opengis.net/def/crs/EPSG/0/3044",
"http://www.opengis.net/def/crs/EPSG/0/3045",
"http://www.opengis.net/def/crs/EPSG/0/3857",
"http://www.opengis.net/def/crs/EPSG/0/4258",
"http://www.opengis.net/def/crs/EPSG/0/4326",
"http://www.opengis.net/def/crs/EPSG/0/4647",
"http://www.opengis.net/def/crs/EPSG/0/5649",
"http://www.opengis.net/def/crs/EPSG/0/5650",
"http://www.opengis.net/def/crs/EPSG/0/5651",
"http://www.opengis.net/def/crs/EPSG/0/5652",
"http://www.opengis.net/def/crs/EPSG/0/5653",
"http://www.opengis.net/def/crs/EPSG/0/28992",
"http://www.opengis.net/def/crs/EPSG/0/25831",
"http://www.opengis.net/def/crs/EPSG/0/25832",
"http://www.opengis.net/def/crs/EPSG/0/25833"
],
...
```
* BGT, test services: EPSG:28992 (Work in progress):

### Sample requests including CRS, BBOX and BBOX-CRS
#### All items
Request to get all items:

[https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json](https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json)

#### Output in other CRS
The same, but CRS: EPSG:28992 as output in GeoJSON (NOTE: in the HTTP request the parameter value for ```http://www.opengis.net/def/crs/EPSG/0/28992``` needs to be URI encoded, so becomes: ```http%3A%2F%2Fwww.opengis.net%2Fdef%2Fcrs%2FEPSG%2F0%2F28992```):

[https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/28992](https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json&crs=http%3A%2F%2Fwww.opengis.net%2Fdef%2Fcrs%2FEPSG%2F0%2F28992)

The output contains the CRS information encoded in GeoJSON:
```
...
"timeStamp": "2019-06-05T11:12:35Z",
"crs": "http://www.opengis.net/def/crs/EPSG/0/28992",
"features": [
...
```

#### Request in a bbox CRS other than WGS84
To retrieve data in another ```bbox``` CRS than WGS84, the following 2 parameters must be added to a request:

* ```bbox``` with the coordinates expressed in the particular CRS. For example for the Dutch RD (some data in Germany, don't mind the coordinate values): ```bbox=237692,269652,237802,269900```
* ```bbox-crs``` to express the CRS of the bbox of the query (not encoded in this example): ```bbox-crs=http://www.opengis.net/def/crs/EPSG/0/28992```

Example request, returns 2 items in the bbox (collection consists of 97 items):
[https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/28992&bbox=237692,269652,237802,269900&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/28992](https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehr/items?f=json&crs=http%3A%2F%2Fwww.opengis.net%2Fdef%2Fcrs%2FEPSG%2F0%2F28992&bbox=237692,269652,237802,269900&bbox-crs=http%3A%2F%2Fwww.opengis.net%2Fdef%2Fcrs%2FEPSG%2F0%2F28992)

## Samples for BGT
*TODO*



## Possible issues and discussion points
### Alternate links and CRSes
How to deal with alternate links in the ```/collections/{collectionId}/``` if multiple CRSes (and multiple encodings) are supported? Should every combination of CRS and encoding have a separate alternate link? Should there be no alternate links for CRSes? For transparency and discoverability of an API one could argue that there should be an alternate link for all combinations, but this may lead to too much combinations (possibly deterring developers)

### Alternatives for CRS parameters in request and response: use HTTP headers
The Dutch API strategy describes a different apporach to request data in a specific CRS.
[Dutch API Strategy on CRS negotiation (in Dutch)](https://docs.geostandaarden.nl/api/API-Strategie/#crs-negotiation)
