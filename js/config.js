var respecConfig = {
  specStatus: "GN-BASIS",
  specType: "HR",
  pubDomain: "serv",
  shortName: "oapif",
  // publishDate: "2017-12-22",
  license: 'cc-by-nd',
  doJsonLd: true,
  editors: [
    {
      name: "Thijs Brentjens",
      company: "Geonovum",
      companyURL: "http://www.geonovum.nl/",
    },
    // TODO: mention authors explicitly
    {
      name: "Participants experiments",
      // company: "...",
      companyURL: "http://www.geonovum.nl/",
    },
  ],
  // url van de github repository waar je in werkt
  github: "https://github.com/Geonovum/wfs3-experiments",
  // url van de issue lijst in de github repository waar je in werkt
  issueBase: "https://github.com/Geonovum/wfs3-experiments/issues/",
  format: "markdown",
  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].
  localBiblio: {
    OAPIF: {
      href: "https://www.opengeospatial.org/standards/ogcapi-features",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: ["Clemens Portele","Panagiotis (Peter) A. Vretanos", "Charles Heazel"],
      date: "2019-10-14",
      publisher: "Open Geospatial Consortium",
    },
  },
};
