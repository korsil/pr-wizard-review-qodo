
import React from 'react';

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, title, language = "typescript" }) => {
  return (
    <div className="code-block relative rounded-lg overflow-hidden shadow-lg">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-prWizard-dark text-white border-b border-gray-700">
          <span className="text-sm font-mono">{title}</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto relative z-10 text-sm">
        <code className="font-mono text-white">
          {code.split('\n').map((line, i) => (
            <div key={i} className="line">
              <span className="text-gray-500 mr-4">{i + 1}</span>
              {renderCodeLine(line, language)}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const renderCodeLine = (line: string, language: string) => {
  // Very simplified syntax highlighting
  if (language === "typescript" || language === "javascript") {
    // Keywords
    line = line.replace(
      /\b(const|let|var|function|return|if|else|class|import|export|from|async|await)\b/g,
      '<span class="text-purple-400">$1</span>'
    );
    
    // Strings
    line = line.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="text-green-300">$&</span>'
    );
    
    // Comments
    line = line.replace(
      /(\/\/.*)/g,
      '<span class="text-gray-500">$1</span>'
    );

    // Function calls and definitions
    line = line.replace(
      /(\w+)(\s*\()/g,
      '<span class="text-yellow-300">$1</span>$2'
    );
  }
  
  return <span dangerouslySetInnerHTML={{ __html: line }} />;
};

export default CodeBlock;
