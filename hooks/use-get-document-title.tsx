import {useState, useEffect} from 'react';

function useGetDocumentTitle() {
  const [documentTitle, setDocumentTitle] = useState('');

  useEffect(() => {
    setDocumentTitle(document.title);
  }, []);

  return documentTitle;
}

export default useGetDocumentTitle;