import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title= "título 2"

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers() {
    document.querySelectorAll(".animationHome").forEach(sectionHome => {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: sectionHome,
          // pin: true,
          // pinSpacing: false,
          start: "start 250" ,
         // end: "bottom 100",
          // markers: true,
          toggleActions: "play none none reverse"
        }
      });
      scrollBox.from(sectionHome, { y: 30, opacity: 0 });
    });
    document.querySelectorAll(".imgHome").forEach(imgHome => {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: imgHome,
          // pin: true,
          // pinSpacing: false,
          start: "bottom bottom" ,
          //end: "bottom bottom",
          // markers: true,
          toggleActions: "play none none reverse"
        }
      });
      scrollBox.from(imgHome, { y: 100, opacity: 0 });
    });
    document.querySelectorAll(".ctaHome").forEach(ctaHome => {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: ctaHome,
          // pin: true,
          // pinSpacing: false,
          start: "bottom bottom" ,
          // end: "bottom bottom",
          // markers: true,
          toggleActions: "play none none reverse"
        }
      });
      scrollBox.from(ctaHome, { y: 20, opacity: 0 });
    });
  }
}

