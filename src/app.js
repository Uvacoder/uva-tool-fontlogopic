import { useRef, useState } from "react";
import toImage from "dom-to-image";
import download from "downloadjs";
import { getTemplate } from "./static/template";
import { Footer } from "./components/footer";
import { untag } from "./lib/untag";

export function App() {
  const [text, setText] = useState("< fontlogo >");
  const logoRef = useRef();

  const onSaveImage = () => {
    toImage
      .toBlob(logoRef.current)
      .then((blob) => {
        download(blob, `${text}.png`, "image/png");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="logo-container" style={{ minHeight: "25vh" }}>
        <div
          id="logo"
          ref={logoRef}
          dangerouslySetInnerHTML={{ __html: getTemplate(untag(text)) }}
        ></div>
      </div>
      <div>
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="my-1" onClick={onSaveImage}>
          Save Image
        </button>
      </div>
      <Footer />
    </>
  );
}
