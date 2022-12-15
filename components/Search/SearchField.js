export default function SearchField({ value, setValue, handleKeydown }) {
  return (
    <div>
      <input
        placeholder="Search for resources"
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={handleKeydown}
      ></input>
    </div>
  );
}
