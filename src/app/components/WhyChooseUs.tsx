"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
// import Image from "next/image";

const content = [
    {
      title: "Impact of Smartphones on Social Interactions",
      description:
        "This study explores how the pervasive use of smartphones affects face-to-face social interactions, focusing on both positive and negative impacts, including increased connectivity and potential distractions.",
     
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
     
    },
    {
      title: "Evolution of Mobile Communication",
      description:
        "An overview of the evolution of mobile communication technologies, from the early days of mobile phones to the current era of smartphones, highlighting key technological advancements and their influence on communication habits.",
     
    },
    {
      title: "Smartphones and Mental Health",
      description:
        "This research examines the relationship between smartphone usage and mental health, investigating issues such as addiction, anxiety, and depression, as well as the potential benefits of mobile health applications.",
      
    },
    {
        title: "Digital Etiquette in the Age of Smartphones",
        description:
          "A guide to digital etiquette, addressing the norms and expectations for smartphone use in various social settings, including meetings, public spaces, and family gatherings.",
        
      },
      
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs
