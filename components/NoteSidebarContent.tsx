import React from "react";
import "../styles/pages/Notes.scss";

interface Note {
  id: string;
  content: string;
  createdAt: number;
}

interface NoteSidebarProps {
  notes: Note[];
  activeNoteId: string | null;
  onSelectNote: (id: string) => void;
  onCreateNewNote: () => void;
}

export function extractTextFromHTML(html: string): string[] {
  const doc = new DOMParser().parseFromString(html, "text/html");

  // Recursively collect text from all child nodes, not just specific tags
  const textNodes = Array.from(doc.body.childNodes).flatMap((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent || "").trim(); // Capture raw text content
    } else if (node.nodeName === "BR") {
      return "\n"; // Handle line breaks
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // If it's an element, recursively extract text from its children
      return extractTextFromElement(node as Element);
    }
    return "";
  });

  return textNodes.filter((text) => text !== "");
}

// Helper function to recursively extract text from element nodes
function extractTextFromElement(element: Element): string[] {
  const textArray: string[] = [];

  element.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      textArray.push((child.textContent || "").trim());
    } else if (child.nodeName === "BR") {
      textArray.push("\n");
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      textArray.push(...extractTextFromElement(child as Element)); // Recursive call
    }
  });

  return textArray;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

const NotePreview: React.FC<{
  note: Note;
  isActive: boolean;
  onSelect: () => void;
}> = ({ note, isActive, onSelect }) => {
  const lines = extractTextFromHTML(note.content);
  const title = truncateText(lines[0] || "Untitled", 15);
  const preview =
    lines.length > 1 ? truncateText(lines.slice(1).join(" "), 30) : "";

  return (
    <div className="notes__wrapper__left__stack">
      <div
        className={`notes__wrapper__left__stack__note ${
          isActive ? "notes__wrapper__left__stack__note--active" : ""
        }`}
        onClick={onSelect}
      >
        <div className="notes__wrapper__left__stack__note__top">
          <p className="notes__wrapper__left__stack__note__top__text">
            {title}
          </p>

          <svg
            className="notes__wrapper__left__stack__note__top__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            <path
              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 22H21"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="notes__wrapper__left__stack__note__details">{preview}</p>
      </div>
    </div>
  );
};

const NoteSidebarContent: React.FC<NoteSidebarProps> = ({
  notes,
  activeNoteId,
  onSelectNote,
  onCreateNewNote,
}) => {
  return (
    <div className="notes__wrapper__left">
      <button
        className="notes__wrapper__left__button"
        onClick={onCreateNewNote}
      >
        Make a new note
      </button>

      {notes.map((note) => (
        <NotePreview
          key={note.id}
          note={note}
          isActive={note.id === activeNoteId}
          onSelect={() => onSelectNote(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteSidebarContent;
