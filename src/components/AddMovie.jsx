import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <form>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input name="director" placeholder="Director" value={formData.director} onChange={handleChange} />
        <select name="genre" value={formData.genre} onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={formData.releaseYear} onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" value={formData.synopsis} onChange={handleChange}></textarea>
        <input type="url" name="posterUrl" placeholder="Poster Image URL" value={formData.posterUrl} onChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default AddMovie;
