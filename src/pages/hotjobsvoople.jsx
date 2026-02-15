import { useState } from "react";
import { supabase } from "../supabase";

export default function HotJobsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    skills: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 1️⃣ Upload Resume
    const file = formData.resume;
    const fileName = `${Date.now()}-${file.name}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("resume")
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from("resume")
      .getPublicUrl(fileName);

    const resumeUrl = publicUrlData.publicUrl;

    // 2️⃣ Insert into DB
    const { error: insertError } = await supabase
      .from("vooplecandidates")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          skills: formData.skills,
          resume_url: resumeUrl,
        },
      ]);

    if (insertError) throw insertError;

    alert("Application submitted successfully!");
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-brand-dark text-brand-text">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Submit Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <input
            type="text"
            name="skills"
            placeholder="Your Skills (e.g., React, Marketing, HR)"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />

          <div className="w-full">
            <label className="block mb-2 text-sm text-brand-muted">
              Upload Resume (PDF, DOC, DOCX)
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-primary file:text-white hover:file:bg-opacity-90"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-brand-primary font-semibold hover:opacity-90 transition duration-300"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}
