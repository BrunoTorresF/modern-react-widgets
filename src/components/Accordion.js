import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeTab, setActiveTab] = useState(null);
  const onTitleClicked = (index) => {
    setActiveTab(index);
  };

  const renderItems = items.map((item, idx) => {
    const active = idx === activeTab ? 'active' : '';
    return (
      <Fragment key={`${item.title}-${idx}`}>
        <div className={`title ${active}`} onClick={() => onTitleClicked(idx)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
