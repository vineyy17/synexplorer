import React, { useRef, useState, useEffect } from "react";
import "../styles/components/NoteEditor.scss";
import "../styles/pages/Notes.scss";
import NoteSidebarContent from "./NoteSidebarContent";
import toast from "react-hot-toast";
import { Popover } from "@radix-ui/themes";
import trash from "../assets/svgs/delete.svg";

interface Note {
  id: string;
  content: string;
  createdAt: number;
}

const NoteEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    h1: false,
    h2: false,
    h3: false,
  });

  // Load content from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
    if (savedNotes.length > 0) {
      setActiveNoteId(savedNotes[0].id);
    }
  }, []);

  useEffect(() => {
    if (activeNoteId && editorRef.current) {
      const activeNote = notes.find((note) => note.id === activeNoteId);
      editorRef.current.innerHTML = activeNote?.content || "";
    }
  }, [activeNoteId, notes]);

  // Save content to localStorage when content changes
  const saveNote = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML.trim();
      if (!content) {
        toast.error("Cannot save an empty note");
        return;
      }

      const currentTime = Date.now();
      let updatedNotes: Note[];

      if (activeNoteId) {
        const activeNoteIndex = notes.findIndex(
          (note) => note.id === activeNoteId
        );
        const updatedNote = {
          ...notes[activeNoteIndex],
          content,
          createdAt: currentTime,
        };
        updatedNotes = [
          updatedNote,
          ...notes.slice(0, activeNoteIndex),
          ...notes.slice(activeNoteIndex + 1),
        ];
      } else {
        // If creating a new note
        const newNote = {
          id: currentTime.toString(),
          content,
          createdAt: currentTime,
        };
        updatedNotes = [newNote, ...notes];
      }

      setNotes(updatedNotes);
      setActiveNoteId(updatedNotes[0].id);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      toast.success("Note saved successfully");
    }
  };

  const createNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      content: "",
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  const changeActiveNote = (direction: "prev" | "next") => {
    const currentIndex = notes.findIndex((note) => note.id === activeNoteId);
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < notes.length) {
      setActiveNoteId(notes[newIndex].id);
    }
  };

  const deleteActiveNote = () => {
    if (!activeNoteId) return;

    const activeIndex = notes.findIndex((note) => note.id === activeNoteId);
    const updatedNotes = notes.filter((note) => note.id !== activeNoteId);

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Set the new active note
    if (updatedNotes.length > 0) {
      // If there's a next note, make it active
      if (activeIndex < updatedNotes.length) {
        setActiveNoteId(updatedNotes[activeIndex].id);
      } else {
        // Otherwise, make the previous note active (or the last note if we deleted the last one)
        setActiveNoteId(updatedNotes[updatedNotes.length - 1].id);
      }
    } else {
      // If no notes left, clear the editor
      setActiveNoteId(null);
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }
    }

    toast.success("Note deleted successfully");
  };

  // Handle formatting actions (bold, italic, underline, headings)
  const formatText = (command: string, value: string | undefined = "") => {
    document.execCommand(command, false, value);
    checkActiveFormats();
  };

  // Check and update active formatting buttons
  const checkActiveFormats = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const parentElement = selection.anchorNode?.parentElement;
      const isHeading = parentElement?.closest("h1, h2, h3") !== null;
      setActiveFormats({
        bold: !isHeading && document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        h1: parentElement?.closest("h1") !== null,
        h2: parentElement?.closest("h2") !== null,
        h3: parentElement?.closest("h3") !== null,
      });
    }
  };

  // Undo action
  const undoAction = () => {
    document.execCommand("undo");
    // saveContent();
  };

  // Redo action
  const redoAction = () => {
    document.execCommand("redo");
    // saveContent();
  };

  return (
    <div className="notes__wrapper">
      <NoteSidebarContent
        notes={notes}
        activeNoteId={activeNoteId}
        onSelectNote={setActiveNoteId}
        onCreateNewNote={createNewNote}
      />

      <div className="noteEditor">
        {/* Toolbar for text formatting */}
        <div className="noteEditor__toolbar">
          <div className="noteEditor__toolbar__flexFirst">
            <button
              className="noteEditor__toolbar__button"
              onClick={() => changeActiveNote("prev")}
              disabled={
                notes.indexOf(notes.find((n) => n.id === activeNoteId)!) === 0
              }
            >
              <svg
                className="noteEditor__toolbar__button__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.12852 15.1667L15.6618 21.7L13.9993 23.3333L4.66602 14L13.9993 4.66667L15.6618 6.3L9.12852 12.8333H23.3327V15.1667H9.12852Z"
                  //   fill="#007566"
                />
              </svg>
            </button>
            <button
              className="noteEditor__toolbar__button"
              onClick={() => changeActiveNote("next")}
              disabled={
                notes.indexOf(notes.find((n) => n.id === activeNoteId)!) ===
                notes.length - 1
              }
            >
              <svg
                className="noteEditor__toolbar__button__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.8715 15.1667L12.3382 21.7L14.0007 23.3333L23.334 14L14.0007 4.66667L12.3382 6.3L18.8715 12.8333H4.66732V15.1667H18.8715Z" />
              </svg>
            </button>
          </div>
          <div className="noteEditor__toolbar__flexFormat">
            <button
              onClick={() => formatText("formatBlock", "H1")}
              // style={{
              //   backgroundColor: activeFormats.h1 ? "#007566" : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <p
                className="noteEditor__toolbar__flexFormat__button__text"
                style={{
                  color: activeFormats.h1 ? "#0effdf" : "#007566",
                }}
              >
                H<span>1</span>
              </p>
            </button>
            <button
              onClick={() => formatText("formatBlock", "H2")}
              // style={{
              //   backgroundColor: activeFormats.h2 ? "#007566" : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <p
                className="noteEditor__toolbar__flexFormat__button__text"
                style={{
                  color: activeFormats.h2 ? "#0effdf" : "#007566",
                }}
              >
                H<span>2</span>
              </p>
            </button>
            <button
              onClick={() => formatText("formatBlock", "H3")}
              // style={{
              //   backgroundColor: activeFormats.h3 ? "#007566" : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <p
                className="noteEditor__toolbar__flexFormat__button__text"
                style={{
                  color: activeFormats.h3 ? "#0effdf" : "#007566",
                }}
              >
                H<span>3</span>
              </p>
            </button>

            <button
              onClick={() => formatText("underline")}
              // style={{
              //   backgroundColor: activeFormats.underline
              //     ? "#007566"
              //     : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <p
                className="noteEditor__toolbar__flexFormat__button__text"
                style={{
                  color: activeFormats.underline ? "#0effdf" : "#007566",
                }}
              >
                U
              </p>
            </button>

            <button
              onClick={() => formatText("bold")}
              // style={{
              //   backgroundColor: activeFormats.bold ? "#007566" : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.88086 5C4.88086 3.9 5.78086 3 6.88086 3H12.0009C14.6209 3 16.7509 5.13 16.7509 7.75C16.7509 10.37 14.6209 12.5 12.0009 12.5H4.88086V5Z"
                  stroke={activeFormats.bold ? "#0effdf" : "#007566"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.88086 12.5H14.3809C17.0009 12.5 19.1309 14.63 19.1309 17.25C19.1309 19.87 17.0009 22 14.3809 22H6.88086C5.78086 22 4.88086 21.1 4.88086 20V12.5V12.5Z"
                  stroke={activeFormats.bold ? "#0effdf" : "#007566"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => formatText("italic")}
              // style={{
              //   backgroundColor: activeFormats.italic ? "#007566" : "#031a0d",
              // }}
              className="noteEditor__toolbar__flexFormat__button"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61914 3.5H18.8691"
                  stroke={activeFormats.italic ? "#0effdf" : "#007566"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.11914 21.5H14.3691"
                  stroke={activeFormats.italic ? "#0effdf" : "#007566"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 3.5L9.75 21.5"
                  stroke={activeFormats.italic ? "#0effdf" : "#007566"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => {}}
            className="noteEditor__toolbar__button noteEditor__toolbar__button--share noteEditor__toolbar__button--stroke"
          >
            <svg
              className="noteEditor__toolbar__button__icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0217 15.7617L17.99 20.405M17.9783 7.595L10.0217 12.2383M24.5 5.83333C24.5 7.76633 22.933 9.33333 21 9.33333C19.067 9.33333 17.5 7.76633 17.5 5.83333C17.5 3.90034 19.067 2.33333 21 2.33333C22.933 2.33333 24.5 3.90034 24.5 5.83333ZM10.5 14C10.5 15.933 8.933 17.5 7 17.5C5.067 17.5 3.5 15.933 3.5 14C3.5 12.067 5.067 10.5 7 10.5C8.933 10.5 10.5 12.067 10.5 14ZM24.5 22.1667C24.5 24.0997 22.933 25.6667 21 25.6667C19.067 25.6667 17.5 24.0997 17.5 22.1667C17.5 20.2337 19.067 18.6667 21 18.6667C22.933 18.6667 24.5 20.2337 24.5 22.1667Z"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="noteEditor__toolbar__flexFirst">
            <button
              onClick={undoAction}
              className="noteEditor__toolbar__button noteEditor__toolbar__button--undo noteEditor__toolbar__button--stroke"
            >
              <svg
                className="noteEditor__toolbar__button__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31836 21.3617H17.6517C20.8717 21.3617 23.485 18.7483 23.485 15.5283C23.485 12.3083 20.8717 9.695 17.6517 9.695H4.81836"
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50229 12.6117L4.51562 9.625L7.50229 6.63833"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={redoAction}
              className="noteEditor__toolbar__button noteEditor__toolbar__button--redo noteEditor__toolbar__button--stroke"
            >
              <svg
                className="noteEditor__toolbar__button__icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6823 21.3617H10.349C7.12896 21.3617 4.51562 18.7483 4.51562 15.5283C4.51562 12.3083 7.12896 9.695 10.349 9.695H23.1823"
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.498 12.6117L23.4847 9.625L20.498 6.63833"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={saveNote}
            className="noteEditor__toolbar__button noteEditor__toolbar__button--check"
          >
            <svg
              className="noteEditor__toolbar__button__icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.1422 21L4.49219 14.35L6.15469 12.6875L11.1422 17.675L21.8464 6.97083L23.5089 8.63333L11.1422 21Z" />
            </svg>
          </button>

          <Popover.Root>
            <Popover.Trigger>
              <button
                onClick={() => {}}
                className="noteEditor__toolbar__button noteEditor__toolbar__button--more"
              >
                <svg
                  className="noteEditor__toolbar__button__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.9965 12H16.0054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9945 12H12.0035"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99451 12H8.00349"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Popover.Trigger>
            <Popover.Content>
              <div
                className="noteEditor__toolbar__popover"
                onClick={deleteActiveNote}
              >
                <svg
                  className="noteEditor__toolbar__popover__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                    fill="#FE3A3A"
                  />
                </svg>
                <p className="noteEditor__toolbar__popover__text">
                  Delete file
                </p>
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>

        {/* ContentEditable Div for the rich text editor */}
        <div
          ref={editorRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          // onInput={saveContent} // Save the content on input (typing)
          onKeyUp={checkActiveFormats}
          onMouseUp={checkActiveFormats}
          className="noteEditor__editor"
        />
      </div>
    </div>
  );
};

export default NoteEditor;
