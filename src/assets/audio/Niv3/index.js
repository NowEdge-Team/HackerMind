import currentLang from "../../../helpers/detectBrowserLanguage"


// ici la list des audio avec  key value
// { "key" :   "value"  }
// -> key le nom dans Level1Audio ex: Level1Audio.audio1 | Level1Audio.audio3 ...
// -> value le nom du fichier audio son l'extension ex: Audio 1.1.m4a la valeur ça sera Audio 1.1
const names = [
    {"audio1":"Audio 3.1"},
    {"audio2":"Audio 3.2"},
    {"audio3":"Audio 3.3"},
    {"audio4":"Audio 3.4"},
    {"audio5":"Audio 3.5"},
    {"audio6":"Audio 3.6"},
    {"audio7":"Audio 3.7"},
    {"audio8":"Audio 3.8"},
    {"audio10":"Audio 3.9"},
    {"audio9":"Bravo3"}
];

const Level3Audio = {};

names.forEach(async (file,index) => {

    const object = Object.entries(file)[0];

    const module = await import(`./${currentLang()}/${object[1]}.m4a`);

    Level3Audio[object[0]] = module.default;
});


export default Level3Audio;



// 4->12
