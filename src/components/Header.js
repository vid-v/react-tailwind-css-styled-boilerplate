import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.main.attrs({
    className: 'flex flex-col w-screen'
})` `

const Container = styled.main.attrs({
    className: "p-4 bg-gray-200 items-center py-2 px-2"
})` `

// const InnerContainer = styled.main.attrs({
//     className: "flex mb-4 h-16 p-2"
// })` `

// const ColContainer = styled.main.attrs({
//     className: "w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex"
// })``

// const Icon1 = styled.img.attrs({
//     alt: "",
//     className: "fill-current h-12 w-12",
//     src: require('./../assets/imges/startup.svg')
// })``

// const Icon2 = styled.img.attrs({
//     alt: "",
//     className: "fill-current h-12 w-12",
//     src: require('./../assets/imges/credit-card.svg')
// })``
// const Icon3 = styled.img.attrs({
//     alt: "",
//     className: "fill-current h-12 w-12",
//     src: require('./../assets/imges/24-hours.svg')
// })``

// const Icon4 = styled.img.attrs({
//     alt: "",
//     className: "fill-current h-12 w-12",
//     src: require('./../assets/imges/umbrella.svg')
// })``


export default function Header() {
    return (
        <StyledHeader>
            <Container>
                
            </Container>
        </StyledHeader>
    )
}
