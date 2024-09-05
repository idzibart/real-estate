import { createContext, useEffect, useState } from "react";
import { CloudinaryScriptContextType, UploadWidgetProps } from "../lib/types";

const defaultCloudinaryScriptContext: CloudinaryScriptContextType = {
  loaded: false,
};

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext<CloudinaryScriptContextType>(
  defaultCloudinaryScriptContext,
);

function UploadWidget({ uwConfig, setPublicId }: UploadWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded && window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
          }
        },
      );

      const uploadButton = document.getElementById("upload_widget");
      if (uploadButton) {
        uploadButton.addEventListener(
          "click",
          function () {
            myWidget.open();
          },
          false,
        );
      }
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
