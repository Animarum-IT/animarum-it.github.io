"use client;"
import React from "react";

const AnimatedButton = ({ text }: { text: string }) => {
    return (
        <>
            <span className="btn-animate-y">
                <span className="btn-animate-y-1">
                    {text} <i className="mi-arrow-right" aria-hidden="true"></i>
                </span>
                <span className="btn-animate-y-2" aria-hidden="true">
                    {text} <i className="mi-arrow-right" aria-hidden="true"></i>
                </span>
            </span> 
        </>
    );
}

export default AnimatedButton;