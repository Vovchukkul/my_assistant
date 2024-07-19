import { Dashcard } from "./Dashcard";
import './Dashboard.scss';

export const Dashboard = () => {
  return (
    <div className="dashboard_main">
      <h1 className="dashboard_title">
        Dashboard
      </h1>
      <div className="dashboard_wrap">
        <Dashcard
          title="Портфоліо"
          first_text="Портфоліо - це секція, де зібрані приклади виконаних робіт, які представляють різноманітні аспекти навичок і таланту виконавця."
          second_text="Створити альбом можна у розділі Портфоліо"
          length={32}
        />
        <Dashcard
          title="Прайс лист"
          first_text="Прайс-лист - це розділ в якому виконавець може вказати особисті ціни за послуги."
          second_text="Заповнити прайс можна у розділі Прайс-лист"
          length={32}
        />
        <Dashcard
          title="Робочі локації"
          first_text="Робочі локації це населені пункти, з яких вам приходять нові замовлення."
          second_text="Обрати робочі локації можна у в розділі Робочі локації"
          length={40}
        />
      </div>
    </div>
  );
};