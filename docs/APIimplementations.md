# API implementations
These API implementations can be used for experiments:
* (temporary) demo api on Dutch BGT (large scale topography) data subset of the town of Swifterbant (JSON only): [http://52.166.65.213/test/bgt/wfs/3.0](http://52.166.65.213/test/bgt/wfs/3.0).  Github repository: [https://github.com/PDOK/wfs-3.0](https://github.com/PDOK/wfs-3.0)
* Geonovum demo API INSPIRElab: [http://inspirelab.geonovum.nl/test/wfs3](http://inspirelab.geonovum.nl/test/wfs3), including addresses in Swifterbant. Geoserver 2.15, including WFS3 plugin (community module)
* [Pygeoapi](https://pygeoapi.io/) demo website: [https://demo.pygeoapi.io](https://demo.pygeoapi.io). Service via  https://demo.pygeoapi.io/master . Includes WFSv2 proxy to PDOK and RCE WFSs.

## Lessons learned when creating an API
*TODO: also add lessons learned in general*
### General
* there is some software available to offer an OGC API Features instance on . The software is all quite new, but  

### Considerations
*TODO: terminology*
Following points could be taken into consideration when offering an API:
* limits: what is a reasonable serverside max limit? Is it possible to set it higher than the number of items or even don't have a serverside max limit (if the API provides smaller datasets for example)? That would allow for downloading a collection in one request. (TODO: example) Default limit: not too high, to allow for easy browsing through the data.
* documentation on the API: just providing an OpenAPI document and metadata might not be enough for third-party developers / users. Consider extra documentation, for example on the data in the API, what kind of filtering could be useful on the data. Include (working) examples when possible. (*TODO: find examples of such API documentation*)
* identifiers: determine what would be the best approach for identifiers: which attribute of the source data is the best item identifier. Also think of using URIs, "local" identifiers.
* convenience operations / requests: in addition to default OGC API Features, other types of requests could be very useful. For example: for bulk downloads of all data in the API or a specific collection, one could create pre-generated files containing all data in a suitable format (e.g.: in GeoPackage format) and add an endpoint for that (```/collections/{collectionId}/download```) . Or for certain much used filters, provide a separate endpoint/operation (e.g.: get the item(s) closest to a specific location, then an operation like ```/closeby?lon=...&lat=...``` could be useful)
