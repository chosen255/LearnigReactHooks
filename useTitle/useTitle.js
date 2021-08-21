export const useTitle = (initiolTitle) => {
  const [title, setTitle] = useState(initiolTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
