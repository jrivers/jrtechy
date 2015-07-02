/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'yapodepotlogo3',
                            type: 'image',
                            rect: ['127px', '3px', '242px', '175px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yapodepotlogo3.png",'0px','0px']
                        },
                        {
                            id: 'yapodepotlogo4',
                            type: 'image',
                            rect: ['129px', '6px', '249px', '172px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yapodepotlogo4.png",'0px','0px']
                        },
                        {
                            id: 'yapodepotlogo5',
                            type: 'image',
                            rect: ['127px', '1px', '250px', '175px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yapodepotlogo5.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '503px', '175px', 'auto', 'auto'],
                            sizeRange: ['','800px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "height",
                            0,
                            0,
                            "linear",
                            "${yapodepotlogo5}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid45",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${yapodepotlogo5}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid61",
                            "height",
                            2813,
                            0,
                            "linear",
                            "${yapodepotlogo5}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid62",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${yapodepotlogo5}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid48",
                            "height",
                            0,
                            1495,
                            "linear",
                            "${yapodepotlogo4}",
                            '175px',
                            '173px'
                        ],
                        [
                            "eid49",
                            "height",
                            1495,
                            5,
                            "linear",
                            "${yapodepotlogo4}",
                            '173px',
                            '175px'
                        ],
                        [
                            "eid63",
                            "height",
                            2813,
                            687,
                            "linear",
                            "${yapodepotlogo4}",
                            '175px',
                            '172px'
                        ],
                        [
                            "eid8",
                            "top",
                            2265,
                            1235,
                            "linear",
                            "${yapodepotlogo3}",
                            '6px',
                            '3px'
                        ],
                        [
                            "eid18",
                            "width",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo5}",
                            '503px',
                            '250px'
                        ],
                        [
                            "eid6",
                            "left",
                            2265,
                            1235,
                            "linear",
                            "${yapodepotlogo3}",
                            '-538px',
                            '127px'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${yapodepotlogo4}",
                            '-538px',
                            '-6px'
                        ],
                        [
                            "eid31",
                            "left",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo4}",
                            '-6px',
                            '129px'
                        ],
                        [
                            "eid50",
                            "height",
                            0,
                            0,
                            "linear",
                            "${yapodepotlogo3}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid51",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${yapodepotlogo3}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid52",
                            "height",
                            2813,
                            0,
                            "linear",
                            "${yapodepotlogo3}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid53",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${yapodepotlogo3}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid30",
                            "top",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo5}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid23",
                            "rotateZ",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo3}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid22",
                            "width",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo3}",
                            '503px',
                            '242px'
                        ],
                        [
                            "eid20",
                            "width",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo4}",
                            '503px',
                            '249px'
                        ],
                        [
                            "eid42",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid43",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Stage}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid59",
                            "height",
                            2813,
                            0,
                            "linear",
                            "${Stage}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid60",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${Stage}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid15",
                            "width",
                            1500,
                            2000,
                            "linear",
                            "${Stage}",
                            '503px',
                            '504px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${yapodepotlogo4}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid33",
                            "top",
                            1500,
                            2000,
                            "linear",
                            "${yapodepotlogo4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid10",
                            "left",
                            1500,
                            765,
                            "linear",
                            "${yapodepotlogo5}",
                            '-503px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "left",
                            2265,
                            1235,
                            "linear",
                            "${yapodepotlogo5}",
                            '0px',
                            '127px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yapodepotlogo10_edgeActions.js");
})("EDGE-167823187");
