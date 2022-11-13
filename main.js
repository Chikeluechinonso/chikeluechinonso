var DEFAULT_PARTICLE = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#00FFFF',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ffff',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split('&').forEach(function(part) {
        var item = part.split('=');
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}

var decoded = getJsonFromUrl();

setTimeout(() => {
  const preloader = document.getElementById('preloader');

  // 👇️ removes element from DOM
  preloader.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 5000); // 👈️ time in milliseconds

// background setup
var backgroundColor = decoded.backgroundColor || '000';
document.getElementById('particles-js').style.backgroundColor =
    '#' + backgroundColor;

// particle setup
var particlesFromUrl = decoded.particles ? JSON.parse(decoded.particles) : {};
var particlesConfig = deepmerge(DEFAULT_PARTICLE, particlesFromUrl);
particlesJS('particles-js', particlesConfig);
