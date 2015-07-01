
import React from 'react'
import { Button } from '../lib'

class Example extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div>
                <h1>Button Example</h1>
                <Button />
            </div>
        )
    }
}

React.render( <Example />, document.body )
