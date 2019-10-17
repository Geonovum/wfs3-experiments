# Things that need more attention / don’t work well yet

## Specification: CRS support
The core of the OGC API Features specification does not support other CRSes than WGS84. In an extension support for other CRSes will be addressed. During the experiments, these topics were mentioned that need to be addressed:
1. Alternate links and CRSes. How to deal with alternate links in the /collections/{collectionId}/ if multiple CRSes (and multiple encodings) are supported?
1. Should the CRS extension prescribe HTTP headers to negotiate CRSes?
1. And specifically for GeoJSON output: what notation to use to advertise a specific CRS?

Technical notes from the experiments: [(]CRS.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/CRS.md).

## Implementations of an API: more guidance
Regarding an implementation of an API, there might be a need for more guidance for an implementor. Topics that could be useful to an implementor are:
1. _dealing with limits_ for the number of features: what is a useful limit, considering the source data and it’s use?
1. if _other CRSes_ are to be supported, how should this be done exactly? And specifically for GeoJSON output: what notation to use to advertise a specific CRS?
1. _documentation_: just providing an OpenAPI document and metadata might not be enough for third-party developers / users. Consider extra documentation, for example a getting started, documentation on the data in the API, what kind of filtering could be useful on the data etc. Include (working) examples when possible. See [Chapter 3. of Kennisplatform APIs documentation on user/developer experience (in Dutch)](https://docs.geostandaarden.nl/api/API-Strategie/#inspelen-op-gebruikerswensen-de-sleutel-tot-gebruik)
1. _identifiers_: determine what would be the best approach for identifiers: which attribute of the source data is the best item identifier. Also think of using URIs, "local" identifiers.
1. _convenience operations / requests_: in addition to default OGC API Features, other types of requests could be very useful. For example: for bulk downloads of all data in the API or a specific collection, one could create pre-generated files containing all data in a suitable format (e.g.: in GeoPackage format) and add an endpoint for that (/collections/{collectionId}/download) . Or for certain much used filters, provide a separate endpoint/operation (e.g.: get the item(s) closest to a specific location, then an operation like /closeby?lon=...&lat=... could be useful).

Technical notes from the experiments: [APIimplementations.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/APIimplementations.md).

## Clients
Regarding _generic geospatial clients_ support to access an API is very limited. While accessing an API and consuming data using custom code is straightforward, only just a few generic geospatial clients (desktop software, webbased clients and libraries) support OGC API Features. And what is supported, is mostly experimental. Data can be used in a bit more cases though, using some “tricks”.

Technical notes from the experiments: [Clients.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/Clients.md).
