import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "./components/ImageIcon";

export default function Dropzone({ className, limitFiles = 5 }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const hadleRemoveFile = (file) => {
    setFiles((previousFiles) => previousFiles.filter((f) => f !== file));
  };

  if (files.length > limitFiles) {
    alert("Limite de imagens atingido");
    setFiles((previousFiles) => previousFiles.slice(0, limitFiles));
  }

  return (
    <>
      {!(limitFiles == files.length) && (
        <div {...getRootProps({ className: className })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Solte as imagens aqui...</p>
          ) : (
            <p>
              Arraste e solte algumas imagens aqui, ou click para selecionar as
              imagens
            </p>
          )}
        </div>
      )}
      <div>
        {/* Preview*/}
        <div className="flex justify-center gap-4 flex-wrap">
          {files.map((file) => (
            <ImageIcon
              key={file.name}
              file={file}
              onClick={() => hadleRemoveFile(file)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
