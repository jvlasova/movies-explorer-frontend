import './AboutProject.css';

function AboutProject() {
  return (
    <section id='aboutProject' className='aboutProject'>
      <h1 className='aboutProject__title'>О проекте</h1>
        <ul className='aboutProject__two-columns'>
          <li>
            <h2 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h2>
            <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li>
            <h2 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h2>
            <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='aboutProject__container'>
          <div className='aboutProject__weeks'>
            <p className='aboutProject__one-week'>1 неделя</p>
            <p className='aboutProject__text-development'>Back-end</p>
          </div>
          <div className='aboutProject__weeks'>
            <p className='aboutProject__four-week'>4 недели</p>
            <p className='aboutProject__text-development'>Front-end</p>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;

