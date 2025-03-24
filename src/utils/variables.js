'use strict';
import yaml from 'js-yaml';
import fs from "fs";


const config = yaml.load(fs.readFileSync('./source/config.yml', 'utf8'));

const virtuoso = config.deploy.virtuoso ;

const prefixes = Object.assign( {}, config.skos.prefixes, config.prefixes, { '@base' : config.skos.prefixes.concept })

const context = JSON.parse(fs.readFileSync(config.source.path + config.source.context));

const context_prefixes = Object.assign({},context , prefixes)


const frame_concept_via_collectie = {
    "@context": context,
    "@type": "http://www.w3.org/2004/02/skos/core#Collection",
    "member": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@always",
        "@omitDefault": true,
        "inScheme": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true
        },
        "topConceptOf": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true}
        ,
        "broader": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrower": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "theme": {
            "@embed": "@never",
            "@omitDefault": true
        },
        "references":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "relation":{
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broaderTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broadMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "closeMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "exactMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "mappingRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowerTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "semanticRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
    },

    "isDefinedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },
}


const frame_skos_prefixes = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#ConceptScheme", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.w3.org/2004/02/skos/core#Concept"],
    "member": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@always",
        "@omitDefault": true,"inScheme": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true
        },
        "topConceptOf": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true}
        ,
        "broader": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrower": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "theme": {
            "@embed": "@never",
            "@omitDefault": true
        },
        "references":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "relation":{
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broaderTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broadMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "closeMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "exactMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "mappingRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowerTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "semanticRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },

    "topConceptOf": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "broader": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "narrower": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "hasTopConcept": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "references":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "relation":{
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broaderTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broadMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "closeMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "exactMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "mappingRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowerTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "semanticRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },

}


const frame_skos_no_prefixes = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#ConceptScheme", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.w3.org/2004/02/skos/core#Concept"],
    "member": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },

    "topConceptOf": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "broader": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "narrower": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "hasTopConcept": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "references":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "relation":{
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broaderTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broadMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "closeMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "exactMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "mappingRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowerTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "semanticRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },

}

const ttl = config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.turtle

const nt = config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.nt

const jsonld = [config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.jsonld, frame_skos_prefixes]

const csv = [config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.csv, frame_skos_no_prefixes]


export {
    frame_concept_via_collectie,
    virtuoso,
    ttl,
    nt,
    jsonld,
    csv
};