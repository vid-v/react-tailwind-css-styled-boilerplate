import React from 'react'
import styled from 'styled-components'

const StyledPanel = styled.main.attrs({
    className: 'flex flex-col h-screen bg-gray-400'
})` `

const Container = styled.main.attrs({
    className: "p-4 bg-gray-200 items-center py-2 px-2"
})` `

const InnerContainer = styled.main.attrs({
    className: "flex mb-4 h-16 p-2"
})` `

const ColContainer = styled.main.attrs({
    className: "w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex"
})``

const Icon1 = styled.img.attrs({
    alt: "",
    className: "fill-current h-12 w-12",
    src: require('./../assets/imges/startup.svg')
})``

const Icon2 = styled.img.attrs({
    alt: "",
    className: "fill-current h-12 w-12",
    src: require('./../assets/imges/credit-card.svg')
})``
const Icon3 = styled.img.attrs({
    alt: "",
    className: "fill-current h-12 w-12",
    src: require('./../assets/imges/24-hours.svg')
})``

const Icon4 = styled.img.attrs({
    alt: "",
    className: "fill-current h-12 w-12",
    src: require('./../assets/imges/umbrella.svg')
})``


export default function Panel() {
    return (
        <StyledPanel>
            <div className="h-12"></div>
            <Container>
                <InnerContainer>
                    <ColContainer>
                        <Icon1></Icon1>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Ocean and Air Shipping</span>
                            <span class="font-sm font-light">Free Shipping All Orders</span>
                        </span>
                    </ColContainer>
                    <ColContainer className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <Icon2></Icon2>

                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Pay Later</span>
                            <span class="font-sm font-light">Finacing Solutions</span>
                        </span>
                    </ColContainer>
                    <ColContainer className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <Icon3></Icon3>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Help Center</span>
                            <span class="font-sm font-light">24x7 Support System</span>
                        </span>
                    </ColContainer>
                    <ColContainer className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <Icon4></Icon4>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Trade Assurance</span>
                            <span class="font-sm font-light">Order Protection</span>
                        </span>
                    </ColContainer>
                </InnerContainer>
            </Container>
        </StyledPanel>
    )
}
