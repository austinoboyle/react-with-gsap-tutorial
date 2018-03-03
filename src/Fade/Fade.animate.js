import {TweenMax} from 'gsap';

const animations = {
    enter(el, duration) {
        TweenMax.to(
            el,
            duration,
            {opacity: 1}
        );
    },
    exit(el, duration) {
        TweenMax.to(
            el,
            duration,
            {opacity: 0}
        );
    }
};

export default animations;