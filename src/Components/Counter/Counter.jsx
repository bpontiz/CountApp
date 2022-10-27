import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function onAdd() {
        setCount(count + 1);
    };

    function onDelete() {
        setCount(count - 1);
    };

    return <>
        <section className='sectionCounter'>
            <h3>Counter</h3>
            <strong className='strongCount'>{count}</strong>
            <br />
            <div className="divButtons">
                <button onClick={onAdd}>Add</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </section>
    </>
};

export default Counter;

