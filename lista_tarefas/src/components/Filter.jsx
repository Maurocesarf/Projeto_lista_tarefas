const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Tudo</option>
                    <option value="Completed">Finalizadas</option>
                    <option value="Incomplete">Em aberto</option>
                </select>
            </div>
        </div>

    </div>
  )
}

export default Filter