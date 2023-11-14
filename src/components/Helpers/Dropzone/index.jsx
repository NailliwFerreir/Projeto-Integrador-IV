import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "./components/ImageIcon";

export default function Dropzone({
  className,
  limitFiles = 5,
  acceptType = "image/*",
  filesInserted = () => {},
}) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  useEffect(() => {
    filesInserted(files.map((file) => file.preview));
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { type: [] },
  });

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
        <div
          {...getRootProps({
            className:
              "input-item h-[100px] border border-[#EDEDED] text-sm text-qgraytwo px-5  text-center flex items-center justify-center mb-5",
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Solte os arquivos aqui...</p>
          ) : (
            <p>
              Arraste e solte os arquivos aqui, ou clique para selecioná-los
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
