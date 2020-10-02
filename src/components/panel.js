import React from 'react'
import styled from 'styled-components'

const StyledPanel = styled.main.attrs({
    className: 'flex flex-col h-screen bg-gray-400'
})` `

export default function Panel() {
    return (
        <StyledPanel>
            <div className="h-12"></div>
            <div className="p-4 bg-gray-200 items-center py-2 px-2">
                <div className="flex mb-4 h-16 p-2">
                    <div className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <img alt="" class="fill-current h-12 w-12" src={require('./../assets/imges/startup.svg')}></img>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Ocean and Air Shipping</span>
                            <span class="font-sm font-light">Free Shipping All Orders</span>
                        </span>
                    </div>
                    <div className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <img alt="" class="fill-current h-12 w-12" src={require('./../assets/imges/credit-card.svg')}></img>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Pay Later</span>
                            <span class="font-sm font-light">Finacing Solutions</span>
                        </span>
                    </div>
                    <div className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <img alt="" class="fill-current h-12 w-12" src={require('./../assets/imges/24-hours.svg')}></img>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Help Center</span>
                            <span class="font-sm font-light">24x7 Support System</span>
                        </span>
                    </div>
                    <div className="w-1/4 bg-white h-16 items-center py-2 px-4 inline-flex">
                        <img alt="" class="fill-current h-12 w-12" src={require('./../assets/imges/umbrella.svg')}></img>
                        <span className="flex flex-col ml-2">
                            <span class="font-bold">Trade Assurance</span>
                            <span class="font-sm font-light">Order Protection</span>
                        </span>
                    </div>
                </div>
            </div>
        </StyledPanel>
    )
}
