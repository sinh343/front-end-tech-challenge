import { FormControl, FormGroup, IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { SearchCheckbox } from "components/SearchCheckbox";
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
  const dispatch = useAppDispatch();

  const [searchString, setSearchString] = useState("");
  const [isImagesSelected, setIsImagesSelected] = useState(false);
  const [isAudioSelected, setIsAudioSelected] = useState(false);
  const [isVideoSelected, setIsVideoSelected] = useState(false);

  const onSubmit = async (e: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (e.key !== "Enter") return;

    return fetchPreviewIamges();
  }

  const fetchPreviewIamges = async () => {
    const mediaTypes = serializeMediaTypes(isImagesSelected, isAudioSelected);
    const images = await nasaService.search(mediaTypes, searchString);
    if (!images) {
      // TODO: error handling page/information
    } else {
      dispatch(updateImages(images))
    }
  };

  return (
    <div>
      <h1>NASA Search</h1>
      <FormControl >
        <OutlinedInput
          autoFocus
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          onKeyUp={onSubmit}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Search for assets"
                onClick={fetchPreviewIamges}
                onMouseDown={e => e.preventDefault()}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <FormGroup row>
          <SearchCheckbox label="Images" checked={isImagesSelected} onChange={e => setIsImagesSelected(!isImagesSelected)} />
          <SearchCheckbox label="Audio" checked={isAudioSelected} onChange={e => setIsAudioSelected(!isAudioSelected)} />
          <SearchCheckbox label="Videos" checked={isVideoSelected} onChange={e => setIsVideoSelected(!isVideoSelected)} />
        </FormGroup>
      </FormControl>
    </div>
  );
};