import React from 'react'
import { render } from 'react-dom'

import DraggableDemo from './draggable_demo';
import DraggableResize from './resizable_demo';
import DropzoneDemo from './dropzone_demo';

const example = (
    <div>
        <h2>Draggable</h2>
        <DraggableDemo />
        <DraggableResize />
        <DropzoneDemo />
    </div>
)

render(example, document.getElementById('container'));