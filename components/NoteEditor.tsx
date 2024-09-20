import React, { useRef, useState, useEffect } from "react";
import "../styles/components/NoteEditor.scss";
import "../styles/pages/Notes.scss";
import Image from "next/image";
import pencil from "../assets/svgs/edit-2.svg";

const NoteEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>("");
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    h1: false,
    h2: false,
    h3: false,
  });

  // Load content from localStorage when the component mounts
  //   useEffect(() => {
  //     const savedContent = localStorage.getItem("editorContent");
  //     if (savedContent) {
  //       setContent(savedContent);
  //       if (editorRef.current) {
  //         editorRef.current.innerHTML = savedContent;
  //       }
  //     }
  //   }, []);

  // Save content to localStorage when content changes
  //   const saveContent = () => {
  //     if (editorRef.current) {
  //       const content = editorRef.current.innerHTML;
  //       setContent(content);
  //       localStorage.setItem("editorContent", content);
  //     }
  //   };

  // Handle formatting actions (bold, italic, underline, headings)
  const formatText = (command: string, value: string | undefined = "") => {
    document.execCommand(command, false, value);
    // saveContent(); // Save the content whenever a format action is executed
    checkActiveFormats(); // Update active button styles
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
      <div className="notes__wrapper__left">
        <button className="notes__wrapper__left__button">
          Make a new note
        </button>
        <div className="notes__wrapper__left__stack">
          <div className="notes__wrapper__left__stack__note">
            <div className="notes__wrapper__left__stack__note__top">
              <p className="notes__wrapper__left__stack__note__top__text">
                wstETH/ETH
              </p>

              <svg
                className="notes__wrapper__left__stack__note__top__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <p className="notes__wrapper__left__stack__note__details">
              What this basically entails is...
            </p>
          </div>
        </div>
      </div>

      <div className="noteEditor">
        {/* Toolbar for text formatting */}
        <div className="noteEditor__toolbar">
          <div className="noteEditor__toolbar__flexFirst">
            <button onClick={() => {}} className="noteEditor__toolbar__button">
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
            <button onClick={() => {}} className="noteEditor__toolbar__button">
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
              style={{
                backgroundColor: activeFormats.h1 ? "#007566" : "#031a0d",
              }}
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
              style={{
                backgroundColor: activeFormats.h2 ? "#007566" : "#031a0d",
              }}
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
              style={{
                backgroundColor: activeFormats.h3 ? "#007566" : "#031a0d",
              }}
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
              onClick={() => formatText("bold")}
              style={{
                backgroundColor: activeFormats.bold ? "#007566" : "#031a0d",
              }}
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
              style={{
                backgroundColor: activeFormats.italic ? "#007566" : "#031a0d",
              }}
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

            {/* <button
            onClick={() => formatText("underline")}
            style={{
              ...buttonStyle,
              backgroundColor: activeFormats.underline ? "#555" : "#444",
            }}
          >
            Underline
          </button> */}
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
            onClick={() => {}}
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
