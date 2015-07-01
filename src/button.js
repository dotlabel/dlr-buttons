
import React from 'react'

export default class Button extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string
    }

    static defaultProps = {
        onClick: event => {
            alert( 'DLRButton::onClick @TODO add functionality' )
        },
        text: '@TODO add button text'
    }

    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <button onClick={ this.props.onClick }>{ this.props.text }</button>
        )
    }
}
