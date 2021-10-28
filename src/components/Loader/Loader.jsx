import Loader from "react-loader-spinner";

import { LoaderContainer } from "./Loader.styled";

export const LoaderSpinner = () => {
    return (
        <LoaderContainer>
            <Loader
                type="ThreeDots"
                color="rgb(73, 167, 230)"
                height={40}
                width={120}
                timeout={3000}
            />
        </LoaderContainer>
    )
}