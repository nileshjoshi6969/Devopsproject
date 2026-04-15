# TransportBid

## Project Title
TransportBid — A logistics bidding platform for business owners and transporters.

##  Problem Statement
Business owners need a quick way to find nearby transporters for their goods.
TransportBid lets owners post journey bids and browse transporter details.



##  CI/CD Pipeline Explanation
Pipeline has 3 stages: Build (installs deps) → Test (runs npm test)
→ Deploy (triggers Render deploy via API key stored in GitHub Secrets).

## Git Workflow Used
- main branch: production-ready code
- feature/devops-enhancement: development branch
- Changes merged via Pull Request after review

##  Tools Used
Node.js, Express, Docker, GitHub Actions, Render.com

##  Screenshots
<img width="1406" height="288" alt="image" src="https://github.com/user-attachments/assets/530c03b4-56a3-4db3-93cb-6213c2db5a3b" />


##  Challenges Faced
- Configuring Render deploy webhook in GitHub Actions
- Keeping secrets secure using GitHub Secrets
