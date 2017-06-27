import React from 'react';
import SVGInline from 'react-svg-inline';
import './idle-animation.css';

const InfinityAnimation = function () {
  return (<SVGInline
    svg={
      '<svg width="102px" height="102px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns:xlink="http://www.w3.org/1999/xlink" class="uil-inf"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><path id="uil-inf-path" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="#c6c7c7" stroke-width="1px" stroke-dasharray="5px"></path><circle cx="0" cy="0" r="5" fill="#b5b5b5"><animateMotion begin="0s" dur="20s" repeatCount="indefinite"><mpath xlink:href="#uil-inf-path"></mpath></animateMotion></circle><circle cx="0" cy="0" r="5" fill="#b5b5b5"><animateMotion begin="-1.6s" dur="20s" repeatCount="indefinite"><mpath xlink:href="#uil-inf-path"></mpath></animateMotion></circle><circle cx="0" cy="0" r="5" fill="#b5b5b5"><animateMotion begin="-3.2s" dur="20s" repeatCount="indefinite"><mpath xlink:href="#uil-inf-path"></mpath></animateMotion></circle><circle cx="0" cy="0" r="5" fill="#b5b5b5"><animateMotion begin="-4.8s" dur="20s" repeatCount="indefinite"><mpath xlink:href="#uil-inf-path"></mpath></animateMotion></circle><circle cx="0" cy="0" r="5" fill="#b5b5b5"><animateMotion begin="-6.4s" dur="20s" repeatCount="indefinite"><mpath xlink:href="#uil-inf-path"></mpath></animateMotion></circle></svg>'
    }
  />);
};

export default function IdleAnimation() {
  return (
    <center className={'idle-animation'}>
      <InfinityAnimation />
      <p>Idle: Awaiting Input</p>
    </center>
  );
}