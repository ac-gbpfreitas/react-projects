import { useState } from 'react';

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

    const addItemByEnter = (event) => {
        if (event.key === 'Enter') {
            addItem(event)
        }
    }

    const deleteItem = (index) => {
        const newItems = listItems.filter((_, i) => i !== index);
        setItems(newItems);
    }

    return (
        <article className="todo-list-component">
            <h2>Todo List</h2>
            <section className='section-content'>
                <form>
                    <section className='input-elements'>
                        <input
                            type="text"
                            name="item"
                            id="item"
                            placeholder="Type your task title"
                            value={item}
                            onChange={(event) => setItem(event.target.value)}
                            onKeyDown={(event) => addItemByEnter(event.target.value)}
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
                </ul>
            </section>
        </article>
    );
}

export default TodoList;