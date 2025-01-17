import fs from "fs";
import request from "request";
import jsonld from "jsonld";


const frame_concept_prefixes = {
    "@context": {
        "id": "@id",
        "type": {
            "@id": "@type",
            "@type": "@id"
        },
        "page": {
            "@id": "http://xmlns.com/foaf/0.1/page",
            "@type": "@id"
        },
        "theme": {
            "@id": "http://www.w3.org/ns/dcat#theme",
            "@type": "@id"
        },
        "inScheme": {
            "@id": "http://www.w3.org/2004/02/skos/core#inScheme",
            "@type": "@id"
        },
        "prefLabel": {
            "@id": "http://www.w3.org/2004/02/skos/core#prefLabel",
            "@language": "nl"
        },
        "notation": {
            "@id": "http://www.w3.org/2004/02/skos/core#notation"
        },
        "note": {
            "@id": "http://www.w3.org/2004/02/skos/core#note",
            "@language": "nl"
        },
        "definition": {
            "@id": "http://www.w3.org/2004/02/skos/core#definition",
            "@language": "nl"
        },
        "member": {
            "@id": "http://www.w3.org/2004/02/skos/core#member",
            "@type": "@id"
        },
        "isDefinedBy": {
            "@id": "rdfs:isDefinedBy",
            "@type": "@id"
        },
        "collectie": "https://data.omgeving.vlaanderen.be/id/collection/gebouw/",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "thema": "http://www.eionet.europa.eu/gemet/theme/",
        "@base": "https://data.omgeving.vlaanderen.be/id/concept/gebouw/"
    },
    "@type": "skos:Collection",
    "member": {
        "@embed": "@always"
    },
    "isDefinedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "page":{
        "@embed": "@never",
        "@omitDefault": true
    },

}

async function frame(my_json) {
    const framed_json = await jsonld.frame(my_json, frame_concept_prefixes);
    fs.writeFileSync('example/niet-geframed.jsonld', JSON.stringify(my_json, null, 4));
    fs.writeFileSync('example/geframed.jsonld', JSON.stringify(framed_json, null, 4));
}
async function get_uris() {
    console.log('');
    let url = 'https://data.omgeving.vlaanderen.be/doc/collection/gebouw/verwaarlozing.jsonld'
    let options = {json: true};
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
        if (!error && res.statusCode == 200) {

            frame(body);

        };
    });
}
get_uris();

