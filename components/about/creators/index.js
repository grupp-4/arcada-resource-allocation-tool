import {withLogging} from "gillog"

import {Fragment} from "react"

import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import SvgIcon from "@material-ui/core/SvgIcon"

import ExtendedButton from "components/extended-mui-components/ExtendedButton"

import useStyles from "./styles"

function Creators({log, strings}) {

    // ====== INITIAL LOGIC ======>
    const creators = [
        {
            slug: "daniel-giljam",
            name: "Daniel Giljam",
            href: "https://github.com/DanielGiljam"
        },
        {
            slug: "johan-penttinen",
            name: "Johan Penttinen",
            href: "https://github.com/kaibiPrime"
        },
        {
            slug: "kristoffer-kuvaja",
            name: "Kristoffer Kuvaja",
            href: "https://github.com/kuvajaan"
        },
        {
            slug: "christian-haggblom",
            name: "Christian Häggblom",
            href: "https://github.com/christian-haggblom"
        },
        {
            slug: "sebastian-lundgren",
            name: "Sebastian Lundgren",
            href: "https://github.com/Skeba"
        },
        {
            slug: "thomas-sandelin",
            name: "Thomas Sandelin",
            href: "https://github.com/sandelit"
        },
    ]
    const githubIcon = (
        <SvgIcon>
            <path
                d={"M11.25,0c-6.225,0 -11.25,5.025 -11.25,11.25c0,4.95 3.225,9.15 7.725,10.65c0.6,0.075 0.75,-0.225 0.75,-0.525l0,-1.95c-3.15,0.675 -3.825,-1.5 -3.825,-1.5c-0.525,-1.275 -1.275,-1.65 -1.275,-1.65c-1.05,-0.675 0.075,-0.675 0.075,-0.675c1.125,0.075 1.725,1.125 1.725,1.125c0.975,1.725 2.625,1.2 3.3,0.9c0.075,-0.75 0.375,-1.2 0.75,-1.5c-2.475,-0.3 -5.1,-1.275 -5.1,-5.55c0,-1.2 0.45,-2.25 1.125,-3c-0.15,-0.3 -0.525,-1.425 0.075,-3c0,0 0.975,-0.3 3.075,1.125c0.9,-0.225 1.875,-0.375 2.85,-0.375c0.975,0 1.95,0.15 2.85,0.375c2.175,-1.425 3.075,-1.125 3.075,-1.125c0.6,1.575 0.225,2.7 0.075,3c0.75,0.75 1.125,1.8 1.125,3c0,4.35 -2.625,5.25 -5.1,5.55c0.375,0.375 0.75,1.05 0.75,2.1l0,3.075c0,0.3 0.225,0.675 0.75,0.525c4.5,-1.5 7.65,-5.7 7.65,-10.65c0.075,-6.15 -4.95,-11.175 -11.175,-11.175Z"}/>
        </SvgIcon>
    )

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const wrap = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm * 0.8), {defaultMatches: true})
    const hover = useMediaQuery("@media (hover: hover)", {defaultMatches: false})

    // ====== RENDER ======>
    return (
        <Grid
            className={styles.container}
            alignItems={"center"}
            container
            direction={"column"}
            item>
                <Grid
                    component={Typography}
                    align={"center"}
                    item
                    variant={"overline"}
                    variantMapping={{overline: "h3"}}>
                        {strings.createdBy}
                </Grid>
                <Grid
                    className={styles.namesContainer}
                    component={Typography}
                    align={"center"}
                    item
                    variant={"body1"}>
                        {wrap ? creators.map((creator, index) => (
                            <Fragment key={creator.slug}>
                                {index ? <br/> : ""}
                                <Link
                                    className={styles.creatorLink}
                                    color={"inherit"}
                                    href={creator.href}
                                    title={strings.creatorLinkTitle(creator.name)}
                                    underline={"none"}>
                                        {creator.name}
                                </Link>
                            </Fragment>
                        )) : creators.map((creator, index) => (
                            <Fragment key={creator.slug}>
                                {index ? index === 3 ? <br/> : " • " : ""}
                                <Link
                                    className={styles.creatorLink}
                                    color={"inherit"}
                                    href={creator.href}
                                    title={strings.creatorLinkTitle(creator.name)}
                                    underline={"none"}>
                                        {creator.name}
                                </Link>
                            </Fragment>
                        ))}
                </Grid>
            <Grid
                className={styles.githubLinkContainer}
                item>
                    <ExtendedButton
                        className={!hover ? styles.githubLinkNoHover : ""}
                        icon={githubIcon}
                        shape={"chubby"}>
                            {strings.goToGitHub}
                    </ExtendedButton>
            </Grid>
        </Grid>
    )
}

export default withLogging(Creators)
