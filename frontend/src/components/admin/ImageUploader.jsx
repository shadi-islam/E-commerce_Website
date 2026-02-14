import { useEffect, useMemo, useState } from "react";
import "./ImageUploader.css";

export default function ImageUploader({ onChange, multiple = true, label = "Upload Images" }) {
  const [files, setFiles] = useState([]);

  const previews = useMemo(
    () =>
      files.map((file) => ({
        name: file.name,
        size: Math.ceil(file.size / 1024),
        url: URL.createObjectURL(file),
      })),
    [files]
  );

  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [previews]);

  const handleSelect = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    onChange?.(selectedFiles);
  };

  const removePreview = (name) => {
    const nextFiles = files.filter((file) => file.name !== name);
    setFiles(nextFiles);
    onChange?.(nextFiles);
  };

  return (
    <section className="imageuploader">
      <label className="imageuploader-field">
        <span>{label}</span>
        <input type="file" accept="image/*" multiple={multiple} onChange={handleSelect} />
      </label>

      {previews.length > 0 && (
        <div className="imageuploader-grid">
          {previews.map((preview) => (
            <article key={preview.url} className="image-card">
              <img src={preview.url} alt={preview.name} />
              <div className="image-meta">
                <p>{preview.name}</p>
                <small>{preview.size} KB</small>
              </div>
              <button type="button" onClick={() => removePreview(preview.name)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
