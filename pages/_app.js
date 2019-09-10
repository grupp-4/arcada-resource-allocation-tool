import __app from "next/app"

import "styles/global.scss"

class _app extends __app {
    render() {
        const {Component, pageProps} = this.props
        return <Component {...pageProps} />
    }
}

export default _app
