import { Directive } from '@angular/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

@Directive({
  selector: '[animationHome]'
})
export class AnimationDirective {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.startAnimation();
  }

  startAnimation() { gsap
      .timeline({
        scrollTrigger: {
          trigger: '.section-home',
          markers: true
          toggleActions: 'reset none play none'
        }
      })
      .to('.rm-home__games--sticky', {
        autoAlpha: 0,
        duration: 0.3
      })
      .set('.rm-home__games--sticky', {
        y: 0
      })
  }
}
