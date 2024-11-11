import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function CustomTabs() {
  return (
    <Tabs>
      <TabList className="flex space-x-4 border-b-2 border-gray-300">
        <Tab
          className={({ selected }) =>
            selected
              ? 'py-2 px-4 font-medium text-blue-500 border-b-2 border-blue-500'
              : 'py-2 px-4 font-medium text-gray-500 hover:text-blue-500'
          }
        >
          Tab 1
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'py-2 px-4 font-medium text-blue-500 border-b-2 border-blue-500'
              : 'py-2 px-4 font-medium text-gray-500 hover:text-blue-500'
          }
        >
          Tab 2
        </Tab>
      </TabList>

      <TabPanel className="p-4 bg-gray-100 border border-gray-200">
        Content 1
      </TabPanel>
      <TabPanel className="p-4 bg-gray-100 border border-gray-200">
        Content 2
      </TabPanel>
    </Tabs>
  );
}

export default CustomTabs;
