import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Layout.css';
import LayoutParticles from "./LayoutParticles";

import {BG_GRADIENT, BG_WHITE} from '../constants';
import LayoutOverlay from "./LayoutOverlay";

class Layout extends Component {
  getClasses() {
    if (this.props.bg === BG_GRADIENT) {
      return 'layout_bg_gradient';
    }
    else if (this.props.bg === BG_WHITE) {
      return 'layout_bg_white';
    }

    return '';
  }

  getContentClasses() {
    return 'layout__content_centered';
  }

  render() {
    return <div className={ `layout ${this.getClasses()}` }>
      {this.props.particles ? <LayoutParticles {...this.props.particlesProps} /> : null}
      <LayoutOverlay />
      <div className={`layout__content ${this.getContentClasses()}`}>
        { this.props.children }
      </div>
    </div>;
  }
}

Layout.defaultProps = {
  particles: false,
  particlesProps: {},
  bg: BG_GRADIENT,
  overlay: true,
};

Layout.propTypes = {
  particles: PropTypes.bool,
  particlesProps: PropTypes.object,
  bg: PropTypes.oneOf([BG_GRADIENT, BG_WHITE]),
  overlay: PropTypes.bool,
};

export default Layout;