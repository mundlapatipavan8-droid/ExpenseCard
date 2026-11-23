function ExpenseCard({ name, category, amount, onDelete }) {
  return (
    <article>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>

      <strong>${amount.toFixed(2)}</strong>

      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </article>
  );
}

export default ExpenseCard;