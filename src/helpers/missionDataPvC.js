import avatar1 from "../assets/images/pv-challenge/avatars/character1.png"
import avatar2 from "../assets/images/pv-challenge/avatars/character2.png"
import avatar3 from "../assets/images/pv-challenge/avatars/character3.png"
import avatar4 from "../assets/images/pv-challenge/avatars/character4.png"
import avatar5 from "../assets/images/pv-challenge/avatars/character5.png"

const avatars = [
    {
        id: 1,
        logo: avatar1,
    },
    {
        id: 2,
        logo: avatar2,
    },
    {
        id: 3,
        logo: avatar3,
    },
    {
        id: 4,
        logo: avatar4,
    },
    {
        id: 5,
        logo: avatar5,
    },
];


const getLogoById = (id, array = avatars) => {
    return array.find((a) => a.id === id);
};

export {avatars, getLogoById};
