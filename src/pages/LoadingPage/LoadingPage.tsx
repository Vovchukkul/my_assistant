import './LoadingPage.scss';
import loading from '../../images/loading.svg';
import logo from '../../images/HyperTech.svg';

export const LoadingPage = () => {
  return (
    <div className="loading">
      <div className="wrap">
        <img
          src={loading}
          alt="loading"
          className='loading_icon'
        />
        <img
          src={logo}
          alt="logo"
          className="loading_hyper"
        />
      </div>
    </div>
  );
};