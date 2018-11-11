import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';

import App from './containers/App';
import './styles/index.less';

const render = (Component) => {
    const rootElement = document.getElementById('root');
    ReactDom.render(
        <AppContainer>
            <UWPThemeProvider
                style={{ background: 'none' }}
                theme={getTheme({
                    themeName: 'dark', // set custom theme
                    accent: '#0078D7', // set accent color
                    useFluentDesign: true, // sure you want use new fluent design.
                    desktopBackgroundImage: '/images/jennifer-bailey-10753.jpg', // set global desktop background image
                })}
            >
                <Component />
            </UWPThemeProvider>
        </AppContainer>,
        rootElement,
    );
};

render(App);
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}
