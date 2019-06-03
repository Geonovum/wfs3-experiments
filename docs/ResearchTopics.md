# Research topics

Suggested research topics for the WFS3 Werkweek are:

1. setup WFS 3 server
2. access and use WFS3 API through:
   1. well known geospatial clients
   2. regular / non-spatial applications
1. Are WFS 3 the and NL APIs strategy compatible or do you still run into problems if you implement both ?
1. Does the CRS extension work?
   1. How to handle CRS notation?
   2. Which CRSs could / should a WFS 3 implementation handle?

1. Are there specific performance problems with the API? Are there implementation choices that can help a WFS3 API be performant?

1. What options do you miss in the Core?
   1. What functionality is missing in WFS3? General and specific for Dutch applications?

1. Will indexing work in Google?
   1. HTML output of the service and of the data: can this be indexed by Google?
   2. *Can WFS3 collections also be registered as a Google dataset (for example by including schema.org elements in the HTML output of the service)?* -> [Succesfully implemented](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/Experiments.md#searching-datasets-and-apis)


1. Apply Linked Data, how?
   1. To what extent do Linked Data and WFS 3 go together? Can you easily produce Linked Data (via JSON-LD, for example) by adjusting the output? What are the possibilities and limitations?

1. What do people think about working with it?

1. how fast / good can WFS3 be integrated into geo-clients?
   1. For web: OpenLayers and / or LeafletJS, ...
   2. For desktop QGIS and / or via GDAL
   3. Online platforms (ArcGIS?)

1. Interoperability testing: calling different servers with 1 client and calling 1 server with different clients.

1. How easy can you mix WFS 3 operations with other API calls? Demo (let) make a service with generic WFS3 operations and specific operations.
   1. What  changes would be needed to use WFS3 as an INSPIRE Download Service?

1. How easily can you do bulk downloads via WFS 3 (also consider INSPIRE obligations)? Is WFS3 suitable for that at all?

1. Can non-geo developers handle WFS 3 via OpenAPI?

1. How do you deal with more complex data structures (such as nesting and multiple attributes, INSPIRE models)
    1. in the (Geo) JSON and HTML output?
    2. need for support in the requests (e.g. for filtering)?

1. More dimensions, 3D:
    1. as an output format
    2. what is needed for support in requests?

2. time / 4D: multidimensional: how can you use WFS3 to build in time elements?
