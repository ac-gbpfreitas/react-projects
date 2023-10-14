import React, { useState } from 'React';

function TodoList() {
    const [listItems, setItems] = useState([]);
    const [item, setItem] = useState('');

    const addItem = (event) => {
        event.preventDefault();

        if (item.trim() !== '') {
            setItems([...listItems, item]);
            setItem('');
        }
    }

    const deleteItem = (index) => {
        const newItems = listItems.filter((_, i) => i !== index);
        setItems(newItems);
    }

    return (
        <article className="todo-list-component">
            <form>
                <section>
                    <input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="Type your task title"
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                    />
                    <button onClick={addItem}>
                        <span>[+]</span>
                        Add task
                    </button>
                </section>
            </form>
            <ul>
                {
                    listItems.map(
                        (item, index) => (
                            <li key={index}>
                                <a
                                    href='#'
                                    onClick={() => deleteItem(index)}
                                    >
                                    {item}
                                </a>
                            </li>
                        )
                    )
                }
                <li>
                    <a href="#">Lorem - 1</a>
                </li>
                <li>
                    <a href="#">Lorem - 2</a>
                </li>
                <li>
                    <a href="#">Lorem - 3</a>
                </li>
                <li>
                    <a href="#">Lorem - 4</a>
                </li>
            </ul>
        </article>
    );
}

export default TodoList;