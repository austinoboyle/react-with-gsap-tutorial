import {TweenMax} from 'gsap'

export const DURATION=0.5;

const animations = {
    show(el, duration=DURATION) {
        TweenMax.to(
            el,
            duration,
            {opacity: 1}
        );
    },
    hide(el, duration=DURATION) {
        TweenMax.to(
            el,
            duration,
            {opacity: 0}
        )
    }
}

export default animations;