import React from 'react'
import { render } from 'react-dom'

import DraggableDemo from './draggable_demo';
import DraggableResize from './resizable_demo';

const example = (
    <div>
        <h2>Draggable</h2>
        <DraggableDemo />
        <DraggableResize />
    </div>
)

render(example, document.getElementById('container'));