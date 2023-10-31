import styles from './marquee.module.css'

export const Marquee = ({ name }) => {
    return (
        <div className={`bg-black bg-opacity-10 backdrop-blur-lg w-full + ${styles.slider} `}>
            <p className={styles.slides}>{name}</p>
            <p className={styles.slides}> {name}</p>
            <p className={styles.slides}> {name}</p>
        </div>
    )
}