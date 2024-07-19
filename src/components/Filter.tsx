import { useState } from 'react';
import './Filter.scss';
import Dropdown from './Dropdown';
import plane from '../images/icons/paper-plane.svg';

export const Filter = () => {
  const options1 = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
  ];

  const options2 = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOptionFirst, setSelectedOptionFirst] = useState('');
  const [selectedOptionSecond, setSelectedOptionSecond] = useState('');
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  const handleSelectFirst = (option: string) => {
    setSelectedOptionFirst(option);
    setIsFirstDropdownOpen(false);
  };

  const handleSelectSecond = (option: string) => {
    setSelectedOptionSecond(option);
    setIsFirstDropdownOpen(false);
  };

  const handleDropdownClick = (dropdown: string) => {
    if (dropdown === 'first') {
      setIsFirstDropdownOpen(true);
      setIsSecondDropdownOpen(false);
    } else {
      setIsFirstDropdownOpen(false);
      setIsSecondDropdownOpen(true);
    }
  };
  return (
    <div className='filter'>
      <div className="services width">
        <Dropdown
          options={options1}
          selectedOption={selectedOptionFirst}
          onSelect={handleSelectFirst}
          droptext="Що потрібно робити"
          legend='Послуги'
          isOpenr={isFirstDropdownOpen}
          onDropdownClick={() => handleDropdownClick("first")}
        />
      </div>
      <div className="city width">
        <Dropdown
          options={options2}
          selectedOption={selectedOptionSecond}
          onSelect={handleSelectSecond}
          droptext="Виберіть місто"
          legend='Місто'
          isOpenr={isSecondDropdownOpen}
          onDropdownClick={() => handleDropdownClick("second")}
        />
      </div>
      <button className="search">
        <img
          src={plane}
          alt="plane"
          className='plane'
        />
        <p className='search__text'>Пошук послуги</p>
      </button>
    </div>
  );
};
