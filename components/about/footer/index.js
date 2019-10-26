import {withLogging} from "gillog"

import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Footer({log, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const hover = useMediaQuery("@media (hover: hover)", {defaultMatches: false})

    // ====== MISC. LOGIC ======>
    const contactLinks = [
        {
            slug: "report-a-bug",
            label: strings.reportABug,
            href: "https://github.com/grupp-4/arcada-resource-allocation-tool/issues/new"
        },
        {
            slug: "suggest-a-feature",
            label: strings.suggestAFeature,
            href: "https://github.com/grupp-4/arcada-resource-allocation-tool/issues/new"
        },
        {
            slug: "get-support",
            label: strings.getSupport,
            href: "/about/support"
        },
        {
            slug: "give-feedback",
            label: strings.giveFeedback,
            href: "/about/feedback"
        },
    ]
    const copyright = "© 2019 Daniel Giljam"
    const licenseLink = {
        title: "arcada-resource-allocation-tool/LICENSE.md",
        href: "https://github.com/grupp-4/arcada-resource-allocation-tool/blob/master/LICENSE.md"
    }

    // ====== RENDER ======>
    return (
        <div className={styles.container}>
            <Grid
                className={styles.footer}
                component={"footer"}
                container
                item
                justify={"space-between"}>
                    <Grid
                        className={styles.list}
                        component={"li"}
                        container
                        direction={"column"}
                        item>
                            {hover ? contactLinks.map(link => (
                                <Grid
                                    key={link.slug}
                                    className={styles.listItem}
                                    component={"ul"}
                                    item>
                                        <Link
                                            className={styles.link}
                                            color={"inherit"}
                                            href={link.href}
                                            title={link.label}
                                            underline={"none"}
                                            variant={"body1"}>
                                                {link.label}
                                        </Link>
                                </Grid>
                            )) : contactLinks.map((link, index) => (
                                <Grid
                                    key={link.slug}
                                    className={styles.listItem}
                                    component={"ul"}
                                    item>
                                        <Button
                                            className={index ? styles.buttonWithMargin : null}
                                            component={"a"}
                                            href={link.href}
                                            title={link.label}
                                            variant={"outlined"}>
                                                {link.label}
                                        </Button>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid
                        className={styles.cplcNotice}
                        component={Typography}
                        item
                        variant={"body1"}>
                            {copyright}
                            <br/>
                            {strings.license1}
                            <Link
                                className={styles.link}
                                color={"inherit"}
                                href={licenseLink.href}
                                title={licenseLink.title}
                                underline={"none"}>
                                    {strings.license2}
                            </Link>
                            {strings.license3}
                    </Grid>
            </Grid>
        </div>
    )
}

export default withLogging(Footer)
