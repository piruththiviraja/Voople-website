import Reveal from "../components/animation/Reveal";

export default function AboutUs() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="about-us">
      <Reveal>
        <div className="space-y-16">
          
          {/* Section 1 */}
          <div className="about-section-1">
            <h2 className="text-4xl font-serif mb-6 text-red-600">
              About Us
            </h2>
            <p className="text-brand-muted max-w-6xl">
              {/* Replace this content */}
                VOOPLE.IN WAS FOUNDED IN 2015 WITH A CLEAR BELIEF:
                ENDURING BUSINESSES ARE NOT BUILT BY CHANCE, BUT BY INTENTION.
                IN AN ERA DEFINED BY SPEED AND DISRUPTION, I ENVISIONED VOOPLE.IN AS A BRAND THAT VALUES CLARITY OVER NOISE, STRATEGY OVER SHORTCUTS, AND LONG-TERM IMPACT OVER SHORT-TERM SUCCESS. WHAT BEGAN AS A FOCUSED BRANDING INITIATIVE HAS SINCE EVOLVED INTO A DIVERSIFIED ORGANIZATION DELIVERING INTEGRATED SOLUTIONS ACROSS BRANDING, TECHNOLOGY, DIGITAL GROWTH, TALENT, AND STRATEGY.
                AT VOOPLE.IN, WE DO NOT PURSUE SCALE FOR THE SAKE OF NUMBERS. WE PURSUE EXCELLENCE THROUGH THOUGHTFUL EXECUTION.
                EVERY BRAND WE SHAPE, EVERY SYSTEM WE ENGINEER, AND EVERY TEAM WE ENABLE IS APPROACHED WITH PRECISION, ACCOUNTABILITY, AND RESPECT FOR THE CLIENT'S LARGER VISION.
                OUR WORK IS DRIVEN BY ONE PRINCIPLE:
                SOLUTIONS MUST SERVE PURPOSE, AND PURPOSE MUST DRIVE GROWTH.
                I AM DEEPLY GRATEFUL TO OUR CLIENTS, PARTNERS, AND TEAM MEMBERS WHO SHARE THIS COMMITMENT TO QUALITY AND INTEGRITY. TOGETHER, WE CONTINUE TO BUILD ORGANIZATIONS THAT ARE NOT ONLY SUCCESSFUL, BUT RESILIENT, RELEVANT, AND FUTURE-READY.
                AS WE LOOK AHEAD, VOOPLE REMAINS DEDICATED TO PARTNERING WITH BUSINESSES THAT VALUE SUBSTANCE, SOPHISTICATION, AND STRATEGIC DEPTH.
            </p>
          </div>

          {/* Section 2 */}
          {/* <div className="about-section-2">
            <h2 className="text-4xl font-serif mb-6 text-red-600">
              Our Story
            </h2>
            <p className="text-brand-muted max-w-3xl">
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div> */}

        </div>
      </Reveal>
    </section>
  );
}
