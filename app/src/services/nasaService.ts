import axios, { AxiosStatic } from "axios";
import { config } from "config";
import { INasaAsset, INasaAssetData, INasaSearchResponse, NasaSearchMediaType } from "types";

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

  async getAssetMediaType(id: string): Promise<NasaSearchMediaType | undefined> {
    try {
      const qs = `nasa_id=${id}`;
      const response = await this.client.get(`${config.nasaEndpoints.search}?${qs}`);
      return (response.data as any).collection.items[0].data[0].media_type;
    } catch (error) {
      console.error(error);
    }
  }

  async getAsset(id: string): Promise<INasaAssetData | undefined> {
    const url = `${config.nasaEndpoints.asset}/${id}`;
    try {
      const response = await this.client.get(url);
      return response.data.collection;
    } catch (error) {
      console.error(error);
    }
  }

  async getAssetMetadata(id: string, type = NasaSearchMediaType.IMAGE): Promise<INasaAssetData | undefined> {
    console.log(type.valueOf());
    const url = `${config.nasaEndpoints.base}/${type}/${id}/metadata.json`;
    console.log(url);
    try {
      const response = await this.client.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const nasaService = new NasaService(axios);