import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Terminal, Globe2, Mail, FileDown } from "lucide-react";
import { motion } from 'framer-motion';

const portfolio = {
  name: "Ashutosh Rajbhar",
  title: "Junior Devops Engineer",
  description: "Hi, I’m a Junior DevOps Engineer focused on making development and deployment easier through automation. From creating Dockerized apps to setting up full CI/CD pipelines with GitHub Actions, I enjoy building reliable systems that scale. I’ve worked with cloud platforms like AWS and love using Linux, Bash, and Git to bring ideas to life.",
  skills: [
    "Building CI/CD Pipelines",
    "Containerization",
    "Cloud Aws",
    "Scripting & Automation",
    "Monitoring & Logging with Prometheus",
    "Python & Bash Scripting",
    "Email Integration",
    "Ansible"
  ],
  tools: [
    "Ubuntu Linux", "Git/Github", "Aws / Azure", "Docker Container", "Kubernetes", "Nexus Artifact", "Jenkins", "Terraform"
  ],
  socialLinks: {
    website: "https://final-portfolio-nine-zeta.vercel.app/",
    github: "https://github.com/ARajbhar007/",
    Linkedin: "https://linkedin.com/in/ashutosh-rajbhar-a77327122/",
    email: "arajbhar140@gmail.com",
    resume: "/Resume.pdf"
  },
  blogPosts: [
    {
      title: "Bypassing WAF with Encoded Payloads",
      content: "> Playing cat and mouse with modern WAFs — I encoded payloads in base64, hex, and unicode until the gates fell."
    },
    {
      title: "Pivoting Techniques in Internal Networks",
      content: "> From foothold to domain admin — tunneling with chisel, proxychains, and socks5 to own the entire internal segment."
    }
  ]
};

export default function EthicalHackerPortfolio() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.createElement('canvas');
      canvas.id = 'matrix';
      canvas.className = 'fixed top-0 left-0 w-full h-full z-0 opacity-10';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = canvas.width / 20;
      const drops = Array.from({ length: columns }).fill(1);
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px monospace';
        for (let i = 0; i < drops.length; i++) {
          const text = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillText(text, i * 20, drops[i] * 20);
          drops[i] = drops[i] * 20 > canvas.height || Math.random() > 0.95 ? 0 : drops[i] + 1;
        }
      };
      const interval = setInterval(draw, 33);
      return () => {
        clearInterval(interval);
        canvas.remove();
      };
    }
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-zinc-900 to-black text-white p-8 z-10">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold text-emerald-400">{portfolio.name}</h1>
          <p className="text-xl text-zinc-300 mt-2">{portfolio.title}</p>
          <p className="text-zinc-400 mt-4 max-w-2xl">{portfolio.description}</p>
        </motion.div>

        <div className="mt-4">
          <a href={portfolio.socialLinks.resume} download className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm rounded-xl hover:bg-emerald-700 animate-pulse">
            <FileDown size={16} /> Download CV
          </a>
        </div>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {portfolio.skills.map((skill, idx) => (
              <motion.div key={idx} className="bg-zinc-800 p-3 rounded-xl shadow-inner text-center text-sm" whileHover={{ scale: 1.05 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">Tools</h2>
          <div className="flex flex-wrap gap-3">
            {portfolio.tools.map((tool, idx) => (
              <span key={idx} className="bg-emerald-800 text-white px-3 py-1 rounded-full text-xs">{tool}</span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-emerald-400">Jenkins CI/CD</h3>
                <p className="text-sm text-zinc-400">Built and automated a CI/CD pipeline in Jenkins for a Java application using Maven, integrating Nexus for artifact management. Deployed the application seamlessly on AWS EC2 with end-to-end build, test, and deployment automation.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-emerald-400">Automated system usage email notification</h3>
                <p className="text-sm text-zinc-400">Developed a system monitoring automation that continuously tracks CPU usage of running servers. Configured an automated email alert system to notify when CPU thresholds are exceeded, ensuring proactive detection of performance issues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">About Me</h2>
          <div className="bg-black border border-emerald-800 p-4 rounded-xl text-green-400">
            <p className="leading-relaxed">
              As a passionate and detail-oriented Junior DevOps Engineer, I specialize in automating deployments, managing cloud infrastructure, and streamlining development workflows. I have hands-on experience with tools like GitHub Actions, Docker, AWS, and Linux, and have built CI/CD pipelines, containerized applications, and hosted static and dynamic sites from scratch. My approach is rooted in continuous learning and solving real-world problems with practical DevOps solutions. I'm eager to contribute to collaborative teams and help deliver reliable, scalable, and efficient systems.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a href={portfolio.socialLinks.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl text-emerald-400"><Globe2 /> Website</a>
            <a href={portfolio.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl text-emerald-400"><Terminal /> GitHub</a>
            <a href={portfolio.socialLinks.Linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl text-emerald-400"><ShieldCheck /> Linkedin</a>
            <a href={portfolio.socialLinks.email} className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl text-emerald-400"><Mail /> Email</a>
          </div>
        </section>

        <footer className="mt-20 text-center text-sm text-zinc-500">© 2025 {portfolio.name}. All rights reserved.</footer>
      </div>
    </div>
  );
}
