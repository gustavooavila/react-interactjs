import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import interact from 'interact.js'

export default class Interactable extends Component {

	static defaultProps = {
		draggable: false,
		resizable: false,
		dropzone: false,
		draggableOptions: {},
		resizableOptions: {},
		dropzoneOptions: {}
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
	}
}

Interactable.propTypes = {
	children: React.PropTypes.node.isRequired,
	draggable: React.PropTypes.bool,
	draggableOptions: React.PropTypes.object,
	resizable: React.PropTypes.bool,
	resizableOptions: React.PropTypes.object,
	dropzone: React.PropTypes.bool,
	dropzoneOptions: React.PropTypes.object
}
