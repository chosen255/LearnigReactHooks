export const useInput = (initialValue, validator) => {
  const [value, setVelue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setVelue(value);
    }
  };
  return { value, onChange };
};
