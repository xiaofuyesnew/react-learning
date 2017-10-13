const React = require('react')

class ComponetTest extends React.Component {
    render() {
        return (
            <div className="main">
                <div data-test="testxxx">Hello World!</div>
            </div>
        )
    }
}

export default ComponetTest