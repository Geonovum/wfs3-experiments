# Things that work well
The participants identified the following things that work well.

## Creation of an API
There is some software available (also open source) to offer an OGC API Features instance on a dataset. The software is all quite new, but implementation of the basics seems to be okay. Using existing software, it is quite straightforward to offer an API, depending on the technical skills of the developer. As an example, 4 WFS 3.0 services / OGC API Features API implementations with Dutch test data in (in 2 CRSes) have been created during this week.

Technical notes from the experiments: [APIimplementations.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/APIimplementations.md).

## Accessing an API
Accessing an API and consuming data using custom code is straightforward. Also the possibility to browse through data in a web browser is considered useful when assessing the data and API for it’s usefulness. Experiences are very positive. A basic demonstration client has been created, with just some lines of code. Accessing an API from an existing tool has been done easily as well.

Technical notes from the experiments: [Clients.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/Clients.md).

## Discoverability of APIs and datasets
If the HTML pages of an API are setup correctly (for example annotated with Schema.org markup), search engines can easily index the API and the dataset the API offers. This way datasets and their APIs can be discovered using common search engines. Even individual items from the API are found.

Technical notes from the experiments: [Search.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/Search.md).

## Testing and validation
Although the specification is new, there are some test and validation tools available already:
- a generic OpenAPI document validator
- a test client for basic manual testing / inspection if an API is funtioning
- a monitoring tool (GeoHealthCheck) to monitor uptime and availability.

Technical notes from the experiments: [Validation.md](https://github.com/Geonovum/wfs3-experiments/blob/master/docs/Validation.md).
