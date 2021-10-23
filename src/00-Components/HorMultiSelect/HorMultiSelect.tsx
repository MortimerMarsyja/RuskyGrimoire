// Deps
import React, { useRef, useState } from 'react';
import HorDropDown from './HorDropdown/HorDropdown';
import useDetectOutsideClick from '../../05-Hooks/useClickOutside/useClickOutside';
import StyledHorMultiSelect from './StyledHorMultiSelectComponent.style';
import ICON_LIST from '../../04-Constants/svg/iconList';
import Icon from '../IconComponent';

import { ListItemInterface } from './MultiselectInterfaces';

const listFormatter = (list:ListItemInterface[]) => list
  .map((item:ListItemInterface) => (item.selected ? item : { ...item, selected: false }))
  .map((item:ListItemInterface) => (item.disabled ? item : { ...item, disabled: false }));

const HorMultiSelect = ({ label, list }:
  { label: string, list: ListItemInterface[] }): JSX.Element => {
  const dropdownRef = useRef(null);

  const [selectedItems, setSelectedItems] = useState(listFormatter(list));
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);
  const handleSelect = (listed:ListItemInterface):void => {
    if (listed.selected === false) {
      const deselected = selectedItems.map(
        (item) => (item.value === listed.value ? { ...item, selected: false } : item),
      );
      setSelectedItems(deselected);
    }
    if (listed.selected) {
      setSelectedItems(
        selectedItems.map((item) => (item.value === listed.value
          ? { ...item, selected: true } : item)),
      );
    }
  };

  const currentlySelected = selectedItems.filter((item) => item.selected);

  return (
    <StyledHorMultiSelect
      hasSomethingSelected={currentlySelected.length > 0}
      selectWidth="100%"
      dropdownOpened={isActive}
    >
      <p className="hor-label_non-selected">
        {label}
      </p>
      <div
        onClick={handleClick}
        className="menu-trigger"
        role="button"
        tabIndex={0}
      >
        <p style={{ marginLeft: '12px', display: 'flex' }}>
          {currentlySelected.length > 0
            ? currentlySelected.map((item:ListItemInterface):void => item.label).join(', ')
            : label}
        </p>
        <div className="drop-down-icon">
          <Icon size="26px" icon={isActive ? ICON_LIST.openedEye : ICON_LIST.closedEye} />
        </div>
      </div>
      <HorDropDown
        ref={dropdownRef}
        list={selectedItems}
        isClicked={isActive}
        handleSelect={handleSelect}
      />
    </StyledHorMultiSelect>
  );
};

export default HorMultiSelect;
