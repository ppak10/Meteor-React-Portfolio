// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for Redux posts
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Posts Component ------------------------------------------------------------
class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}
      </ul>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Posts
// ----------------------------------------------------------------------------
