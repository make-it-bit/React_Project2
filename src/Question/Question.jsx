import { useState } from 'react';
import styles from './Question.module.scss'

const Question = ({title, info}) => {
    const [displayMore, setDisplayMore] = useState(false);

    const changeDisplay = () => {
        setDisplayMore((prevBool) => !prevBool);
    };

    return (
        <section className={styles.wholeQuestionComponent}>
            <article>
                <div className={styles.titleDiv}>
                    <h3>{title}</h3>
                    <button type="button" onClick={changeDisplay}>{setDisplayMore ? 'More' : 'Less'}</button>
                </div>
                <div className={styles.infoDiv}>
                    {displayMore && <p>{info}</p>}
                </div>
            </article>
        </section>
    );
};

export default Question;