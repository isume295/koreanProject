'use client';
import JoditEditor from 'jodit-react';
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';


const MarkDown = ({editorConatinerStyles}:{editorConatinerStyles?:string}) => {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };

  return (
    <div className={editorConatinerStyles}>
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
  );
};

export default MarkDown;
