"use client";

import React from "react";
import "../../../styles/pages/Notes.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";
import NoteEditor from "../../../components/NoteEditor";

const handleSaveNote = (content: string) => {
  console.log("content", content);
};

const Notes = () => {
  return (
    <div className="notes">
      <Header type="dashboard" />
      <div className="notes__top">
        <p className="notes__top__notes">Notes</p>
        <p className="notes__top__heading">
          Never miss a trade idea, note or info
        </p>
      </div>

      <NoteEditor />

      <TabNavigation />
    </div>
  );
};

export default Notes;
