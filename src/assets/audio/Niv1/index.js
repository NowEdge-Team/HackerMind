import currentLang from "../../../helpers/detectBrowserLanguage"


// ici la list des audio avec  key value
// { "key" :   "value"  }
// -> key le nom dans Level1Audio ex: Level1Audio.audio1 | Level1Audio.audio3 ...
// -> value le nom du fichier audio son l'extension ex: Audio 1.1.m4a la valeur ça sera Audio 1.1
const names = [
    {"audio1":"Audio 1.1"},
    {"audio2":"Audio 1.2"},
    {"audio3":"Audio 1.3"},
    {"audio4":"Audio 1.4"},
    {"audio5":"Audio 1.5"},
    {"audio6":"Audio 1.6"},
    {"audio7":"Audio 1.7"},
    {"audio8":"Audio 1.8"},
    {"audio9":"p1"},
    {"audio10":"p2"},
    {"audio11":"p3"},
    {"audio12":"p4"}, 
    {"audio13":"p5"},
    {"audio14":"p6"},
    {"audio15":"p7"},
    {"audio16":"p8"},
    {"audio17":"m1"},
    {"audio18":"m2"},
    {"audio19":"m3"},
    {"audio20":"m4"},
    {"audio21":"m5"},
    {"audio22":"m6"},

    {"felicitation":"felicitation"}
]

const Level1Audio = {}

names.forEach(async (file,index) => {

    const object = Object.entries(file)[0];

    const module = await import(`./${currentLang()}/${object[1]}.m4a`)
    Level1Audio[object[0]] = module.default
});


export default Level1Audio;
