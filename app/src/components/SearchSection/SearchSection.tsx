import React, { useState } from "react";
import { nasaService } from "services/nasaService";
import { useAppDispatch } from "store/hooks";
import { updateImages } from "store/slices/nasa";
import { NasaSearchMediaType } from "types";

const serializeMediaTypes = (isImagesSelected: boolean, isAudioSelected: boolean): NasaSearchMediaType[] => {
    const mediaTypes = [];
    if (isImagesSelected) mediaTypes.push(NasaSearchMediaType.IMAGE);
    if (isAudioSelected) mediaTypes.push(NasaSearchMediaType.AUDIO);
    return mediaTypes;
}

export const SearchSection = () => {
    const imagesCheckboxId = "imagesCheckbox";
    const audioCheckboxId = "audioCheckbox";
    const dispatch = useAppDispatch();

    const [searchString, setSearchString] = useState("");
    const [isImagesSelected, setIsImagesSelected] = useState(false);
    const [isAudioSelected, setIsAudioSelected] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mediaTypes = serializeMediaTypes(isImagesSelected, isAudioSelected);
        const images = await nasaService.search(mediaTypes, searchString);
        if (!images) {
            //TODO: error handling page/information
        } else {
            dispatch(updateImages(images))
        }
    };

    return (
        <div>
            <h1>NASA Search</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}>
                </input>
                <div>
                    <input
                        id={imagesCheckboxId}
                        type="radio"
                        checked={isImagesSelected}
                        onClick={e => setIsImagesSelected(!isImagesSelected)}
                    />
                    <label htmlFor={imagesCheckboxId}>Images</label>

                    <input
                        id={audioCheckboxId}
                        type="radio"
                        checked={isAudioSelected}
                        onClick={e => setIsAudioSelected(!isAudioSelected)}
                    />
                    <label htmlFor={audioCheckboxId}>Audio</label>
                </div>
            </form>
        </div>
    );
};