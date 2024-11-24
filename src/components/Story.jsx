import React from "react";
import AnimatedTitle from "./ANimatedTitle";
import RoundedCorners from "./RoundedCorners";
import gsap from "gsap";
import Button from "./Button";

const Story = () => {
  const frameRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };
  return (
    <div className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col pb-24 py-10 size-full">
        <p className="font-general text-sm uppercase md:text-[10px] ">The Multiversal ip world</p>
        <div className="relative size-full">
          <AnimatedTitle
            sectionId="#story"
            containerClass="pointer-events-none mt-5 mix-blend-difference relative z-10 "
            title="the st<b>o</b>ry of <br />a hidden real<b>m</b>"          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="Entrance"
                  className="object-contain"
                  ref={frameRef}
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and
              shape your fate amidst infinite opportunities.
            </p>

            <Button id="realm-btn" title="discover prologue" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
