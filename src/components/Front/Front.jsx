import React from "react";

export default function Front() {
  return (
    <div
      className="Front"
      dangerouslySetInnerHTML={{
        __html: `
        <link href='https://fonts.googleapis.com/css?family=Cabin+Condensed:700' rel='stylesheet' type='text/css'>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="480px" height="240px" xml:space="preserve">
          <defs>
            <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
              <path fill="ligthblue" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
            </pattern>
            
            <text id="text" transform="translate(2,116)" font-family="'Cabin Condensed'" font-size="161.047">VISSCO</text>
            
            <mask id="text-mask">
              <use x="0" y="0" xlink:href="#text" opacity="1" fill="lightblue"/>
            </mask>
            
            <g id="eff">
              <use x="0" y="0" xlink:href="#text" fill="lightblue"/>
          
          <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" x="-300" y="50" width="1200" height="120" opacity="0.3">
            <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="2s"/>
          </rect>
           <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="45" width="1600" height="120" opacity="0.3">
            <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="3s"/>
          </rect>
              
          <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="55" width="800" height="120" opacity="0.3">
            <animate attributeType="xml" attributeName="x" from="-200" to="0" repeatCount="indefinite" dur="1.4s"/>
          </rect>
              <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="55" width="2000" height="120" opacity="0.3">
            <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="2.8s"/>
          </rect>s
            </g>
          </defs>
            <use xlink:href="#eff" opacity="0.9" style="mix-blend-mode:normal"/>
        </svg>`,
      }}
    ></div>
  );
}
