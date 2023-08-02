import audioMission from "../../../../assets/audio/Mission audio.mp3";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import styles from "./style.module.scss"

const Audio = ({src = audioMission , autoPlay=true})=>{



    return <div className={styles.audio_player}>
        <AudioPlayer
            autoPlay={autoPlay}
            src={src}
            layout="horizontal-reverse"
            onPlay={e => console.log("onPlay")}
            showSkipControls={false}
            showFilledVolume={false}
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
        />
    </div>
}



export default Audio;
