import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import HelloWorld from './component'

ReactDOM.render(
    <AppContainer>
        <HelloWorld name="check" />
    </AppContainer>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <AppContainer>
                <HelloWorld />
            </AppContainer>,
            document.getElementById('app')
        )
    })
}