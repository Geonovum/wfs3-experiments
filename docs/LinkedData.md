# LinkedData in OGC API Features

It has not yet been addressed in the Core of WFS3. See [WFS_FES issue 167](https://github.com/opengeospatial/WFS_FES/issues/167).

## Existing implementations
By @jorgejesus: research project on methods for linked data and JSON schema and JOSN-LD in WFS3, to provide soil profilesfor ISRIC. Based on Pygeoapi. Instance: https://glosis.isric.org, sources https://github.com/jorgejesus/GLOSIS.

Sample request to get JSON-LD data from the WFS3 API:
```
https://glosis.isric.org/collections/soil_profiles/items/04ec2032-421e-472f-9b19-797754c563cc?f=json
```

## Definitions to link to
Semantics of BGT data has been published at https://definities.geostandaarden.nl/id/begrippenkader/imgeo

For example:

- Class Wegdeel: https://definities.geostandaarden.nl/imgeo/id/begrip/Wegdeel
- Attribute LV-publicatiedatum: https://definities.geostandaarden.nl/imgeo/id/begrip/Lv-publicatiedatum
- Attribute bronhouder: https://definities.geostandaarden.nl/imgeo/id/begrip/Bronhouder
- etc. for other attributes (some are missing...)
- Some attributes have a "codespace", e.g. 
    - Codespace FunctieWeg = 'fietspad': https://definities.geostandaarden.nl/imgeo/id/begrip/Fietspad 

Semantics of other data: 
- BRT: https://brt.basisregistraties.overheid.nl/datamodel
- BRK: https://brk.basisregistraties.overheid.nl/datamodel
- NEN3610 basismodel geografie: https://definities.geostandaarden.nl/def/nen3610 