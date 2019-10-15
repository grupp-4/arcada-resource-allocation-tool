import {withLogging} from "gillog"

import {Fragment} from "react"

import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

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

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const wrap = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm * 0.8), {defaultMatches: true})

    // ====== RENDER ======>
    return (
        <Grid
            className={styles.container}
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
        </Grid>
    )
}

export default withLogging(Creators)
