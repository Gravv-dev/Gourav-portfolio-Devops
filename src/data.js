export const profile = {
  name: 'Gourav Fagna',
  role: 'senior devops & cloud infrastructure engineer',
  location: 'Faridabad, Haryana, India',
  phone: '+91 93106 05077',
  email: 'gourav-devops@zohomail.in',
  linkedin: 'linkedin.com/in/gourav-fagna-619a420',
  linkedinUrl: 'https://linkedin.com/in/gourav-fagna-619a420',
  github: 'github.com/Gravv-dev',
  githubUrl: 'https://github.com/Gravv-dev',
  summary:
    "Results-driven Senior DevOps & Cloud Infrastructure Engineer with 4.5+ years architecting, automating, and scaling cloud environments for fast-growing SaaS startups. Proficient in AWS multi-region infrastructure, Kubernetes (EKS/K3s), Terraform IaC, and GitOps CI/CD pipelines. Proven track record of reducing cloud costs by 35%, maintaining 99.99% uptime, and accelerating deployment frequency from days to minutes. Trusted freelance consultant for zero-downtime deployments, cost optimization, and DevSecOps compliance.",
};

export const metrics = [
  { num: '4.5+', label: 'years in production infra' },
  { num: '99.99%', label: 'uptime maintained' },
  { num: '35%', label: 'cloud cost reduced' },
  { num: '80%', label: 'faster release cycles' },
];

export const stack = [
  {
    name: 'cloud platforms',
    tags: ['AWS EC2', 'VPC', 'EKS', 'RDS Multi-AZ', 'S3', 'CloudFront', 'ALB/NLB', 'IAM', 'Route 53', 'CloudWatch'],
  },
  {
    name: 'containers & orchestration',
    tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'ArgoCD', 'K3s'],
  },
  {
    name: 'iac & automation',
    tags: ['Terraform', 'Terragrunt', 'Ansible', 'Bash', 'Python'],
  },
  {
    name: 'ci/cd & devsecops',
    tags: ['GitHub Actions', 'Jenkins', 'AWS CodePipeline', 'SonarQube', 'Trivy', 'OWASP ZAP'],
  },
  {
    name: 'observability & logging',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Filebeat', 'Datadog'],
  },
  {
    name: 'databases & web servers',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Nginx', 'Ingress Controllers'],
  },
];

export const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'TechNova Cloud Solutions',
    tag: 'promoted Jan 2024',
    meta: 'Oct 2021 — Present · Faridabad, India / Remote',
    points: [
      'Architected and managed production cloud infrastructure on AWS for 500k+ active users, maintaining 99.99% system uptime.',
      'Executed AWS cost optimization using Spot instances, Graviton compute, and auto-scaling — reducing cloud bills by $4,500/month (35% savings).',
      'Modernized software delivery by migrating legacy setups to automated GitOps pipelines via GitHub Actions and ArgoCD, slashing release cycle time by 80%.',
      'Designed and executed Blue/Green zero-downtime deployment strategies on Kubernetes using ALB and Helm, eliminating production release outages.',
      'Implemented DevSecOps security automation using Trivy and SonarQube, remediating 150+ critical container vulnerabilities prior to deployment.',
    ],
  },
];

export const projects = [
  {
    num: '01',
    title: 'Multi-Tenant AWS EKS Cluster Migration & GitOps Pipeline',
    path: 'aws-eks · terraform · argocd · helm · docker',
    points: [
      'Provisioned a production-ready AWS EKS cluster across multiple AZs using modular, reusable Terraform code.',
      'Containerized 15+ microservices with automated GitOps delivery via ArgoCD and parameterized Helm charts.',
      'Configured Horizontal Pod Autoscaling (HPA) to dynamically scale resources during 5x traffic surges.',
    ],
  },
  {
    num: '02',
    title: 'High-Availability 3-Tier Web Architecture with Blue/Green CI/CD',
    path: 'aws-codepipeline · alb · cloudfront · multi-az-rds',
    points: [
      'Designed a resilient 3-tier architecture with CloudFront CDN caching, ALB load balancing, and Multi-AZ PostgreSQL RDS.',
      'Built automated Blue/Green CI/CD pipelines in AWS CodePipeline with instant rollback triggers on health-check failure.',
    ],
  },
  {
    num: '03',
    title: 'Distributed Centralized ELK Observability Platform',
    path: 'elasticsearch · logstash · kibana · filebeat · ec2',
    points: [
      'Deployed a centralized ELK stack with Filebeat sidecars to stream and parse logs across distributed containers.',
      'Built Kibana dashboards and Slack webhook alerts for HTTP 5xx errors, reducing debugging MTTR by 70%.',
    ],
  },
  {
    num: '04',
    title: 'DevSecOps Pipeline & Cloud Infrastructure Hardening',
    path: 'sonarqube · trivy · owasp-zap · secrets-manager · iam',
    points: [
      'Automated CI/CD security gates blocking builds with high/critical CVEs using Trivy and SonarQube.',
      'Migrated application credentials to AWS Secrets Manager with automated key rotation and strict IAM least-privilege policies.',
    ],
  },
];

export const certifications = [
  'AWS Certified Solutions Architect – Associate (SAA-C03)',
  'Certified Kubernetes Administrator (CKA)',
  'HashiCorp Certified: Terraform Associate (003)',
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Echelon Institute of Technology, YMCA University',
  location: 'Faridabad, India',
};
