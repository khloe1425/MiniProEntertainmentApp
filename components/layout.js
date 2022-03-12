import React from 'react'
import Category from './category'
import Menubar from './menubar'

export default function Layout(children) {
    return (
        <div className="container" >
            <div className="app">
                <Menubar />
                {children}
                <Category />
            </div>
        </div>
    )
}
