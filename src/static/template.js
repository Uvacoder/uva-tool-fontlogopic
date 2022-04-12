export const getTemplate = (text) => `<div>
    <link rel="preconnect" crossorigin="anonymous" href="https://fonts.googleapis.com">
    <link rel="preconnect" crossorigin="anonymous" href="https://fonts.gstatic.com">
    <link crossorigin="anonymous" href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      #logo-text{
        font-size: 5.052rem;
        font-family: "Dosis";
        line-height:1.5;
        letter-spacing: 0.25em;
        width: fit-content;
        text-align:center;
        padding: 10px;
        display: block;
        color:var(--text);
        background: transparent;
      }
    </style>
    <div id="logo-text">${text}</div>
  </div>`;
