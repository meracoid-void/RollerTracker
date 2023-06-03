interface Park {
    "@id": string;
    "@type": string;
    "name": string;
}

export interface Coaster {
    "@id": string;
    "@type": string;
    "id": number;
    "name": string;
    "park": Park;
    "rank": number | null;
}

interface IriTemplateMapping {
    "@type": string;
    "variable": string;
    "property": string;
    "required": boolean;
}

interface HydraSearch {
    "@type": string;
    "hydra:template": string;
    "hydra:variableRepresentation": string;
    "hydra:mapping": IriTemplateMapping[];
}

interface HydraView {
    "@id": string;
    "@type": string;
    "hydra:first": string;
    "hydra:last": string;
    "hydra:next": string;
}

export interface CoasterSearchModel {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": Coaster[];
    "hydra:totalItems": number;
    "hydra:view": HydraView;
    "hydra:search": HydraSearch;
}