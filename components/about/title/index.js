import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import SvgIcon from "@material-ui/core/SvgIcon"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Title({log, strings}) {

    // ====== INITIAL LOGIC ======>
    const styles = useStyles()

    // ====== RENDER ======>
    return (
        <Grid
            className={styles.titleContainer}
            container
            item
            justify={"center"}
            wrap={"nowrap"}>
                <Grid
                    className={styles.arcadaLogoContainer}
                    component={"a"}
                    href={"https://www.arcada.fi"}
                    title={"arcada.fi"}
                    item>
                        <SvgIcon
                            className={styles.arcadaLogo}
                            viewBox={"0 0 624 152"}>
                                <path
                                    id={"icon"}
                                    d={"M171.001,0.56l-0.911,1.652l-1.167,2.163l-0.712,1.253l-0.768,1.337l-1.822,2.933l-1.025,1.593l-1.138,1.68l-1.224,1.737l-1.338,1.764l-1.453,1.792l-1.564,1.852l-1.68,1.879l-1.794,1.88l-1.936,1.905l-2.05,1.909l-2.248,1.905l-2.334,1.881l-2.478,1.88l-2.674,1.793l-2.791,1.792l-2.959,1.764l-3.132,1.68l-3.303,1.625l-3.474,1.563l-3.672,1.482l-3.814,1.394l-4.043,1.251l-4.213,1.197l-4.412,1.081l0.911,0.43l0.91,0.396l0.969,0.4l1.053,0.369l1.024,0.342l1.026,0.313l1.082,0.285l1.081,0.255l1.111,0.23l1.11,0.196l1.167,0.173l1.167,0.112l1.138,0.116l1.168,0.055l1.167,0.029l1.196,0l1.196,-0.055l1.195,-0.086l1.224,-0.115l1.195,-0.171l1.196,-0.199l1.195,-0.255l1.168,-0.285l1.195,-0.342l1.14,-0.399l1.194,-0.428l1.168,-0.482l1.139,-0.543l1.11,-0.597l1.11,-0.626l1.111,-0.682l1.052,-0.74l-0.369,0.597l-0.427,0.683l-0.485,0.739l-0.539,0.827l-0.626,0.854l-0.656,0.91l-0.741,0.939l-0.796,1.025l-0.854,1.027l-0.912,1.052l-0.968,1.083l-1.024,1.082l-1.082,1.109l-1.167,1.111l-1.195,1.08l-1.254,1.139l-1.338,1.081l-1.365,1.082l-1.452,1.081l-1.509,1.028l-1.537,1.023l-1.566,0.968l-1.679,0.94l-1.737,0.909l-1.764,0.827l-1.823,0.799l-1.878,0.711l-1.936,0.655l-1.994,0.569l-2.02,0.485l-2.078,0.426l-2.164,0.313l0.37,0.227l1.082,0.571l0.796,0.339l0.94,0.371l0.541,0.172l0.57,0.2l0.625,0.17l0.655,0.141l0.655,0.143l0.712,0.142l0.74,0.113l0.825,0.085l0.826,0.089l0.855,0.054l1.821,0l0.94,-0.054l0.968,-0.144l1.023,-0.112l1.026,-0.201l1.11,-0.229l1.082,-0.257l1.11,-0.341l1.139,-0.368l-0.797,1.052l-0.769,1.025l-0.854,0.939l-0.825,0.91l-0.911,0.825l-0.854,0.77l-0.882,0.739l-0.911,0.685l-0.883,0.625l-0.911,0.598l-0.911,0.543l-0.911,0.482l-0.911,0.484l-0.912,0.427l-0.938,0.398l-0.911,0.345l-0.883,0.282l-0.882,0.255l-0.883,0.257l-0.882,0.2l-0.854,0.172l-0.854,0.171l-0.826,0.14l-0.854,0.086l-0.797,0.086l-0.768,0.055l-0.741,0.06l-0.74,0.028l-1.366,0l-1.253,-0.058l-1.395,1.506l-1.281,1.569l-1.223,1.622l-1.112,1.708l-0.995,1.738l-0.912,1.792l-0.796,1.821l-0.712,1.824l-0.655,1.933l-0.541,1.938l-0.483,1.965l-0.399,1.993l-0.342,2.021l-0.256,2.02l-0.227,1.993l-0.143,2.05l-0.086,2.049l-0.029,2.021l0.029,2.021l0.086,1.994l0.113,1.993l0.172,1.964l0.227,1.936l0.228,1.907l0.256,1.907l0.285,1.851l0.314,1.762l0.341,1.767l0.342,1.65l0.37,1.652l0.398,1.594l0.371,1.48l-0.969,-1.594l-1.282,-2.077l-0.739,-1.254l-0.797,-1.28l-0.826,-1.452l-0.826,-1.568l-0.825,-1.648l-0.882,-1.824l-0.883,-1.905l-0.853,-2.022l-0.855,-2.136l-0.796,-2.249l-0.798,-2.363l-0.74,-2.473l-0.683,-2.621l-0.626,-2.733l-0.542,-2.82l-0.455,-2.932l-0.341,-3.103l-0.284,-3.187l-0.143,-3.331l-0.029,-3.388l0.114,-3.529l0.228,-3.672l0.399,-3.76l0.569,-3.9l0.712,-4.014l0.882,-4.155l1.11,-4.214l1.281,-4.383l-0.825,0.568l-0.855,0.627l-0.825,0.656l-0.825,0.682l-0.797,0.711l-0.798,0.77l-0.768,0.796l-0.769,0.798l-0.768,0.856l-0.713,0.881l-0.711,0.854l-0.712,0.939l-0.625,0.939l-0.683,0.997l-0.599,1.024l-0.598,1.055l-0.57,1.053l-0.511,1.052l-0.484,1.112l-0.456,1.109l-0.427,1.14l-0.369,1.165l-0.342,1.196l-0.313,1.169l-0.456,2.448l-0.143,1.253l-0.113,1.25l-0.058,1.283l0,1.279l0.058,1.311l0.113,1.278l-0.341,-0.624l-0.398,-0.711l-0.4,-0.795l-0.427,-0.856l-0.426,-0.968l-0.455,-1.08l-0.484,-1.112l-0.456,-1.168l-0.484,-1.252l-0.455,-1.31l-0.427,-1.367l-0.428,-1.45l-0.426,-1.509l-0.371,-1.536l-0.37,-1.597l-0.312,-1.651l-0.285,-1.737l-0.228,-1.706l-0.228,-1.796l-0.143,-1.763l-0.085,-1.85l-0.057,-1.907l0.029,-1.909l0.085,-1.934l0.142,-1.937l0.257,-1.992l0.314,-1.966l0.37,-1.993l0.483,-2.02l0.57,-2.05l0.683,-2.022l0.796,-2.019l-0.369,0.228l-1.025,0.654l-0.712,0.513l-0.768,0.624l-0.428,0.372l-0.427,0.426l-0.455,0.426l-0.456,0.486l-0.483,0.542l-0.455,0.568l-0.485,0.597l-0.483,0.627l-0.485,0.681l-0.455,0.743l-0.456,0.741l-0.455,0.823l-0.427,0.854l-0.399,0.884l-0.398,0.911l-0.371,1.023l-0.341,1.028l-0.285,1.081l-0.284,1.137l-0.258,1.197l-0.511,-1.226l-0.456,-1.195l-0.398,-1.195l-0.369,-1.195l-0.285,-1.14l-0.229,-1.138l-0.198,-1.139l-0.144,-1.112l-0.084,-1.109l-0.058,-1.08l-0.028,-1.053l0.028,-1.054l0.058,-1.025l0.084,-0.997l0.144,-0.997l0.142,-0.936l0.198,-0.942l0.2,-0.884l0.229,-0.882l0.255,-0.881l0.285,-0.854l0.285,-0.826l0.626,-1.538l0.313,-0.709l0.342,-0.715l0.341,-0.681l0.342,-0.629l0.683,-1.194l0.655,-1.051l-0.599,-2.023l-0.683,-1.88l-0.825,-1.847l-0.911,-1.796l-0.996,-1.765l-1.082,-1.707l-1.196,-1.622l-1.252,-1.597l-1.31,-1.508l-1.395,-1.479l-1.48,-1.423l-1.508,-1.368l-1.567,-1.308l-1.622,-1.254l-1.651,-1.194l-1.708,-1.197l-1.679,-1.11l-1.737,-1.051l-1.793,-1.028l-1.765,-0.965l-1.765,-0.911l-1.794,-0.827l-1.793,-0.825l-1.737,-0.769l-1.764,-0.77l-1.737,-0.683l-1.68,-0.626l-1.708,-0.597l-1.651,-0.54l-1.594,-0.514l-1.537,-0.454l-1.48,-0.428l1.85,-0.028l2.448,-0.058l2.961,0l1.65,0.028l1.794,0.058l1.851,0.113l1.962,0.171l2.108,0.228l2.193,0.286l2.248,0.339l2.392,0.456l2.447,0.541l2.477,0.628l2.59,0.739l2.676,0.882l2.733,0.97l2.761,1.107l2.847,1.199l2.875,1.396l2.932,1.534l3.019,1.709l2.96,1.906l3.045,2.049l3.104,2.25l3.076,2.422l3.129,2.645l3.104,2.849l3.131,3.07l3.159,3.305l-0.085,-1.027l-0.113,-1.022l-0.143,-1.026l-0.199,-1.082l-0.199,-1.052l-0.256,-1.054l-0.284,-1.083l-0.371,-1.052l-0.341,-1.081l-0.4,-1.083l-0.427,-1.052l-0.454,-1.054l-0.485,-1.083l-0.541,-1.022l-0.569,-1.054l-0.598,-1.027l-0.626,-0.995l-0.654,-0.998l-0.713,-0.966l-0.739,-0.996l-0.798,-0.942l-0.768,-0.91l-1.765,-1.707l-0.94,-0.826l-0.94,-0.797l-0.996,-0.741l-1.053,-0.709l-1.053,-0.686l-1.11,-0.681l-1.167,-0.597l-1.196,-0.543l0.71,0l0.798,0.029l0.94,0.058l0.968,0.054l1.053,0.117l1.11,0.112l1.196,0.173l1.253,0.198l1.31,0.228l1.365,0.255l1.423,0.341l1.452,0.344l1.51,0.397l1.537,0.426l1.566,0.484l1.622,0.543l1.594,0.57l1.65,0.652l1.595,0.714l1.651,0.767l1.679,0.825l1.652,0.91l1.622,0.971l1.623,1.051l1.623,1.139l1.595,1.167l1.537,1.283l1.537,1.339l1.509,1.419l1.451,1.513l1.395,1.591l1.395,1.709l0,-0.425l-0.057,-1.226l-0.085,-0.853l-0.171,-1.025l-0.086,-0.54l-0.142,-0.598l-0.171,-0.597l-0.17,-0.655l-0.229,-0.657l-0.255,-0.682l-0.285,-0.714l-0.314,-0.738l-0.37,-0.741l-0.398,-0.768l-0.427,-0.769l-0.484,-0.798l-0.513,-0.825l-0.569,-0.796l-0.626,-0.797l-0.683,-0.825l-0.712,-0.798l-0.797,-0.827l-0.797,-0.796l-0.91,-0.77l1.308,0.141l1.253,0.23l1.223,0.229l1.197,0.256l1.139,0.342l1.138,0.368l1.082,0.401l1.054,0.426l0.995,0.456l0.968,0.512l0.911,0.512l0.883,0.541l0.854,0.569l0.796,0.569l0.798,0.597l0.74,0.655l0.741,0.629l0.682,0.626l0.655,0.653l0.626,0.626l0.598,0.656l0.541,0.655l0.54,0.653l0.485,0.655l0.485,0.657l0.427,0.625l0.426,0.653l0.37,0.571l0.684,1.227l0.597,1.106l2.192,0.43l2.134,0.311l2.136,0.169l2.136,0.089l2.134,-0.059l2.078,-0.114l2.051,-0.255l2.048,-0.313l1.993,-0.428l1.993,-0.511l1.964,-0.569l1.936,-0.655l1.908,-0.714l1.878,-0.796l1.822,-0.825l1.793,-0.912l1.766,-0.94l1.765,-0.994l1.678,-1.026l1.681,-1.055l1.623,-1.107l1.564,-1.14l1.538,-1.137l1.508,-1.14l1.424,-1.166l1.424,-1.169l1.338,-1.109l2.619,-2.337l1.195,-1.137l1.167,-1.11l1.11,-1.082Z"}/>
                                <g id="arcada">
                                    <path
                                        id={"A1"}
                                        d={"M189.712,71.262l12.175,-24.789l8.558,24.825l-20.733,-0.036Zm-17.557,4.095l-3.162,5.994l-4.865,9.258l-1.206,2.209l-1.482,3.115l-7.252,13.832l18.304,0l1.535,-3.732l1.537,-3.488l0.355,-0.895l1.137,-2.585l1.536,-3.267l1.438,-2.967l0.141,-0.295l1.535,-3.203l1.58,-2.973l1.536,-2.845l28.585,0l1.195,2.844l1.151,3.042l1.153,3.143l0.113,0.302l3.172,9.468l1.024,3.726l0.981,3.725l17.791,0l-2.764,-7.812l-0.692,-2.053l-2.611,-6.981l-0.887,-2.386l-5.62,-15.151l-1.148,-3.296l-3.514,-9.56l-3.329,-9.491l-3.285,-8.738l-3.157,-9.501l-20.138,0.008l-4.65,9.503l-4.693,9.149l-4.779,9.285l-4.965,9.595l-1.6,3.106"}/>
                                    <path
                                        id={"R"}
                                        d={"M285.066,75.357l-0.195,-0.362l1.108,-0.214l1.11,-0.256l1.066,-0.298l1.025,-0.299l1.024,-0.341l0.981,-0.342l0.981,-0.384l0.896,-0.425l0.939,-0.429l0.895,-0.468l0.854,-0.427l0.81,-0.554l0.812,-0.555l0.768,-0.555l1.45,-1.28l0.682,-0.683l0.597,-0.682l0.598,-0.768l0.555,-0.769l0.511,-0.852l0.471,-0.81l0.426,-0.897l0.384,-0.896l0.341,-0.938l0.298,-0.983l0.299,-1.023l0.214,-1.023l0.17,-1.11l0.129,-1.11l0.043,-1.152l0.042,-1.194l-0.042,-1.322l-0.087,-1.195l-0.17,-1.152l-0.214,-1.11l-0.255,-1.065l-0.342,-1.026l-0.384,-0.981l-0.469,-0.895l-0.427,-0.854l-0.554,-0.853l-0.597,-0.767l-0.641,-0.726l-0.682,-0.684l-0.725,-0.681l-0.811,-0.597l-0.81,-0.555l-0.854,-0.512l-0.896,-0.47l-0.895,-0.469l-0.939,-0.385l-0.981,-0.382l-2.049,-0.599l-2.133,-0.511l-1.109,-0.17l-1.153,-0.172l-1.193,-0.128l-1.153,-0.084l-1.152,-0.086l-1.152,-0.043l-34.687,0l-0.085,9.301l-0.256,13.909l-0.127,4.651l-0.171,4.692l-0.17,4.566l-0.159,3.434l-0.27,5.867l-0.297,4.607l-0.257,4.693l-0.171,2.294l-0.169,2.272l-0.384,4.607l-0.153,1.851l-0.231,2.799l-0.427,4.608l16.767,0l0.127,-5.503l0.043,-1.904l0.128,-5.776l0.099,-2.954l0.201,-6.048l0.255,-9.77l0.051,-1.643l0.248,-7.914l0.299,-8.875l0.213,-7.338l0.17,-4.949l1.451,-0.128l1.494,-0.127l1.45,-0.086l1.494,-0.086l1.493,-0.043l1.45,-0.042l1.493,-0.042l2.817,0l1.28,0.042l1.28,0.085l1.236,0.172l1.238,0.169l1.237,0.299l0.555,0.171l0.555,0.17l0.555,0.214l0.51,0.256l0.513,0.256l0.513,0.298l0.468,0.299l0.426,0.341l0.471,0.384l0.768,0.854l0.34,0.469l0.299,0.512l0.257,0.512l0.213,0.597l0.214,0.641l0.127,0.681l0.128,0.684l0.085,0.768l0,1.62l-0.085,0.854l-0.128,0.811l-0.127,0.768l-0.214,0.725l-0.256,0.726l-0.256,0.682l-0.298,0.64l-0.343,0.597l-0.384,0.599l-0.426,0.554l-0.511,0.511l-0.471,0.513l-0.512,0.468l-0.511,0.47l-0.555,0.427l-0.598,0.384l-0.596,0.342l-0.597,0.34l-0.642,0.299l-0.681,0.256l-0.682,0.256l-0.726,0.256l-0.683,0.171l-0.768,0.17l-0.726,0.171l-0.768,0.127l-0.768,0.086l-0.767,0.085l-0.769,0.044l-0.809,0.042l-0.812,0.043l-0.81,-0.043l-0.853,-0.042l-0.811,-0.044l-0.853,-0.085l-0.812,-0.128l-0.852,-0.085l-0.854,-0.128l-0.81,-0.129l2.474,5.034l1.174,2.369l1.344,2.71l2.475,5.077l2.516,5.078l1.238,2.601l0.964,1.995l0.231,0.48l1.152,2.602l1.152,2.56l1.151,2.603l0.188,0.485l0.837,2.16l1.066,2.603l1.024,2.644l17.919,0l-4.011,-7.407l-4.727,-8.73l-9.455,-17.461Z"}/>
                                    <path
                                        id={"C"}
                                        d={"M328.206,75.357l-0.031,-0.533l-0.043,-1.494l0.043,-1.578l0.129,-1.536l0.169,-1.536l0.216,-1.45l0.34,-1.451l0.384,-1.451l0.427,-1.365l0.511,-1.323l0.555,-1.237l0.64,-1.237l0.682,-1.195l0.726,-1.108l0.811,-1.068l0.854,-1.066l0.895,-0.981l0.939,-0.939l1.065,-0.896l1.024,-0.855l1.111,-0.724l1.151,-0.725l1.195,-0.683l1.151,-0.64l1.282,-0.555l1.321,-0.512l1.323,-0.426l1.408,-0.427l1.408,-0.34l1.493,-0.257l1.493,-0.213l1.494,-0.171l1.536,-0.085l1.578,-0.043l1.11,0.043l1.108,0.043l1.152,0.084l1.111,0.086l1.108,0.128l1.11,0.17l1.109,0.171l1.066,0.213l2.218,0.47l2.135,0.512l2.175,0.597l2.133,0.598l-0.682,-12.8l-2.345,-0.427l-2.391,-0.425l-2.389,-0.343l-2.39,-0.298l-2.431,-0.256l-2.39,-0.213l-2.346,-0.085l-2.389,-0.043l-2.39,0.043l-2.304,0.127l-2.304,0.171l-2.218,0.299l-2.176,0.384l-2.09,0.469l-2.091,0.512l-2.004,0.597l-2.006,0.725l-1.878,0.769l-1.835,0.852l-1.791,0.94l-1.708,1.066l-1.621,1.067l-1.577,1.194l-1.538,1.238l-1.406,1.322l-1.324,1.408l-1.28,1.493l-1.193,1.537l-1.067,1.578l-1.025,1.749l-0.938,1.792l-0.853,1.877l-0.725,1.92l-0.683,2.005l-0.554,2.091l-0.514,2.219l-0.34,2.218l-0.3,2.304l-0.126,2.347l-0.087,2.432l0.045,1.13l0.042,1.088l0.126,2.219l0.3,2.048l0.34,2.005l0.514,1.962l0.554,1.834l0.639,1.836l0.769,1.748l0.811,1.622l0.624,1.099l0.271,0.48l0.982,1.493l1.109,1.45l1.109,1.367l1.237,1.279l1.28,1.237l1.323,1.151l0.333,0.273l1.075,0.88l1.493,0.981l1.537,0.938l1.62,0.897l1.622,0.812l1.707,0.724l1.706,0.682l1.792,0.556l1.877,0.554l1.877,0.427l1.877,0.383l1.878,0.341l1.962,0.213l2.005,0.216l2.005,0.084l2.05,0.043l2.601,-0.043l2.561,-0.129l2.56,-0.171l2.472,-0.255l2.476,-0.299l2.475,-0.34l2.432,-0.386l2.39,-0.383l1.036,-6.725l0.969,-6.288l-2.346,0.64l-2.348,0.598l-2.431,0.554l-2.39,0.47l-1.237,0.213l-1.194,0.171l-1.239,0.17l-1.194,0.127l-1.238,0.129l-1.237,0.087l-1.236,0.041l-1.195,0l-1.493,-0.041l-1.41,-0.044l-1.407,-0.128l-1.407,-0.214l-1.322,-0.212l-1.28,-0.299l-1.28,-0.342l-1.239,-0.383l-1.108,-0.427l-1.152,-0.47l-1.11,-0.553l-1.067,-0.556l-1.023,-0.641l-1.024,-0.681l-0.803,-0.651l-0.093,-0.075l-0.896,-0.768l-0.853,-0.81l-0.768,-0.854l-0.768,-0.938l-0.682,-0.981l-0.641,-1.024l-0.597,-1.025l-0.554,-1.109l-0.47,-1.152l-0.47,-1.194l-0.384,-1.195l-0.298,-1.28l-0.299,-1.322l-0.17,-1.366l-0.171,-1.452l-0.055,-0.916Z"}/>
                                    <path
                                        id={"A2"}
                                        d={"M409.708,71.283l12.16,-24.81l8.56,24.828l-20.72,-0.018Zm37.685,4.074l-1.68,-4.543l-2.982,-8.192l-3.285,-9.193l-3.22,-9.024l-3.212,-9.588l-20.191,-0.013l-4.652,9.345l-4.621,9.202l-4.666,9.085l-4.838,9.294l-2.03,3.915l0.149,-0.288l-3.107,5.995l-4.949,9.257l-1.187,2.208l-3.719,6.923l-0.988,2.214l-4.046,7.811l18.345,0l1.536,-3.732l1.493,-3.488l0.367,-0.895l1.17,-2.585l2.935,-6.222l0.137,-0.3l1.578,-3.207l1.536,-2.974l1.579,-2.847l28.585,0l1.151,2.844l1.153,3.042l1.153,3.143l0.114,0.302l0.994,2.898l1.153,3.235l0.826,2.573l1.263,4.482l0.939,3.731l17.793,0l-2.766,-7.811l-0.692,-2.054l-2.579,-6.981l-0.875,-2.386l-3.499,-9.327l-2.165,-5.849Z"}/>
                                    <path
                                        id={"D"}
                                        d={"M522.203,70.167l-0.029,0.902l-0.128,1.28l-0.194,1.366l-0.18,1.281l-0.055,0.36l-0.433,2.283l-0.294,1.281l-0.425,1.236l-0.427,1.238l-0.511,1.195l-0.554,1.194l-0.639,1.152l-0.683,1.109l-0.727,1.067l-0.81,1.024l-0.852,0.982l-0.981,0.98l-1.024,0.898l-1.067,0.81l-1.152,0.81l-0.334,0.203l-0.861,0.521l-1.322,0.683l-1.366,0.64l-1.451,0.555l-1.535,0.47l-1.579,0.426l-1.707,0.384l-1.791,0.256l-1.835,0.214l-1.608,0.104l-1.888,0.057l-12.417,0.01l0.182,-4.142l0.736,-17.338l1.214,-29.043l20.308,0.007l1.365,0.196l1.281,0.209l1.237,0.16l1.195,0.229l1.108,0.328l1.068,0.42l0.981,0.423l0.939,0.512l0.896,0.511l0.895,0.597l0.769,0.597l0.725,0.639l0.681,0.683l0.641,0.811l0.598,0.768l0.554,0.767l0.513,0.853l0.426,0.854l0.427,0.853l0.384,0.897l0.341,0.895l0.298,0.938l0.213,0.939l0.214,0.939l0.214,0.939l0.128,0.981l0.128,0.939l0.127,1.024l0.044,0.981l0.042,1.352l-0.013,2.311Zm15.856,-4.263l-0.144,-2.183l-0.224,-2.14l-0.301,-1.832l-0.317,-1.565l-0.453,-1.834l-0.547,-1.749l-0.594,-1.622l-0.68,-1.622l-0.723,-1.492l-0.811,-1.408l-0.895,-1.323l-0.938,-1.28l-1.024,-1.194l-1.024,-1.11l-1.152,-1.023l-1.194,-0.983l-1.238,-0.895l-1.28,-0.897l-1.323,-0.724l-1.407,-0.725l-1.365,-0.598l-1.452,-0.597l-1.536,-0.47l-1.536,-0.47l-1.62,-0.34l-1.623,-0.342l-1.62,-0.23l-3.414,-0.367l-1.707,-0.042l-1.791,-0.044l-36.309,-0.007l-0.084,12.345l-0.128,5.052l-0.17,5.363l-0.17,5.371l-0.215,5.436l-0.256,5.171l-0.077,1.84l-0.136,3.297l-0.555,9.554l-0.303,4.595l-0.252,3.807l-0.358,4.922l-0.154,2.521l-0.468,5.694l31.997,0l2.646,-0.489l2.517,-0.331l2.518,-0.355l2.345,-0.395l2.304,-0.45l2.178,-0.525l2.091,-0.645l2.089,-0.688l1.92,-0.81l1.835,-0.856l1.749,-0.937l1.62,-1.026l0.973,-0.709l0.607,-0.443l1.45,-1.194l1.409,-1.237l1.365,-1.323l1.237,-1.365l1.152,-1.451l1.066,-1.493l0.143,-0.224l0.838,-1.312l0.94,-1.622l0.81,-1.749l0.727,-1.75l0.681,-1.792l0.554,-1.834l0.511,-1.877l0.429,-1.962l0.341,-2.006l0.194,-1.558l0.062,-0.489l0.225,-2.24l0.096,-1.529l0.017,-2.64l-0.068,-2.554Z"}/>
                                    <path
                                        id={"A3"}
                                        d={"M568.464,71.283l12.161,-24.81l8.478,24.764l-20.639,0.046Zm27.29,21.534l1.494,4.367l1.439,4.365l0.241,0.75l1.023,3.734l0.939,3.732l17.834,0l-2.798,-7.811l-0.699,-2.054l-2.581,-6.981l-0.876,-2.386l-5.553,-14.969l-1.545,-4.174l-3.14,-8.524l-6.834,-19.278l-3.006,-8.804l-20.113,0.021l-4.608,9.26l-4.937,9.739l-4.335,8.517l-4.605,8.848l-2.202,4.188l-3.162,5.995l-4.864,9.257l-1.197,2.208l-4.732,9.137l-4.012,7.811l18.303,0l4.608,-10.346l2.935,-6.399l0.137,-0.39l3.072,-6.222l1.578,-2.893l28.586,0l1.195,2.844l1.151,3.042l1.152,3.143l0.112,0.302"}/>
                                </g>
                        </SvgIcon>
                </Grid>
                <Grid
                    className={styles.appTitle}
                    component={Typography}
                    item
                    variant={"h2"}>
                        {strings.appTitle}
                </Grid>
        </Grid>
    )
}

export default withLogging(Title)
