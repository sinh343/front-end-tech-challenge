import { INasaImageData, NasaSearchMediaType } from "types";
import { config } from "config";
import axios, { AxiosStatic } from "axios";

export interface INasaService {
    getAsset(id: string): Promise<INasaImageData | undefined>;
    search(mediaTypes: NasaSearchMediaType[], textSearch: string): Promise<INasaImageData[] | undefined>;
}

export class NasaService implements INasaService {
    constructor(
        private readonly client: AxiosStatic
    ) { }

    async search(mediaTypes: NasaSearchMediaType[], textSearch: string): Promise<INasaImageData[] | undefined> {
        try {
            return await this.client.get(config.nasa.search, {
                params: {
                    "media_type": mediaTypes,
                    "q": textSearch
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    async getAsset(id: string): Promise<INasaImageData | undefined> {
        const url = `${config.nasa.asset}/${id}`;
        try {
            return await this.client.get(url);
        } catch (error) {
            console.error(error);
        }
    }
}

export const nasaService = new NasaService(axios)