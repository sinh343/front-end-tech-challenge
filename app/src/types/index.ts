import type React from "react";

export type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export interface INasaImageData {
    nasa_id: string
}

export enum NasaSearchMediaType {
    IMAGE = "image",
    AUDIO = "audio"
}