import currentLang from "../../../helpers/detectBrowserLanguage"


// ici la list des audio avec  key value
// { "key" :   "value"  }
// -> key le nom dans Level1Audio ex: Level1Audio.audio1 | Level1Audio.audio3 ...
// -> value le nom du fichier audio son l'extension ex: Audio 1.1.m4a la valeur ça sera Audio 1.1
const names = [
    {"missionAudio1":"Mission audio1"},
    {"missionAudio2":"Mission audio2"},
    {"missionAudio3":"Mission audio3"}
];

const MissionAudio = {};

names.forEach(async (file,index) => {

    const object = Object.entries(file)[0];

    const module = await import(`./${currentLang()}/${object[1]}.m4a`);

    MissionAudio[object[0]] = module.default;
});


export default MissionAudio;

