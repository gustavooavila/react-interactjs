import React from 'react'
import Interactive from '../../src/Interactable'

const draggableOptions = {
    onmove: (event) => {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    },
    restrict: {
        restriction: 'parent',
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    }
}

const resizableOptions = {
    // resize from all edges and corners
    edges: { left: true, right: true, top: true, bottom: true },

    // keep the edges inside the parent
    restrictEdges: {
        outer: 'parent',
        endOnly: true,
    },

    // minimum size
    restrictSize: {
        min: { width: 50, height: 50 },
    },

    inertia: true,
}

const resizemove = (event) => {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
};


const DraggableDemo = () => (
    <Interactive draggable={draggableOptions} resizable={resizableOptions} resizeMove={resizemove} >
        <div className="resize-drag">
            Resize from any edge or corner
        </div>
    </Interactive>
)

export default DraggableDemo;
