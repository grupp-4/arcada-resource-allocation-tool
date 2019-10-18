import {withLogging} from "gillog"

import SvgIcon from "@material-ui/core/SvgIcon"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Powerers({log, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== MISC. LOGIC ======>
    const powerers = [
        {
            slug: "nextjs",
            linkTitle: "nextjs.org",
            href: "https://nextjs.org",
            logo: (
                <SvgIcon
                    className={`${styles.powererLogo} ${styles.nextJsLogo}`}
                    viewBox={"0 0 207 124"}>
                        <path
                            d={"M183.397,86.523c0.738,0 1.276,-0.563 1.276,-1.29c0,-0.727 -0.538,-1.29 -1.276,-1.29c-0.73,0 -1.277,0.563 -1.277,1.29c0,0.727 0.547,1.29 1.277,1.29Zm3.509,-3.393c0,2.146 1.555,3.549 3.822,3.549c2.414,0 3.874,-1.446 3.874,-3.956l0,-8.837l-1.946,0l0,8.828c0,1.394 -0.704,2.138 -1.946,2.138c-1.112,0 -1.867,-0.692 -1.893,-1.722l-1.911,0Zm10.241,-0.113c0.139,2.233 2.006,3.662 4.786,3.662c2.97,0 4.829,-1.498 4.829,-3.887c0,-1.878 -1.06,-2.917 -3.631,-3.514l-1.381,-0.338c-1.633,-0.38 -2.293,-0.891 -2.293,-1.783c0,-1.125 1.025,-1.861 2.563,-1.861c1.459,0 2.466,0.719 2.649,1.87l1.893,0c-0.113,-2.103 -1.971,-3.583 -4.516,-3.583c-2.737,0 -4.561,1.48 -4.561,3.704c0,1.835 1.034,2.926 3.301,3.454l1.616,0.389c1.659,0.39 2.388,0.961 2.388,1.913c0,1.108 -1.146,1.913 -2.71,1.913c-1.676,0 -2.84,-0.753 -3.005,-1.939l-1.928,0Z"}
                            style={{fillRule: "nonzero"}}/>
                        <path
                            d={"M48.942,32.632l38.959,0l0,3.082l-35.388,0l0,23.193l33.278,0l0,3.082l-33.278,0l0,25.464l35.794,0l0,3.081l-39.365,0l0,-57.902Zm42.449,0l4.14,0l18.343,25.464l18.749,-25.464l25.501,-32.345l-41.896,60.485l21.589,29.762l-4.301,0l-19.642,-27.086l-19.723,27.086l-4.221,0l21.752,-29.762l-20.291,-28.14Zm47.968,3.082l0,-3.082l44.397,0l0,3.082l-20.453,0l0,54.82l-3.571,0l0,-54.82l-20.373,0Z"}
                            style={{fillRule: "nonzero"}}/>
                        <path
                            d={"M0.203,32.632l4.464,0l61.557,91.671l-25.439,-33.769l-36.849,-53.523l-0.162,53.523l-3.571,0l0,-57.902Z"}
                            style={{fillRule: "nonzero"}}/>
                </SvgIcon>
            )
        },
        {
            slug: "material-ui",
            linkTitle: "material-ui.com",
            href: "https://material-ui.com",
            logo: (
                <SvgIcon
                    className={`${styles.powererLogo} ${styles.muiLogo}`}
                    viewBox={"0 0 600 477"}>
                        <path
                            d={"M0,259.8l0,-259.8l225,129.9l0,86.6l-150,-86.6l0,173.2l-75,-43.3Z"}
                            style={{fill:"#00b0ff", fillRule: "nonzero"}}/>
                        <path
                            d={"M225,129.9l225,-129.9l0,259.8l-150,86.6l-75,-43.3l150,-86.6l0,-86.6l-150,86.6l0,-86.6Z"}
                            style={{fill: "#0081cb", fillRule: "nonzero"}}/>
                        <path
                            d={"M225,303.1l0,86.6l150,86.6l0,-86.6l-150,-86.6Z"}
                            style={{fill: "#00b0ff", fillRule: "nonzero"}}/>
                        <path
                            d={"M375,476.3l225,-129.9l0,-173.2l-75,43.3l0,86.6l-150,86.6l0,86.6Zm150,-346.4l0,-86.6l75,-43.3l0,86.6l-75,43.3Z"}
                            style={{fill: "#0081cb", fillRule: "nonzero"}}/>
                </SvgIcon>
            )
        }
    ]

    // ====== RENDER ======>
    return (
        <Grid
            container
            direction={"column"}
            item>
                <Grid
                    component={Typography}
                    align={"center"}
                    item
                    variant={"overline"}
                    variantMapping={{overline: "h3"}}>
                        {strings.poweredBy}
                </Grid>
                <Grid
                    container
                    direction={"row"}
                    item
                    justify={"center"}>
                        {powerers.map(powerer => (
                            <Grid
                                key={powerer.slug}
                                className={styles.powererLink}
                                component={"a"}
                                href={powerer.href}
                                item
                                title={powerer.linkTitle}>
                                    {powerer.logo}
                            </Grid>
                        ))}
                </Grid>
        </Grid>
    )
}

export default withLogging(Powerers)
