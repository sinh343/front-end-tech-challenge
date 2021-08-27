import React, { useState } from "react";

export const SearchSection = () => {
    const imagesCheckboxId = "imagesCheckbox";
    const audioCheckboxId = "audioCheckbox"

    const [searchString, setSearchString] = useState("");
    const [isImagesSelected, setIsImagesSelected] = useState(false);
    const [isAudioSelected, setIsAudioSelected] = useState(false);

    return (
        <div>
            <h1> NASA Search</h1>
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
        </div>
    );
}