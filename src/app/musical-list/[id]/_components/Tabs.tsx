'use client';

import { TabProps } from '@app/types/MusicalDetail';
import { useState } from 'react';

const Tabs = ({ tabs, children }: TabProps): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex space-x-4 border-b border-gray-700 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-white text-white' : 'text-lightGray'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
