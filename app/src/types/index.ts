import type React from "react";

export type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export interface INasaAssetData {
    nasa_id: string
}

export interface INasaLink {
    href: string,
    rel: NasaRel,
    render: NasaRender,
}

export interface INasaAsset {
    data: INasaAssetData;
    href: string;
    links?: INasaLink[] // not used for now so left any
}

export enum NasaSearchMediaType {
    IMAGE = "image",
    AUDIO = "audio"
}

export enum NasaRel {
    PREVIEW = "preview",
    CAPTIONS = "captions"
}

export enum NasaRender {
    IMAGE = "image"
}

export interface INasaSearchResponse {
    collection: {
        href: string,
        items: INasaAsset[],
        metadata: { total_hits: number }
    }
}