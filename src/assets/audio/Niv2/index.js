import currentLang from "../../../helpers/detectBrowserLanguage"


// ici la list des audio avec  key value
// { "key" :   "value"  }
// -> key le nom dans Level1Audio ex: Level1Audio.audio1 | Level1Audio.audio3 ...
// -> value le nom du fichier audio son l'extension ex: Audio 1.1.m4a la valeur ça sera Audio 1.1
const names = [
    {"audio1":"Audio 2.1"},
    {"audio2":"Audio 2.2"},
    {"audio3":"Audio 2.3"},
    {"audio4":"Audio 2.4"},
    {"audio5":"Audio 2.5"},
    {"audio6":"Audio 2.6"},
    {"audio7":"Audio 2.7"},
    {"audio8":"Audio 2.8"},
    {"audio9":"Audio 2.9"},
    {"bravo":"Bravo2"}
]

const Level2Audio = {}

names.forEach(async (file,index) => {

    const object = Object.entries(file)[0];

    const module = await import(`./${currentLang()}/${object[1]}.m4a`)
    Level2Audio[object[0]] = module.default
});


export default Level2Audio;
