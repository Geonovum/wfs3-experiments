# API as INSPIRE Download Service
In a [discussion paper on WFS3 as INSPIRE Download Service](https://webgate.ec.europa.eu/fpfis/wikis/download/attachments/299735841/DOC-5%20IRs-WFS3.0%20mapping%20discussion%20paper.pdf?version=1&modificationDate=1540280014657&api=v2)

## Findings
In general, most INSPIRE requirements could be fullfilled with OGC API Features.

Topics that need some extra attention are:
1. service metadata
1. [CRSses (other than WGS84)](#crs)
1. [multilingual support](#multilingual-support)
1. [Download entire dataset](#download-entire-dataset)
1. [Spatial dataset identifier as collectionId](#spatial-dataset-identifier-as-collectionid)
1. harmonised data
1. search / filtering capabilities

Some of these are discussed below (rest is work in progress).

### Multilingual support
Several approaches are mentioned:
1. The discussion paper suggests an extension for languages, so the ```/api``` and ```/collections``` resources can be requested in other languages, e.g. using ```lang=```. But
1. **OGC API Features describes to use HTTP Headers** (see [issue #161 in OGC's Github repo](https://github.com/opengeospatial/WFS_FES/issues/161)) -> This is the preferred OGC API Features approach.

### Download entire dataset
INSPIRE mandates that an entire dataset can be downloaded. How to do this in WFS3 if there is a serverside limit, could need some more discussion. Because from a service provider's point of view, there are datasets where one does not want to have such a hig maximum limit that in one single request all data will be encoded in an ```/collections/{collectionId}/items``` requests.

**For discussion** a separate request to download the entire dataset / for bulk download (e.g.: ```/download```) could be used, so in addition to the default OGC API Features paths.

### CRS
See [CRS](CRS.md)

### Possible issue: spatial dataset identifier as collectionId
The discussion paper mentions to use the Spatial dataset identifier as the collectionId. Currently, the Spatial Dataset identifier is very often a UUID. This would result in less easy to understand paths in the API.

E.g. take a collection for Natura2000:
If the collectionId is ```natura2000```, the API would use nice paths as

```
/collections/natura2000
/collections/natura2000/items
...
```

The Spatial dataset identifier is: ```4bbfdba2-7687-4393-9192-35ff89e6dfd0```. To use this as the collectionId, we get quite ugly (and error-prone) paths, like:
```
/collections/4bbfdba2-7687-4393-9192-35ff89e6dfd0
/collections/4bbfdba2-7687-4393-9192-35ff89e6dfd0/items
...
```

**For discussion**: is this what the mapping should be ideally (from an API user perspective)? And isn't this mapping wrong, because a dataset may contain multiple collections?

### Harmonised data
Implementations that need to offer harmonised data, should also support GML as an encoding (because that is required for INSPIRE). OGC API Features accounts for all kinds of encodings, so from that point there is no issue. However, for querying / filtering the questiona arises how to do that on nested properties for example
