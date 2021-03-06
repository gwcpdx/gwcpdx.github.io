import React from "react";
import styled from "styled-components";
import { teamData } from "../../data/teamData";
import Member from "../cards/Member";
import { H2 } from "../styles/TextStyles";
import CardSlider from "../sliders/Slider";

export default function TeamMembers() {

    return (
        <Wrapper>
            <Header>Meet our team</Header>
            <Content>
                {teamData.map((item, index) =>

                    <Member
                        item={item}
                        key={index}
                    />
                )}
            </Content>

            <SliderWrapper>
                <CardSlider data={teamData} />
            </SliderWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 80px 40px 40px;
    
    @media (max-width: 900px) {
        padding: 60px 20px 30px;
    }

    @media (max-width: 420px) {
        padding: 40px 20px 20px;
    }

`

const Content = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 3fr)); */
    gap: 30px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 500px) {
        /* grid-template-columns: repeat(1, auto);
        justify-content: center; */
        display:none;
    }
`

const Header = styled(H2)`
    margin-bottom: 40px;
`

const SliderWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    display:none;

    @media(max-width: 500px) {
        display:inherit;
    }
`