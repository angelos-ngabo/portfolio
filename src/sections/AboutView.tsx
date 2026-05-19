import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileCode, Star, MessageSquare } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  content: string[];
}

interface FolderItem {
  name: string;
  colorClass: string;
  files: FileItem[];
}

const AboutView: React.FC = () => {
  const [activeFile, setActiveFile] = useState<string>('bio');
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'personal-info': true,
    'contacts': true,
  });

  const folders: Record<string, FolderItem> = {
    'personal-info': {
      name: 'personal-info',
      colorClass: 'text-[#FEA55F]',
      files: [
        {
          id: 'bio',
          name: 'bio.txt',
          content: [
            '/**',
            ' * @class Bio',
            ' * @description Professional Overview',
            ' *',
            ' * Ngabo Angelos is a software engineering student at the',
            ' * Adventist University of Central Africa (AUCA), focused on',
            ' * designing robust, scalable, and maintainable systems.',
            ' *',
            ' * He specializes in backend systems architecture (Java Spring',
            ' * Boot, ASP.NET Core) combined with polished user interfaces',
            ' * (React, TypeScript, Tailwind CSS).',
            ' *',
            ' * His goal is to deliver production-ready software solutions',
            ' * that bridge technical precision and user satisfaction.',
            ' */',
          ],
        },
        {
          id: 'education',
          name: 'education.txt',
          content: [
            '/**',
            ' * @section Education',
            ' *',
            ' * Institution: Adventist University of Central Africa (AUCA)',
            ' * Degree: BSc in Software Engineering',
            ' * Period: 2023 - Present',
            ' * Location: Kigali, Rwanda',
            ' *',
            ' * Core Coursework:',
            ' *  - Data Structures & Algorithms',
            ' *  - Distributed Database Systems',
            ' *  - Software Architectures & Patterns',
            ' *  - Object-Oriented Software Design',
            ' */',
          ],
        },
        {
          id: 'interests',
          name: 'interests.txt',
          content: [
            '/**',
            ' * @section Technical Interests',
            ' *',
            ' * 1. Fullstack Systems & Web Architectures',
            ' *    Building single-page and server-rendered reactive webs.',
            ' *',
            ' * 2. Enterprise Databases & APIs',
            ' *    PostgreSQL/MySQL schema design, ORM mappings, security.',
            ' *',
            ' * 3. Client-Side State & Local-First Design',
            ' *    Caching, browser-based ledgers, client calculations.',
            ' *',
            ' * 4. Microservices & Distributed Computing',
            ' *    Spring Cloud, RMI network registers, remote procedures.',
            ' */',
          ],
        },
      ],
    },
    'contacts': {
      name: 'contacts',
      colorClass: 'text-[#38BDF8]',
      files: [
        {
          id: 'email',
          name: 'email.txt',
          content: [
            '/**',
            ' * @contact Email',
            ' *',
            ' * Feel free to send general inquiries or',
            ' * project collaborations directly to:',
            ' *',
            ' * ngaoangelos2@gmail.com',
            ' */',
          ],
        },
        {
          id: 'phone',
          name: 'phone.txt',
          content: [
            '/**',
            ' * @contact Phone',
            ' *',
            ' * Primary mobile contact:',
            ' * +250 781 889 168',
            ' *',
            ' * Available for calls and chat platforms.',
            ' */',
          ],
        },
      ],
    },
  };

  const getActiveFileContent = () => {
    for (const folderKey in folders) {
      const file = folders[folderKey].files.find((f) => f.id === activeFile);
      if (file) return file.content;
    }
    return [];
  };

  const toggleFolder = (folderKey: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderKey]: !prev[folderKey],
    }));
  };

  const snippets = [
    {
      title: 'Spring Boot API Controller',
      user: '@angelos-ngabo',
      date: 'Created 2 months ago',
      stars: 12,
      comments: 4,
      code: `// Get warehouse catalog items
@GetMapping("/warehouse/{id}/inventory")
public ResponseEntity<List<InventoryDto>> getInventory(
    @PathVariable Long id,
    @RequestParam(required = false) String query
) {
    log.info("Fetching inventories for warehouse ID: {}", id);
    List<InventoryDto> items = searchService
        .findActiveInventories(id, query);
    return ResponseEntity.ok(items);
}`,
      language: 'java',
    },
    {
      title: 'Local-First Custom State Hook',
      user: '@angelos-ngabo',
      date: 'Created 3 months ago',
      stars: 8,
      comments: 2,
      code: `// Synchronize React state with IndexedDB
export function useLocalLedger<T>(key: string, initial: T) {
  const [data, setData] = useState<T>(initial);
  
  useEffect(() => {
    db.get(key).then(val => {
      if (val) setData(val as T);
    });
  }, [key]);

  const save = async (newVal: T) => {
    setData(newVal);
    await db.put(key, newVal);
  };
  return [data, save] as const;
}`,
      language: 'typescript',
    },
  ];

  return (
    <div className="grid w-full gap-8 lg:grid-cols-[240px_1fr_1.1fr] lg:h-full lg:overflow-hidden -mx-4 -my-8 sm:-mx-8 sm:-my-12">
      {/* 1. Left Folder Explorer Pane (Inside Main view for mobile compatibility) */}
      <div className="border-b border-[#1E2D3D] bg-[#01080E]/40 p-4 lg:border-b-0 lg:border-r lg:border-[#1E2D3D] lg:p-6 select-none shrink-0 font-mono">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#607B96] flex items-center gap-2">
          <FolderItemIcon isOpen={true} /> Explorer
        </h3>
        <div className="space-y-3">
          {Object.entries(folders).map(([key, folder]) => {
            const isExpanded = expandedFolders[key];
            return (
              <div key={key} className="space-y-1.5">
                <button
                  onClick={() => toggleFolder(key)}
                  className="flex w-full items-center gap-1.5 text-base font-semibold text-[#E5E9F0] hover:text-white"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4.5 w-4.5 text-[#607B96]" />
                  ) : (
                    <ChevronRight className="h-4.5 w-4.5 text-[#607B96]" />
                  )}
                  <span className={folder.colorClass}>{folder.name}</span>
                </button>
                {isExpanded && (
                  <div className="pl-5 space-y-1.5">
                    {folder.files.map((file) => (
                      <button
                        key={file.id}
                        onClick={() => setActiveFile(file.id)}
                        className={`flex w-full items-center gap-2.5 text-sm py-2 transition-colors ${
                          activeFile === file.id
                            ? 'text-white font-semibold'
                            : 'text-[#607B96] hover:text-[#E5E9F0]'
                        }`}
                      >
                        <FileCode className="h-4.5 w-4.5" />
                        <span>{file.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Middle Editor Pane */}
      <div className="flex flex-col border-b border-[#1E2D3D] lg:border-b-0 lg:border-r lg:border-[#1E2D3D] overflow-hidden bg-[#011627] min-h-[350px] lg:min-h-0 select-text">
        {/* Editor File Tab Header */}
        <div className="flex h-11 w-full items-center border-b border-[#1E2D3D] bg-[#01080E]/30 px-4 text-sm font-medium">
          <span className="text-[#E5E9F0]">{activeFile}.txt</span>
        </div>

        {/* Text Area Content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 font-mono text-base leading-relaxed text-[#607B96]">
          <div className="flex gap-4">
            {/* Row Numbers */}
            <div className="select-none text-right text-sm text-[#1E2D3D] font-mono pr-2 border-r border-[#1E2D3D]/30 min-w-[28px]">
              {getActiveFileContent().map((_, idx) => (
                <div key={idx} className="h-6">
                  {idx + 1}
                </div>
              ))}
            </div>
            {/* Editor Text lines */}
            <div className="flex-grow space-y-0">
              {getActiveFileContent().map((line, idx) => (
                <div key={idx} className="h-6 whitespace-pre font-mono">
                  <span className="text-[#607B96]">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Right Code Snippet Showcase Pane */}
      <div className="flex flex-col overflow-y-auto p-4 lg:p-6 space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#607B96]">
          // Code snippet showcase
        </h3>

        <div className="space-y-6">
          {snippets.map((snippet, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#1E2D3D] bg-[#01080E]/40 overflow-hidden flex flex-col font-mono text-sm"
            >
              {/* Header card meta */}
              <div className="flex items-center justify-between border-b border-[#1E2D3D] bg-[#01080E]/60 p-3.5 select-none">
                <div className="flex items-center gap-2.5">
                  <span className="h-7 w-7 rounded-full bg-[#011627] flex items-center justify-center font-bold text-[#FEA55F] border border-[#1E2D3D] text-xs">
                    A
                  </span>
                  <div>
                    <div className="font-semibold text-[#E5E9F0]">{snippet.user}</div>
                    <div className="text-[10px] text-[#607B96]">{snippet.date}</div>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex items-center gap-3.5 text-[#607B96] text-xs">
                  <span className="flex items-center gap-1.5 hover:text-[#FEA55F] cursor-pointer">
                    <Star className="h-4 w-4 fill-[#607B96]/10" /> {snippet.stars}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#38BDF8] cursor-pointer">
                    <MessageSquare className="h-4 w-4" /> {snippet.comments}
                  </span>
                </div>
              </div>

              {/* Code viewer box */}
              <pre className="p-4 bg-[#011627] text-white/80 overflow-x-auto select-text font-mono leading-relaxed text-sm whitespace-pre max-h-56">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Internal mini-icon component
const FolderItemIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className="h-3.5 w-3.5 text-[#607B96]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    )}
  </svg>
);

export default AboutView;
