import { useState } from 'react';
import IdeLayout from './components/IdeLayout';
import HelloView from './sections/HelloView';
import AboutView from './sections/AboutView';
import ProjectsView from './sections/ProjectsView';
import ContactView from './sections/ContactView';

function App() {
  const [activeTab, setActiveTab] = useState<string>('hello');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Collapsed by default for clean presentation

  const renderActiveView = () => {
    switch (activeTab) {
      case 'hello':
        return <HelloView />;
      case 'about':
        return <AboutView />;
      case 'projects':
        return <ProjectsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HelloView />;
    }
  };

  return (
    <IdeLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      {renderActiveView()}
    </IdeLayout>
  );
}

export default App;