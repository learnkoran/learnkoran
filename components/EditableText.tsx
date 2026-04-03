import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import { Edit2 } from 'lucide-react';

interface EditableTextProps {
  id: string; // The translation key
  defaultText?: string;
  className?: string;
  multiline?: boolean;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  id, 
  defaultText = '', 
  className = '', 
  multiline = false,
  as: Component = 'span' 
}) => {
  const { isEditMode, t, updateTranslation } = useContent();
  const text = t(id, defaultText);
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(text);

  // Sync local value when context changes (e.g. language switch)
  useEffect(() => {
    setLocalValue(text);
  }, [text]);

  const handleBlur = () => {
    setIsEditing(false);
    if (localValue !== text) {
      updateTranslation(id, localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  if (isEditMode) {
    return (
      <span className={`relative group inline-block ${multiline ? 'w-full' : ''}`}>
        {multiline ? (
            <textarea
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onBlur={handleBlur}
                className={`bg-emerald-50/50 border-2 border-dashed border-emerald-400 rounded p-1 outline-none focus:bg-white focus:border-emerald-600 w-full resize-y ${className}`}
                rows={3}
            />
        ) : (
            <input
                type="text"
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={`bg-emerald-50/50 border-2 border-dashed border-emerald-400 rounded p-1 outline-none focus:bg-white focus:border-emerald-600 min-w-[20px] ${className}`}
                style={{ width: localValue.length + 1 + 'ch' }}
            />
        )}
        <span className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 scale-75">
            <Edit2 size={10} />
        </span>
      </span>
    );
  }

  // Render HTML safely if using span, otherwise standard text
  // We use standard children for safety against XSS, assuming text content
  return <Component className={className}>{text}</Component>;
};

export default EditableText;