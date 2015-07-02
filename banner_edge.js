/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'picture',
                type: 'image',
                rect: ['2.2%', '9.3%','35%','116.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MKM00230.jpg",'0px','0px']
            },
            {
                id: 'C',
                type: 'text',
                rect: ['45.3%', '36.7%','auto','auto','auto', 'auto'],
                text: "C",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1.00)", "normal", "none", ""]
            },
            {
                id: 'u',
                type: 'text',
                rect: ['49.5%', '36.7%','auto','auto','auto', 'auto'],
                text: "u<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            },
            {
                id: 's',
                type: 'text',
                rect: ['52.5%', '36.7%','auto','auto','auto', 'auto'],
                text: "s<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            },
            {
                id: 't',
                type: 'text',
                rect: ['55.3%', '36.7%','auto','auto','auto', 'auto'],
                text: "t<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            },
            {
                id: 'o',
                type: 'text',
                rect: ['57%', '36.7%','auto','auto','auto', 'auto'],
                text: "o",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['60%', '36.7%','auto','auto','auto', 'auto'],
                text: "m<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['66%', '36.7%','auto','auto','auto', 'auto'],
                text: "Banners",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', [375, "%"], "rgba(248,242,242,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '117.33%'],
                ["style", "left", '-6.5%'],
                ["style", "font-size", '375%']
            ],
            "${_C}": [
                ["color", "color", 'rgba(248,242,242,1.00)'],
                ["style", "top", '-55.33%'],
                ["style", "left", '21.7%'],
                ["style", "font-size", '375%']
            ],
            "${_u}": [
                ["style", "top", '-52.67%'],
                ["style", "left", '55.3%'],
                ["style", "font-size", '375%']
            ],
            "${_o}": [
                ["style", "top", '-52.67%'],
                ["style", "left", '88.2%'],
                ["style", "font-size", '375%']
            ],
            "${_s}": [
                ["style", "top", '137.33%'],
                ["style", "left", '15.7%'],
                ["style", "font-size", '375%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(109,148,232,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '200px'],
                ["gradient", "background-image", [270,[['rgba(173,211,255,0.75)',0],['rgba(145,121,26,0.56)',26],['rgba(49,38,5,0.68)',40],['rgba(124,122,116,0.76)',52],['rgba(61,46,4,0.73)',74],['rgba(49,32,1,1.00)',100]]]],
                ["style", "width", '100%']
            ],
            "${_t}": [
                ["style", "top", '128.67%'],
                ["style", "left", '88.2%'],
                ["style", "font-size", '375%']
            ],
            "${_Text6}": [
                ["style", "top", '131.33%'],
                ["style", "left", '34.7%'],
                ["style", "font-size", '375%']
            ],
            "${_picture}": [
                ["style", "top", '-0.17%'],
                ["style", "height", '100%'],
                ["style", "left", '0%'],
                ["style", "width", '34.6%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "style", "${_t}", "left", '55.3%', { fromValue: '88.2%'}], position: 0, duration: 2000 },
                { id: "eid44", tween: [ "style", "${_picture}", "width", '34.6%', { fromValue: '34.6%'}], position: 2000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_u}", "left", '49.5%', { fromValue: '55.3%'}], position: 0, duration: 2000 },
                { id: "eid14", tween: [ "style", "${_s}", "top", '36.67%', { fromValue: '137.33%'}], position: 0, duration: 2000 },
                { id: "eid10", tween: [ "style", "${_u}", "top", '36.67%', { fromValue: '-52.67%'}], position: 0, duration: 2000 },
                { id: "eid30", tween: [ "style", "${_Text7}", "top", '36.67%', { fromValue: '117.33%'}], position: 0, duration: 2000 },
                { id: "eid4", tween: [ "style", "${_C}", "left", '45.3%', { fromValue: '21.7%'}], position: 0, duration: 2000 },
                { id: "eid33", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(173,211,255,0.75)',0],['rgba(145,121,26,0.56)',26],['rgba(49,38,5,0.68)',40],['rgba(124,122,116,0.76)',52],['rgba(61,46,4,0.73)',74],['rgba(49,32,1,1.00)',100]]], { fromValue: [270,[['rgba(173,211,255,0.75)',0],['rgba(145,121,26,0.56)',26],['rgba(49,38,5,0.68)',40],['rgba(124,122,116,0.76)',52],['rgba(61,46,4,0.73)',74],['rgba(49,32,1,1.00)',100]]]}], position: 2000, duration: 0 },
                { id: "eid6", tween: [ "style", "${_C}", "top", '36.67%', { fromValue: '-55.33%'}], position: 0, duration: 2000 },
                { id: "eid22", tween: [ "style", "${_o}", "top", '36.67%', { fromValue: '-52.67%'}], position: 0, duration: 2000 },
                { id: "eid39", tween: [ "style", "${_picture}", "top", '-0.17%', { fromValue: '-0.17%'}], position: 2000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_picture}", "left", '0%', { fromValue: '0%'}], position: 2000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text7}", "left", '66%', { fromValue: '-6.5%'}], position: 0, duration: 2000 },
                { id: "eid42", tween: [ "style", "${_picture}", "height", '100%', { fromValue: '100%'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Stage}", "height", '200px', { fromValue: '200px'}], position: 2000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_t}", "top", '36.67%', { fromValue: '128.67%'}], position: 0, duration: 2000 },
                { id: "eid12", tween: [ "style", "${_s}", "left", '52.5%', { fromValue: '15.7%'}], position: 0, duration: 2000 },
                { id: "eid26", tween: [ "style", "${_Text6}", "top", '36.67%', { fromValue: '131.33%'}], position: 0, duration: 2000 },
                { id: "eid20", tween: [ "style", "${_o}", "left", '57%', { fromValue: '88.2%'}], position: 0, duration: 2000 },
                { id: "eid24", tween: [ "style", "${_Text6}", "left", '60%', { fromValue: '34.7%'}], position: 0, duration: 2000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3957422");
