export default function GroceryList({ id, title, handleDelete }) {
  return (
    <div>
      <ul>
        <li>
          {id} - {title} -
          <button onClick={() => handleDelete(id)}>DELETE</button>
        </li>
      </ul>
    </div>
  );
}
