import Reveal from "../components/animation/Reveal";

export default function VisionMission() {
return (
<section className="py-24 px-6 bg-brand-surface">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
<Reveal>
<div>
<h3 className="text-3xl font-serif text-brand-primary">Vision</h3>
<p className="mt-4 text-brand-muted">
To build a powerful technology and talent ecosystem connecting emerging technologies with future-ready professionals.
</p>
</div>
</Reveal>
<Reveal>
<div>
<h3 className="text-3xl font-serif text-brand-primary">Mission</h3>
<p className="mt-4 text-brand-muted">
To develop career-ready professionals through expert-led training, real-world projects, and trusted placement pathways.
</p>
</div>
</Reveal>
</div>
</section>
)
}