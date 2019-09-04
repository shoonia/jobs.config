import { h } from 'preact';

function Item({ data, remove, clone }) {
  return (
    <li
    >
      <div>
        <div>
          <button
            value={data.id}
            onClick={remove}
          >
            x
          </button>
          <button
            value={data.id}
            onClick={clone}
          >
            clone
          </button>
        </div>
      </div>
    </li>
  );
}

export default Item;
