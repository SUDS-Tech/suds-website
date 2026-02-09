/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function JoinUs() {
  return (
    <section className="bg-[#161b22] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-2">
          <Briefcase className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl font-bold text-white">We're Hiring Soon</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          We're building something exciting at SUDS Technologies Ltd and will be
          expanding our team soon. If you're passionate about technology, innovation,
          and solving real-world problems, we'd love to hear from you.
        </p>

        <div className="card inline-block bg-emerald-500/5 border-emerald-500/20">
          <p className="text-gray-300 text-sm">
            Hiring announcements coming soon. In the meantime, feel free to reach out.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
