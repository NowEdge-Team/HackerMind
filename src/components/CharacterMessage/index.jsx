import styles from "./style.module.scss"


function CharacterMessage({ imgCharacter, title = "", text = "" }) {
    return (
        <div className={styles.container}>
            <div className={styles.imgChar} style={{ backgroundImage: `url(${imgCharacter})` }} />
            <div className={styles.message}>
                <h2>{title}</h2>
                <p className={styles.msg_text} >  {text}</p>
            </div>
        </div>
    );
}

export default CharacterMessage;