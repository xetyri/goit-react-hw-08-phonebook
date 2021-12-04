import s from './Filter.module.css'

function Filter({ value, onChange }) {
  return (
    <label className={s.elem}>
    <input
      type="text"
      name="filter"
      placeholder="Enter name to search contact"
      value={value}
      onChange={onChange}
    />
    </label>
  );
}

export default Filter;
