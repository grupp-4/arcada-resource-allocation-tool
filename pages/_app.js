import __app from "next/app"

import PersistentLayout from "../components/persistent-layout"

// import "styles/global.scss"

class _app extends __app {
    render() {
        const {Component, pageProps} = this.props
        return (
            <PersistentLayout>
                <Component {...pageProps}/>
            </PersistentLayout>
        )
    }
}

export default _app
