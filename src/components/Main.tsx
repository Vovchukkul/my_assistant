import { User } from '../types/User';
import { Blockabout } from './Blockabout';
import { Card } from './Card';
import { List } from './List';
import './Main.scss';

type Props = {
  users: User[],
}

export const Main: React.FC<Props> = ({ users }) => {
  const house_hold_tech = ["Ремонт пральних машин", "Ремонт посудомийних машин", "Ремонт холодильників", "Ремонт газових плит"];
  const climat_tech = ["Ремонт газових котлів", "Ремонт газових колонок", "Ремонт електричних казанів", "Ремонт бойлерів"];
  const plumbing = ["Монтаж каналізацій", "Прочищення каналізацій", "Установка унітазів", "Установка раковин"];
  const master = ["Послуги сантехніка", "Послуги електриків", "Послуги газовика"];
  const comp_tech = ["Ремонт телевізорів", "Ремонт ноутбуків"];

  return (
    <>
      <div className="section_page about-us">
        <Blockabout
          number={1}
          maintext='Виберіть перевіреного майстра'
          subtext='3684 перевірених майстрів на сайті'
        />
        <Blockabout
          number={2}
          maintext='Отримайте кваліфіковану допомогу майстра'
          subtext='Тільки від перевірених фахівців'
        />
        <Blockabout
          number={3}
          maintext='Отримайте гарантію і залиште відгук про майстра'
          subtext='Майстри надають гарантію на послуги'
        />
      </div>
      <div className="wrap">
        <div className="links">
          <List items={house_hold_tech} title='Побутова техніка' />
          <List items={climat_tech} title='Кліматична техніка' />
          <List items={plumbing} title='Сантехнічні роботи' />
          <List items={master} title='Майстер з ремонту' />
          <List items={comp_tech} title='Цифрова техніка' />
        </div>
      </div>
      <div className="masters-flex">
        <div className="our-masters">
          <div className="masters-wrap">
            <h1 className="out-masters__title">
              Наші майстри
            </h1>
            <p className="our-masters__subtitle">
              Тут ти можеш підібрати собі майстра
            </p>
          </div>
          <div className="list-of-masters">
            {users.map(user => (
              <Card name={user.name} speciality={user.speciality} />
            ))}
          </div>
          <button className='masters-button' type='button'>
            Подивитися всіх майстрів
          </button>
        </div>
      </div>
      <div className="info-wrap">
        <div className="info">
          <p className='info-text'>
            Ми раді представити вам наш онлайн-сервіс HyperTech, який пропонує широкий спектр послуг, виконаних досвідченими майстрами у різних містах України. В умовах високої конкуренції ми регулярно оновлюємо наш список послуг, пропонуючи актуальні рішення за максимально вигідними та доступними цінами.
            <br />
            <br />
            Щоб ефективно вирішити завдання різної складності, вам потрібно лише виконати три основні кроки:
            <ol>
              <li>Виберіть послугу та майстри: Ознайомтеся з рейтингом майстрів, сформованим на основі відгуків інших клієнтів, та виберіть відповідного фахівця.</li>
              <br />
              <li>Запросіть майстра додому: Майстер приїде за вказаною адресою до будь-якого району для виконання необхідних робіт.</li>
              <br />
              <li>Отримайте гарантію та страховку: Ми надаємо офіційну гарантію на виконані роботи на 12 місяців після завершення проекту. Крім того, ми пропонуємо додаткову страховку, яка гарантує компенсацію до 1000 грн. у разі проблем з обладнанням або виконанням гарантійних зобов'язань.</li>
            </ol>
          </p>
        </div>
      </div>
    </>
  );
}