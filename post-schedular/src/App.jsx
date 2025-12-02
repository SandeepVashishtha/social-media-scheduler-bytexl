import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="appContainer" class="min-h-screen">
            <div class="header">
                <h1>Social Media Scheduler</h1>
                <p>Plan and schedule your social media content in one place</p>
            </div>

            <div class="content-container">
                
                <div class="form-container">
                    <h2>Create Post</h2>
                    <div class="post-form">
                        <h3>Create New Post</h3>

                        <form id="postForm">
                            <div class="form-group">
                                <label for="postTitle">Title</label>
                                <input
                                    type="text"
                                    id="postTitle"
                                    placeholder="Enter post title"
                                    class="input-field"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <label for="postContent">Content</label>
                                <textarea
                                    id="postContent"
                                    placeholder="What's on your mind?"
                                    rows="4"
                                    class="input-field"
                                    required
                                ></textarea>
                            </div>

                            <div class="form-group">
                                <label for="postImage">Image (optional)</label>
                                <div class="image-upload-container">
                                    <div
                                        id="imagePreview"
                                        class="image-preview"
                                    ></div>
                                    <div class="upload-button-container">
                                        <label
                                            for="imageUpload"
                                            class="upload-button"
                                        >
                                            <i
                                                class="fas fa-cloud-upload-alt"
                                            ></i>
                                            Upload Image
                                        </label>
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            accept="image/*"
                                            hidden
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Platforms</label>
                                <div id="platforms" class="platform-selector">
                                    <button
                                        type="button"
                                        class="platform-button"
                                        data-platform="twitter"
                                    >
                                        <i class="fab fa-twitter"></i> Twitter/X
                                    </button>
                                    <button
                                        type="button"
                                        class="platform-button"
                                        data-platform="facebook"
                                    >
                                        <i class="fab fa-facebook-f"></i>
                                        Facebook
                                    </button>
                                    <button
                                        type="button"
                                        class="platform-button"
                                        data-platform="instagram"
                                    >
                                        <i class="fab fa-instagram"></i>
                                        Instagram
                                    </button>
                                    <button
                                        type="button"
                                        class="platform-button"
                                        data-platform="linkedin"
                                    >
                                        <i class="fab fa-linkedin-in"></i>
                                        LinkedIn
                                    </button>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Schedule Date & Time</label>
                                <div class="date-time-container">
                                    <div class="date-input-container">
                                        <label
                                            for="scheduleDate"
                                            class="input-label"
                                            >Date</label
                                        >
                                        <input
                                            type="date"
                                            id="scheduleDate"
                                            class="input-field"
                                            required
                                        />
                                    </div>
                                    <div class="time-input-container">
                                        <label
                                            for="scheduleTime"
                                            class="input-label"
                                            >Time</label
                                        >
                                        <input
                                            type="time"
                                            id="scheduleTime"
                                            class="input-field"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="schedule-button">
                                Schedule Post
                            </button>
                        </form>
                    </div>
                </div>

                <div class="posts-container">
                    <h2>Scheduled Posts</h2>
                    <div class="posts-list-container">
                        <div id="postsList" class="posts-list"></div>
                        <div id="emptyPostsMessage" class="empty-posts-message">
                            No posts scheduled. Create your first post!
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default App
