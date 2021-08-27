import React from "react";
import { AssetTile, IAssetTileProps } from "../../components/AssetTile/AssetTile";
import { SearchSection } from "../../components/SearchSection/SearchSection";

export const Home = () => {

    const displayImages: IAssetTileProps[] = [
        {
            nasaImageData: { nasa_id: "as11-40-5874" },
            image: { src: "https://via.placeholder.com/150" }
        },

    ];

    return (
        <div>
            <SearchSection />
            <div>
                {displayImages.map((props, i) => <AssetTile key={i} {...props} />)}
            </div>
        </div>
    )
}