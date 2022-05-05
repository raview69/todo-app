/* eslint-disable react/prop-types */
import React from 'react'
import useWindowDimensions from '../hook/windowDimension'

const Background = ({ children }) => {
    const { height, width } = useWindowDimensions()

    return (
        <div
            className="bg-white dark:bg-black transition-all"
            style={{
                width: width,
                height: height,
            }}
        >
            {children}
        </div>
    )
}

export default Background
