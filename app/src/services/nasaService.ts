import { INasaAsset, INasaAssetData, INasaSearchResponse, NasaSearchMediaType } from "types";
import { config } from "config";
import axios, { AxiosStatic } from "axios";

export interface INasaService {
    getAsset(id: string): Promise<INasaAssetData | undefined>;
    search(mediaTypes: NasaSearchMediaType[], textSearch: string): Promise<INasaAsset[] | undefined>;
}

export class NasaService implements INasaService {
    constructor(
        private readonly client: AxiosStatic
    ) { }

    async search(mediaTypes: NasaSearchMediaType[], textSearch: string): Promise<INasaAsset[] | undefined> {
        try {
            const mediaTypesString = mediaTypes.length ? `media_type=${mediaTypes.join()}&` : "";
            const qs = `${mediaTypesString}q=${textSearch}`;
            const response = await this.client.get(`${config.nasaEndpoints.search}?${qs}`);
            return (response.data as INasaSearchResponse).collection.items;
        } catch (error) {
            console.error(error);
        }
    }

    async getAsset(id: string): Promise<INasaAssetData | undefined> {
        const url = `${config.nasaEndpoints.asset}/${id}`;
        try {
            return await this.client.get(url);
        } catch (error) {
            console.error(error);
        }
    }
}

export const nasaService = new NasaService(axios);