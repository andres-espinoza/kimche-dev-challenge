import React from "react";
import { Header } from "../../styledComponents/Containers";
import { MainTitle} from "../../styledComponents/Titles";
import { Paragraph } from "../../styledComponents/Text";

const HeaderSite = () => {

    return (
        <Header>
            <MainTitle>
                Country Search
            </MainTitle>
            <Paragraph main={true}>
                Welcome, in this application you can search for countries and group them by continent or by their spoken languages.
            </Paragraph>
        </Header>
    )

}

export default HeaderSite;