import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/videoPlayer.css";
import { videoData } from "../AdditionalData/videoData";
import "../css/bootstrap-imports.css"

function VideoPlayer() {
  const { course } = useParams();
  const data = videoData[course] || {};

  if (!data.mainVideo) {
    return <h2>Video not found</h2>;
  }

  function saveNotes() {
    const notesInput = document.getElementById("notes-input");
    const notesList = document.getElementById("notes-list");

    if (notesInput.value.trim() !== "") {
      const noteText = notesInput.value;
      const li = document.createElement("li");

      const noteSpan = document.createElement("span");
      noteSpan.textContent = noteText;

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";

      const editButton = document.createElement("button");
      editButton.className = "edit-btn";
      editButton.innerHTML = '<i class="bi bi-pencil"></i>';
      editButton.onclick = function () {
        notesInput.value = noteText;
        li.remove();
        removeNoteFromStorage(noteText);
      };

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
      deleteButton.onclick = function () {
        li.remove();
        removeNoteFromStorage(noteText);
      };

      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);

      li.appendChild(noteSpan);
      li.appendChild(buttonContainer);
      notesList.appendChild(li);

      let savedNotes = JSON.parse(localStorage.getItem(`${course}Notes`)) || [];
      savedNotes.push(noteText);
      localStorage.setItem(`${course}Notes`, JSON.stringify(savedNotes));

      notesInput.value = "";
    }
  }

  function removeNoteFromStorage(noteText) {
    let savedNotes = JSON.parse(localStorage.getItem(`${course}Notes`)) || [];
    savedNotes = savedNotes.filter((note) => note !== noteText);
    localStorage.setItem(`${course}Notes`, JSON.stringify(savedNotes));
  }

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(`${course}Notes`)) || [];
    const notesList = document.getElementById("notes-list");
    savedNotes.forEach((note) => {
      const li = document.createElement("li");

      const noteSpan = document.createElement("span");
      noteSpan.textContent = note;

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";

      const editButton = document.createElement("button");
      editButton.className = "edit-btn";
      editButton.innerHTML = '<i class="bi bi-pencil"></i>';
      editButton.onclick = function () {
        document.getElementById("notes-input").value = note;
        li.remove();
        removeNoteFromStorage(note);
      };

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
      deleteButton.onclick = function () {
        li.remove();
        removeNoteFromStorage(note);
      };

      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);

      li.appendChild(noteSpan);
      li.appendChild(buttonContainer);
      notesList.appendChild(li);
    });
  }, [course]);

  return (
    <>
      <section className="top">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/tbqn0jG/logo.png"
                alt="logo"
                className="logo-image"
              />
            </a>
          </div>
        </nav>
      </section>

      <div className="video-layout">
        <div className="video-container">
          <div className="ratio ratio-16x9">
            <iframe
              width="884"
              height="497"
              src={data.mainVideo.url}
              title={data.mainVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-details">
            <h3>{data.mainVideo.title}</h3>
            <p>{data.mainVideo.author}</p>
            <p>{data.mainVideo.date}</p>
          </div>
        </div>

        <div className="sidebar">
          <h5 className="notes-heading">Notes</h5>
          <div className="notes-section">
            <textarea
              id="notes-input"
              placeholder="Write your notes here..."
            ></textarea>
            <button className="save-notes-btn" onClick={saveNotes}>
              Save Notes
            </button>
            <h6>Saved Notes:</h6>
            <ul id="notes-list" className="notes-list"></ul>
          </div>

          <h5>Related Videos</h5>
          <ul className="related-videos">
            {data.relatedVideos &&
              data.relatedVideos.map((video, index) => (
                <li key={index}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail for ${video.title}`}
                    />
                    {video.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <section id="resource-library" className="resource-library-section">
        <div className="container">
          <h2>Related Content</h2>
          <div className="row">
            {data.relatedContent &&
              data.relatedContent.map((content, index) => (
                <div className="col-md-4" key={index}>
                  <div className="resource-card">
                    <i className="fas fa-book"></i>
                    <h3>{content.title}</h3>
                    <p>{content.description}</p>
                    <a
                      href={content.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <footer>
        <p className="copyright-text">© StudyFlix India</p>
      </footer>
    </>
  );
}

export default VideoPlayer;
