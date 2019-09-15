import { h } from 'preact';

import st from './styles.css';

function CreateButton({ onClick, disabled }) {
  return (
    <div className={st.section}>
      <button
        type="button"
        onClick={onClick}
        className={st.btn}
        disabled={disabled}
        title="You can configure up to 20 jobs."
      >
        + New
      </button>
    </div>
  );
}

export default CreateButton;
