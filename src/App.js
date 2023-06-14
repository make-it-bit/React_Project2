import Tilty from 'react-tilty';
import Question from './Question/Question';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <Tilty>
        <header>
          <h1>FAQ</h1>
        </header>
      </Tilty>
      <main>
        <section className={styles.faqSection}>
          <h2>Frequently asked questions</h2>
          {questions.map((question) => {
            return(
              <Question key={question.id} title={question.title} info={question.info}/>
            )
          })}
        </section>
      </main>
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
];

export default App;
