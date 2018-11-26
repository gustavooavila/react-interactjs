import React from 'react'
import Interactive from '../../src/Interactable'

const draggableOptions = {
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
	}
}
const DraggableDemo = () => (
	<Interactive draggable={draggableOptions}>
		<div id="drag-1" className="draggable">
			<p> You can drag one element </p>
		</div>
	</Interactive>
)

export default DraggableDemo;