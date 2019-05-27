# Research topics

Suggested research topics for the WFS3 Werkweek are:

1. setup WFS 3 server
2. access and use WFS3 API through:
   1. well known geospatial clients
   2. regular / non-spatial applications

In Dutch (TODO: translate):

1. Zijn WFS 3 en NL API strategie compatibel of loop je nog tegen dingen aan als je echt gaat implementeren?
1. Werkt de CRS extensie?
   1. hoe omgaan met notatie van CRS?
   1. Welke CRSen zou een WFS 3 implementatie kunnen / moeten ondersteunen?
1. Zijn er specifieke performance problemen / hoe is een WFS3 API met goede performance te maken?
1. Welke mogelijkheden mis je in de Core?
   1. welke functies worden gemist in WFS3? Algemeen en specifiek voor Nederlandse toepassingen?
1. Lukt het indexeren in Google?
   1. HTML output van de service en van de data: is dit door Google te indexeren
   1. kunnen WFS3 collections ook als Google dataset worden aangemeld (bijvoorbeeld door schema.org elementen op te nemen in de HTML output van de service)?
1. Linked data toepassen, hoe?
   1. in hoeverre gaan Linked Data en WFS 3 samen? Kan je door output aan te passen al eenvoudig Linked Data (via bijv JSON-LD) produceren? Wat zijn mogelijkheden en beperkingen?
1. Wat vinden mensen ervan om ermee te werken?
1. hoe snel / goed is WFS3 in te bouwen in geo-clients?
   1. Voor web: OpenLayers en/of LeafletJS, ...
   1. voor desktop QGIS en/of gebruik van GDAL
   1. Online platformen (ArcGIS?)
1. testen van interoperabiliteit: verschillende servers aanroepen met 1 client en 1 server aanroepen met verschillende clients.
1. Hoe eenvoudig kan je wfs3 operaties mixen met andere API calls? Demo (laten) maken van een service met generieke WFS3 operaties en specifieke operaties.
1. Hoe eenvoudig kan je bulk downloads doen via WFS 3? Is WFS3 daar uberhaupt geschikt voor?
1. kunnen niet-geo ontwikkelaars uit de voeten met WFS 3, via OpenAPI?
1. Hoe ga je om met complexere datastructuren (zoals nesting en meervoudige attributen)
   1. in de (Geo)JSON en HTML output?
   1. in de requests ondersteuning nodig (denk aan filtering)?
1. Meer dimensies, 3D:
   1. als outputformaat
   1. wat is nodig aan onderstuning in requests?

1. tijd / 4D: multidimensionaal: hoe kan je WFS3 gebruiken om tijdselementen in te bouwen?
