import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";

const Uuid = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false); // To track if the link is copied

  const fetchData = () => {
    try {
      setLoading(true);
      if (inputValue.trim() !== "") {
        // Generate a unique uuid
        const uuidShortened = uuidv4();
        setShortenLink(`http://localhost/${uuidShortened}`); // Correct URL format
      } else {
        setError("Please provide a valid URL.");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste your URL here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {shortenLink && (
        <div>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button>{copied ? "Copied!" : "Copy to Clipboard"}</button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Uuid;
