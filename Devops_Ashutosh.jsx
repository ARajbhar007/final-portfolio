import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Terminal, Globe2, Mail, FileDown } from "lucide-react";
import { motion } from 'framer-motion';

const portfolio = {
  name: "Ashutosh Rajbhar",
  title: "DevOps & Cloud Engineer",
  description: "I am a DevOps & Cloud Engineer specializing in automated infrastructure and cloud-native deployments. I bridge the gap between development and operations by architecting scalable CI/CD pipelines, implementing GitOps workflows, and hardening Cloud Security. I am committed to reducing deployment lead times and ensuring 100% system reliability through code-driven automation.",
  skills: [
    "Infrastructure as Code - Terraform, Ansible, CloudFormation",
    "Orchestration & GitOps - Docker, Kubernetes (EKS), Helm, ArgoCD",
    "CI/CD & DevSecOps - Jenkins, GitHub Actions, Trivy, SonarQube",
    "Cloud Platforms - AWS (VPC, IAM, S3, EKS, RDS)",
    "Monitoring & Observability - Prometheus, Grafana",
    "AI tools - ChatGpt, Gemini, Amazon Q, Claude, Github Copilot, KIRO",
    "Operating System - Linux (Ubuntu), Windows, Mac OS, Cent OS",
    "Notification & Version Control - Slack, Email, Git/Github"
  ],
  tools: [
    "Linux", "Git/Github", "Aws", "Docker", "Kubernetes", "Argocd", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana", "Helm Chart", "Trivy"
  ],
  socialLinks: {
    website: "https://final-portfolio-nine-zeta.vercel.app/",
    github: "https://github.com/ARajbhar007/",
    Linkedin: "https://linkedin.com/in/ashutosh-rajbhar-a77327122/",
    email: "arajbhar140@gmail.com",
    resume: "../Resume.pdf"
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
                <h3 className="text-xl font-semibold text-emerald-400">End-to-End DevSecOps MERN Application on AWS EKS</h3>
                <p className="text-sm text-zinc-400">Infrastructure & Orchestration: Engineered a highly available Amazon EKS (Kubernetes) cluster using Terraform (IaC), implementing custom VPC networking, IAM Roles for Service Accounts (IRSA), and managed node groups to ensure 99.9% infrastructure reliability. CI/CD & DevSecOps: Architected a robust Jenkins pipeline integrating SonarQube for static analysis and Trivy for container image scanning, reducing production vulnerabilities by automating security gates at every commit. GitOps Deployment: Streamlined application lifecycles using ArgoCD and Helm Charts, establishing a declarative "Source of Truth" that automated syncs and prevented configuration drift across environments. Observability & Feedback: Deployed a full-stack monitoring solution using Prometheus and Grafana; integrated Slack Webhooks for real-time alerting on cluster health, deployment status, and critical resource thresholds. Security & Scaling: Hardened the 3-tier MERN architecture using AWS Secrets Manager and IAM best practices; implemented Horizontal Pod Autoscaling (HPA) to handle traffic spikes and ensure cost-efficient resource utilization.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-emerald-400">Zero-Downtime Deployment using Git, Ansible & Nginx | AWS EC2</h3>
                <p className="text-sm text-zinc-400">Automated Provisioning: Utilized Ansible to automate the configuration and hardening of Ubuntu EC2 instances, ensuring consistent environments across two application servers and a high-performance Nginx load balancer. Deployment Strategy: Engineered a custom Git-driven deployment workflow using Post-Receive Hooks and Ansible playbooks to achieve Rolling Updates, eliminating service interruptions during code ship cycles. Traffic Management: Configured Nginx as a reverse proxy and load balancer with active Health Checks, ensuring traffic was intelligently routed only to healthy application nodes during live deployments. Reliability & Monitoring: Integrated Prometheus and Node Exporter to track system-level metrics (CPU, Memory, Disk I/O); built Grafana dashboards to visualize traffic distribution and verify 100% uptime during deployment windows. Incident Response: Integrated Slack notifications via Webhooks to alert the team of deployment status and load balancer health changes, reducing the Mean Time to Acknowledge (MTTA) infrastructure issues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-emerald-300 mb-4">About Me</h2>
          <div className="bg-black border border-emerald-800 p-4 rounded-xl text-green-400">
            <p className="leading-relaxed">
              As a passionate and detail-oriented DevOps Engineer, I specialize in automating deployments, managing cloud infrastructure, and streamlining development workflows. I have hands-on experience with tools like GitHub Actions, Docker, AWS, and Linux, and have built CI/CD pipelines, containerized applications, and hosted static and dynamic sites from scratch. My approach is rooted in continuous learning and solving real-world problems with practical DevOps solutions. I'm eager to contribute to collaborative teams and help deliver reliable, scalable, and efficient systems.
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
