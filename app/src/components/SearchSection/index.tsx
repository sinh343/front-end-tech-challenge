import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { SearchCheckbox } from "components/SearchCheckbox";
import React, { useState } from "react";
import { nasaService } from "services/nasaService";
import { useAppDispatch } from "store/hooks";
import { updateImages } from "store/slices/nasa";
import { NasaSearchMediaType } from "types";
import { useStyles } from './styles';

const serializeMediaTypes = (isImagesSelected: boolean, isAudioSelected: boolean): NasaSearchMediaType[] => {
  const mediaTypes = [];
  if (isImagesSelected) mediaTypes.push(NasaSearchMediaType.IMAGE);
  if (isAudioSelected) mediaTypes.push(NasaSearchMediaType.AUDIO);
  return mediaTypes;
}

export const SearchSection = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
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
    <Grid container>
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h3" component="h1" className={classes.title}>NASA Search</Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <OutlinedInput
            fullWidth
            autoFocus
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
            onKeyUp={onSubmit}
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Search for assets"
                  onClick={fetchPreviewIamges}
                  onMouseDown={e => e.preventDefault()}
                >
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item >
          <FormGroup row className={classes.checkBoxGroup}>
            <SearchCheckbox label="Images" checked={isImagesSelected} onChange={e => setIsImagesSelected(!isImagesSelected)} />
            <SearchCheckbox label="Audio" checked={isAudioSelected} onChange={e => setIsAudioSelected(!isAudioSelected)} />
            <SearchCheckbox label="Videos" checked={isVideoSelected} onChange={e => setIsVideoSelected(!isVideoSelected)} />
          </FormGroup>
        </Grid>



      </Grid>
    </Grid>
  );
};