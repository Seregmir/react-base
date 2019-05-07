import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const base = (
    <div>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
        <ul>
            <li>item #1</li>
            <li>item #2</li>
        </ul>
        <ol>
            <li>item #1</li>
            <li>item #2</li>
        </ol>
        <input type="text"/>
        <input type="radio" name="test"/>
        <label for="test">Test radio</label>
        <select name="test1" id="test1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
        </select>
        <input type="checkbox" name="test2"/>
        <label htmlFor="test2">Test radio</label>
    </div>
);

ReactDOM.render(
    base,
    document.getElementById('root')
);