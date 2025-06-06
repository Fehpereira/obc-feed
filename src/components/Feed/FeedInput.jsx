const FeedInput = ({ id, type, value, onChange, ref, ...props }) => {
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input
        ref={ref}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default FeedInput;
