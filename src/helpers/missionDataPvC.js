import avatar0 from "../assets/images/pv-challenge/avatars/profile0.png"
import avatar1 from "../assets/images/pv-challenge/avatars/profile1.png"
import avatar2 from "../assets/images/pv-challenge/avatars/profile2.png"
import avatar3 from "../assets/images/pv-challenge/avatars/profile3.png"
import avatar4 from "../assets/images/pv-challenge/avatars/profile4.png"
import avatar5 from "../assets/images/pv-challenge/avatars/profile5.png"
import avatar6 from "../assets/images/pv-challenge/avatars/profile6.png"
import avatar7 from "../assets/images/pv-challenge/avatars/profile7.png"


const avatars = [
    {
        id: 0,
        logo: avatar0,
    },
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
    {
        id: 6,
        logo: avatar6,
    },
    {
        id: 7,
        logo: avatar7,
    },

];

const getLogoById = (id = 0, array = avatars) => {

    return array.find((a) => a.id === id);
};

export { avatars, getLogoById };
