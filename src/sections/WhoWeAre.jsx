import Reveal from "../components/animation/Reveal";

export default function WhoWeAre() {
return (
<section className="py-24 px-6 max-w-6xl mx-auto" id ="who-we-are">
<Reveal>
  <div className="space-y-16">
    <div className="div-1-who-we-are">
      <h2 className="text-4xl font-serif mb-6 text-red-600">Who We Are</h2>
      <p className="text-brand-muted max-w-3xl">
        We are a technology-driven organization delivering enterprise-grade
        software solutions and development (CRM), strategic IT consulting,
        and real-time, job-oriented training programs that connect talent
        with industry needs.
      </p>
    </div>

    <div className="div-2-what-we-provide">
      <h2 className="text-4xl font-serif mb-6 text-red-600">What We Provide</h2>
      <p className="text-brand-muted max-w-3xl">Software development</p>
      <p className="text-brand-muted max-w-3xl">hotjobsvoople.in</p>
      <p className="text-brand-muted max-w-3xl">Business Architects (B2B)</p>
      <p className="text-brand-muted max-w-3xl">Digital Marketing (B2B)</p>
      <p className="text-brand-muted max-w-3xl">Software Product Service (CRM)</p>
    </div>
  </div>
</Reveal>

</section>
)
}