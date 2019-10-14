import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

import useStyles from "./styles"
import {Fragment} from "react"

function Creators({log, mobile, strings}) {

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

    // ====== FUNCTIONS ======>
    function creatorsMobile(creators) {
        return creators.reduce((line, creator, index) => {
            log.debug("Creator:", creator.name)
            if (index) line += "<br>"
            line += (
                <Link href={creator.href}>
                    <a title={strings.creatorAnchorTitle(creator.name)}>
                        {creator.name}
                    </a>
                </Link>
            )
            return line
        }, "")
    }
    function creatorsDesktop(creators) {
        return
    }

    // ====== RENDER ======>
    return (
        <Grid
            container
            direction={"column"}
            item
            justify={"center"}>
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
                        {mobile ? creators.map((creator, index) => (
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
