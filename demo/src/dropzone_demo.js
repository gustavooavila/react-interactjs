import React from 'react'
import Interactive from '../../src/Interactable'

const dropzoneOptions = {
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
      dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
}

const draggableOptions = {
  inertia: true,
  restrict: {
    restriction: "parent",
    endOnly: true,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  autoScroll: true,
  onmove: event => {
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  },
}

const DropzoneDemo = () => (
  <div>
    <Interactive draggable={draggableOptions} >
      <div id="no-drop" className="drag-drop">
        #no-drop
      </div>
    </Interactive>
    <Interactive draggable={draggableOptions} >
      <div id="yes-drop" className="drag-drop">
        #yes-drop
       </div>
    </Interactive>

    <Interactive dropzone={dropzoneOptions} >
      <div id="outer-dropzone" className="dropzone">
        #outer-dropzone
        <Interactive dropzone={dropzoneOptions} >
          <div id="inner-dropzone" className="dropzone">
            #inner-dropzone
           </div>
        </Interactive>
      </div>
    </Interactive>
  </div>
)

export default DropzoneDemo