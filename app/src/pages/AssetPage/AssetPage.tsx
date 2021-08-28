import React from "react";
import { ImageProps } from "../../types";

interface IAssetPageProps {
  title: string,
  description: string,
  image: ImageProps
}

export const AssetPage = ({ title, description, image }: IAssetPageProps) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div>
        <img {...image} />
      </div>
    </div>
  )
}