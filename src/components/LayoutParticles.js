import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './LayoutParticles.css';
import './../../node_modules/particles.js/particles';

class LayoutParticles extends Component {
  componentDidMount() {
    this.start();
  }

  componentWillUnMount() {
    this.stop();
  }

  getId() {
    if (!this.id) {
      this.id = `particles${Math.floor(Math.random() * 100000)}`;
    }
    return this.id;
  }

  render() {
    return <div
      className="layout-particles"
      id={ this.getId() }>
    </div>;
  }

  start() {
    if (typeof window.particlesJS !== 'function') {
      return;
    }

    window.particlesJS(this.getId(), {
      "id": this.getId(),
      "particles": {
        "number": {"value": 60, "density": {"enable": true, "value_area": 800}},
        "color": {"value": this.props.color},
        "shape": {
          "type": this.props.shape,
          "stroke": {"width": 0, "color": this.props.color},
          "polygon": {"nb_sides": 5}
        },
        "opacity": {
          "value": 0.4,
          "random": false,
          "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": true, "distance": 150, "color": this.props.colorLines, "opacity": 0.4, "width": 1},
        "move": {
          "enable": true,
          "speed": this.props.speedMove,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {"enable": false, "mode": "repulse"},
          "onclick": {"enable": false, "mode": "push"},
          "resize": true
        },
        "modes": {
          "grab": {"distance": 400, "line_linked": {"opacity": 1}},
          "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
          "repulse": {"distance": 200, "duration": 0.4},
          "push": {"particles_nb": 4},
          "remove": {"particles_nb": 2}
        }
      },
      "retina_detect": true
    });
  }

  stop() {
    if (typeof window.particlesJS === 'function' && typeof window.pJSDom !== 'undefined') {
      window.pJSDom.forEach((el) => {
        if (el.pJS.id === this.getId()) {
          el.pJS.fn.vendors.destroypJS();
        }
      });
    }

    this.id = null;
  }
}

LayoutParticles.defaultProps = {
  color: '#fff',
  colorLines: '#fff',
  speedMove: 5,
  shape: 'circle',
};

LayoutParticles.propTypes = {
  color: PropTypes.string,
  colorLines: PropTypes.string,
  speedMove: PropTypes.number,
  shape: PropTypes.oneOf(['circle', 'edge', 'triangle', 'polygon', 'star',]),
};

export default LayoutParticles;