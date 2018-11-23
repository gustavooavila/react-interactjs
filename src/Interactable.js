import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import interact from 'interact.js'

export default class Interactable extends Component {

	static defaultProps = {
		draggable: false,
		resizable: false,
		dropzone: false,
		gesturable: false,
		draggableOptions: {},
		resizableOptions: {},
		dropzoneOptions: {},
		gesturableOptions: {},
	}

	render() {
		return cloneElement(this.props.children, {
			ref: node => this.node = node,
			draggable: false
		})
	}

	componentDidMount() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
	}

	componentWillReceiveProps() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
	}

	setInteractions() {
		if (this.props.draggable) this.interact.draggable(this.props.draggableOptions)
		if (this.props.resizable) this.interact.resizable(this.props.resizableOptions)
		if (this.props.dropzone) this.interact.dropzone(this.props.dropzoneOptions)
		if (this.props.gesturable) this.interact.gesturable(this.props.gesturableOptions)

		if (this.props.tap) this.interact.on('tap', this.props.tap)
		if (this.props.hold) this.interact.on('hold', this.props.hold)
		if (this.props.doubleTap) this.interact.on('doubletap', this.props.doubleTap)
		if (this.props.resizemove) this.interact.on('resizemove', this.props.resizeMove)
	}
}

Interactable.propTypes = {
	children: React.PropTypes.node.isRequired,

	draggable: React.PropTypes.bool,
	resizable: React.PropTypes.bool,
	dropzone: React.PropTypes.bool,
	gesturable: React.PropTypes.bool,

	draggableOptions: React.PropTypes.object,
	resizableOptions: React.PropTypes.object,
	dropzoneOptions: React.PropTypes.object,
	gesturableOptions: React.PropTypes.object,

	tap: React.PropTypes.func,
	hold: React.PropTypes.func,
	doubleTap: React.PropTypes.func,
	resizeMove: React.PropTypes.func
}
