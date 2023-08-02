import currentLang from "../../../helpers/detectBrowserLanguage"


// ici la list des audio avec  key value
// { "key" :   "value"  }
// -> key le nom dans Level1Audio ex: Level1Audio.audio1 | Level1Audio.audio3 ...
// -> value le nom du fichier audio son l'extension ex: Audio 1.1.m4a la valeur ça sera Audio 1.1
const names = [
    {"audio1":"Audio 5.1"},
    {"audio2":"Audio 5.2"},
    {"audio3":"Audio 5.3"},
    {"audio4":"Audio 5.4"},
    {"audio5":"Audio 5.5"},
    {"audio6":"Audio 5.6"},
    {"audio7":"Audio 5.7"},
    {"audio8":"Audio 5.8"},
    {"audio9":"Audio 5.9"},
    {"audio10":"Audio 5.10"},
    {"audio11":"Audio 5.11"},
    {"audio12":"Audio 5.12"},
    {"audio13":"president1"},
    {"audio14":"Bravo"}
];

const Level5Audio = {};

names.forEach(async (file,index) => {

    const object = Object.entries(file)[0];

    const module = await import(`./${currentLang()}/${object[1]}.m4a`);

    Level5Audio[object[0]] = module.default;
});


export default Level5Audio;

