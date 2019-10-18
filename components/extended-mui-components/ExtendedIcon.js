/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Mui-Treasury
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Current VERSION 1.1
 *
 * vX.Y meaning
 * X = major changes ex. add/remove/rename some props/className,
 *     could affect other components
 * Y = minor changes ex. fix bug or internal logic, won't effect other component
 */

import cx from "clsx"

import React from "react"
import PropTypes from "prop-types"

import MuiIcon from "@material-ui/core/Icon"

import makeStyles from "@material-ui/styles/makeStyles"

const injectColor = color => {
    if (
        color === "inherit" ||
        color === "primary" ||
        color === "secondary" ||
        color === "action" ||
        color === "error" ||
        color === " disabled"
    ) {
        return color
    }
    return undefined
}

const useStyles = makeStyles(({palette, transitions, spacing}) => {
    const invertedColor = palette.common.white
    return {
        root: {
            // STANDALONE
            verticalAlign: "sub",
            "&.-push-left": {
                marginLeft: spacing.unit
            },
            "&.-push-right": {
                marginRight: spacing.unit
            },
            "&.-link": {
                cursor: "pointer",
                "&:not([class*=\"-color\"])": {
                    color: palette.text.primary
                },
                transition: transitions.create(),
                "&:hover": {
                    transform: "scale(1.2)"
                }
            },
            // colors
            "&.-color-success": {
                color: "#28a745"
            },
            "&.-color-danger": {
                color: palette.error.main
            },
            "&.-inverted": {
                color: invertedColor
            },
            // icon
            "& .MuiIcon--fa": {
                verticalAlign: "unset",
                padding: 2,
                "&.svg-inline--fa": {
                    width: "1em"
                }
            },
            "& i.MuiIcon--fa": {
                display: "block",
                "&:before": {
                    display: "block",
                    fontSize: 20
                }
            },
            // -------------------------------
            // sizes
            "&.-size-small": {
                fontSize: 20,
                "& i.MuiIcon--fa:before": {
                    fontSize: 16
                }
            },
            "&.-size-big": {
                fontSize: 28,
                "& i.MuiIcon--fa:before": {
                    fontSize: 24
                }
            },
            "&.-size-large": {
                fontSize: 32,
                "& i.MuiIcon--fa:before": {
                    fontSize: 28
                }
            },
            // background
            "&[class*=\"-bg\"]": {
                width: "1.5em",
                height: "1.5em",
                padding: "0.25em"
            },
            "&.-bg-default": {
                backgroundColor: palette.grey[200]
            },
            "&.-bg-primary": {
                backgroundColor: palette.primary.main,
                color: invertedColor
            },
            "&.-bg-secondary": {
                backgroundColor: palette.secondary.main,
                color: invertedColor
            },
            "&.-bg-danger": {
                backgroundColor: palette.error.main,
                color: invertedColor
            },
            "&.-bg-white": {
                backgroundColor: invertedColor
            },
            "&.-bg-lightPrimary": {
                backgroundColor: palette.primary.light
            },
            "&.-bg-lightSecondary": {
                backgroundColor: palette.secondary.light
            },
            // shapes
            "&.-shape-square": {
                borderRadius: 0
            },
            "&.-shape-circular": {
                borderRadius: "50%"
            },
            "&.-shape-round": {
                borderRadius: 4
            },

            // COMBINATION
            "&.-bg-default.-link.-inverted": {
                color: palette.text.primary
            },
            "&.-link.-inverted:not([class*=\"-color\"])": {
                color: invertedColor
            }
        }
    }
})

const Icon = ({
                  bgColor,
                  className,
                  children,
                  color,
                  fontAwesomeProps,
                  icon,
                  inverted,
                  link,
                  push,
                  size,
                  shape,
                  ...props
              }) => {
    const mainIcon = children || icon
    const classes = useStyles()
    return (
        <MuiIcon
            component={link ? "a" : "span"}
            {...props}
            className={cx(
                "MuiIcon-root",
                className,
                classes.root,
                bgColor && `-bg-${bgColor}`,
                color && `-color-${color}`,
                inverted && "-inverted",
                link && "-link",
                push && `-push-${push}`,
                shape && `-shape-${shape}`,
                size && `-size-${size}`
            )}
            color={injectColor(color)}
        >
            {mainIcon.includes("fa-") ? (
                <i className={cx("MuiIcon--fa", mainIcon)} {...fontAwesomeProps} />
            ) : (
                mainIcon
            )}
        </MuiIcon>
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fontAwesomeProps: PropTypes.shape({}),
    icon: PropTypes.string,
    inverted: PropTypes.bool,
    link: PropTypes.bool,
    size: PropTypes.oneOf(["small", "", "big", "large"]),
    color: PropTypes.oneOf([
        "",
        "inherit",
        "primary",
        "secondary",
        "action",
        "error",
        "disabled",
        // custom
        "danger",
        "success"
    ]),
    bgColor: PropTypes.oneOf([
        "",
        "default",
        "primary",
        "secondary",
        // custom
        "danger",
        "white"
    ]),
    shape: PropTypes.oneOf(["", "square", "circular", "round"]),
    push: PropTypes.oneOf(["", "left", "right"])
}
Icon.defaultProps = {
    bgColor: "",
    className: "",
    children: null,
    color: "",
    fontAwesomeProps: {},
    icon: "",
    inverted: false,
    link: false,
    push: "",
    size: "",
    shape: ""
}
Icon.getTheme = () => {
}

export default Icon
