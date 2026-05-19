import React, { useState } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Folder, Terminal, Cpu, Mail } from 'lucide-react';

interface IdeLayoutProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const IdeLayout: React.FC<IdeLayoutProps> = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  children,
  sidebarContent,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'hello', label: '_hello' },
    { id: 'about', label: '_about-me' },
    { id: 'projects', label: '_projects' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#01080E] text-[#607B96] select-none font-mono">
      {/* Top Header Section */}
      <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-[#1E2D3D] bg-[#01080E]">
        {/* Left Side Brand */}
        <div className="flex h-full items-center border-r border-[#1E2D3D] px-6 text-[#E5E9F0] font-medium tracking-tight w-64 shrink-0 justify-between">
          <span className="text-base">ngabo-angelos</span>
          {/* OS Window Dots */}
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-3.5 w-3.5 rounded-full bg-[#FE5F56] opacity-80" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E] opacity-80" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#27C840] opacity-80" />
          </div>
        </div>

        {/* Center Tabs Navigation (Desktop) */}
        <nav className="hidden h-full flex-grow items-center md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex h-full items-center border-r border-[#1E2D3D] px-6 text-base transition-colors hover:text-[#E5E9F0] ${
                activeTab === tab.id
                  ? 'border-b-2 border-b-[#FEA55F] bg-[#011627] text-[#E5E9F0]'
                  : 'text-[#607B96]'
              }`}
            >
              {tab.label}
            </button>
          ))}
          {/* Fill spacing */}
          <div className="h-full flex-grow border-r border-[#1E2D3D]" />
        </nav>

        {/* Right Nav (Desktop) */}
        <div className="hidden h-full items-center md:flex shrink-0">
          <button
            onClick={() => handleTabClick('contact')}
            className={`flex h-full items-center border-l border-[#1E2D3D] px-6 text-base transition-colors hover:text-[#E5E9F0] ${
              activeTab === 'contact'
                ? 'border-b-2 border-b-[#FEA55F] bg-[#011627] text-[#E5E9F0]'
                : 'text-[#607B96]'
            }`}
          >
            _contact-me
          </button>
        </div>

        {/* Hamburger Trigger (Mobile) */}
        <div className="flex h-full items-center px-6 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#607B96] hover:text-[#E5E9F0]"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="relative flex flex-grow w-full overflow-hidden bg-[#011627]">
        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col bg-[#01080E] md:hidden">
            <div className="flex flex-col border-b border-[#1E2D3D] py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-8 py-4 text-left text-base font-semibold border-b border-[#1E2D3D]/50 hover:bg-[#011627] ${
                    activeTab === tab.id ? 'text-[#E5E9F0]' : 'text-[#607B96]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <button
                onClick={() => handleTabClick('contact')}
                className={`px-8 py-4 text-left text-base font-semibold hover:bg-[#011627] ${
                  activeTab === 'contact' ? 'text-[#E5E9F0]' : 'text-[#607B96]'
                }`}
              >
                _contact-me
              </button>
            </div>
            {/* Sidebar Controls in mobile dropdown */}
            {sidebarContent && (
              <div className="flex-grow overflow-y-auto px-6 py-6 bg-[#011627]">
                {sidebarContent}
              </div>
            )}
          </div>
        )}

        {/* Leftmost Activity Bar (Desktop) */}
        <aside className="hidden w-16 shrink-0 flex-col items-center justify-between border-r border-[#1E2D3D] bg-[#01080E] py-4 md:flex">
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2.5 rounded-lg transition-colors hover:text-[#E5E9F0] ${
                sidebarOpen ? 'text-[#E5E9F0] bg-[#011627]' : 'text-[#607B96]'
              }`}
              title="Toggle File Explorer"
            >
              <Folder className="h-6 w-6" />
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`p-2.5 rounded-lg transition-colors hover:text-[#E5E9F0] ${
                activeTab === 'projects' ? 'text-[#E5E9F0] bg-[#011627]' : 'text-[#607B96]'
              }`}
              title="Go to Projects"
            >
              <Cpu className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={() => setActiveTab('contact')}
            className={`p-2.5 rounded-lg transition-colors hover:text-[#E5E9F0] ${
              activeTab === 'contact' ? 'text-[#E5E9F0] bg-[#011627]' : 'text-[#607B96]'
            }`}
            title="Contact Me"
          >
            <Mail className="h-6 w-6" />
          </button>
        </aside>

        {/* Dynamic Sidebar / File Tree panel (Desktop) */}
        {sidebarOpen && sidebarContent && (
          <aside className="hidden w-60 shrink-0 flex-col border-r border-[#1E2D3D] bg-[#01080E] md:flex">
            <div className="flex-grow overflow-y-auto">
              {sidebarContent}
            </div>
          </aside>
        )}

        {/* Core Editor View Space */}
        <main className="relative flex flex-grow flex-col overflow-hidden bg-gradient-to-br from-[#011627] via-[#010A15] to-[#011F35]">
          {/* Floating Blurred Coding Icons Background Wrapper */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
            {/* Ambient colorful light glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#43D9AD]/10 blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#4D5BCE]/10 blur-[90px]" />
            <div className="absolute top-[40%] left-[30%] w-[250px] h-[250px] rounded-full bg-[#FEA55F]/5 blur-[70px]" />

            {/* Scattered blurred programming icons & tags */}
            <div className="absolute top-12 left-16 text-[#607B96]/20 blur-[1px] transform -rotate-12 scale-[3.5] font-mono select-none font-bold">
              &lt;/&gt;
            </div>
            <div className="absolute top-1/4 right-20 text-[#43D9AD]/15 blur-[1.5px] transform rotate-45 scale-[4] font-mono select-none font-bold">
              {"{ }"}
            </div>
            <div className="absolute bottom-24 left-1/3 text-[#4D5BCE]/15 blur-[1px] transform -rotate-6 scale-[3] font-mono select-none font-bold">
              jsx
            </div>
            <div className="absolute top-[60%] left-10 text-[#FEA55F]/15 blur-[2px] transform rotate-12 scale-[3.5] font-mono select-none font-bold">
              sql
            </div>
            <div className="absolute bottom-12 right-24 text-[#607B96]/20 blur-[1.5px] transform -rotate-45 scale-[4] font-mono select-none font-bold">
              git
            </div>
            <div className="absolute top-1/3 left-1/2 text-[#43D9AD]/10 blur-[2px] transform -rotate-12 scale-[2.5] font-mono select-none font-bold">
              npm
            </div>
          </div>

          {/* Main workspace view content */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-8 lg:p-12">
            {children}
          </div>
        </main>
      </div>

      {/* Footer Area */}
      <footer className="flex h-12 w-full shrink-0 items-center justify-between border-t border-[#1E2D3D] bg-[#01080E] px-6 text-base">
        <div className="flex h-full items-center border-r border-[#1E2D3D] pr-4 gap-4">
          <span className="text-[#607B96] text-sm">find me in:</span>
          <div className="flex h-full items-center">
            <a
              href="https://www.linkedin.com/in/ngabo-angelos-939a6a2a5/"
              target="_blank"
              rel="noreferrer"
              className="flex h-full items-center border-x border-[#1E2D3D] px-4 text-[#607B96] hover:text-[#E5E9F0]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ngabo_angelos"
              target="_blank"
              rel="noreferrer"
              className="flex h-full items-center border-r border-[#1E2D3D] px-4 text-[#607B96] hover:text-[#E5E9F0]"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* GitHub link on the right */}
        <a
          href="https://github.com/angelos-ngabo"
          target="_blank"
          rel="noreferrer"
          className="flex h-full items-center border-l border-[#1E2D3D] pl-4 text-[#607B96] hover:text-[#E5E9F0] gap-2.5"
        >
          <span className="hidden sm:inline">@angelos-ngabo</span>
          <Github className="h-5 w-5" />
        </a>
      </footer>
    </div>
  );
};

export default IdeLayout;
