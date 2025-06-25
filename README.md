# Vidura.lk Website

This is the source code for the Vidura.lk educational institute website.

## How to Deploy on GitHub Pages with a Custom Domain (vidura.lk)

### 1. Push Your Code to GitHub
- Create a new repository on GitHub (e.g., `vidura-website`).
- Push all your website files (`index.html`, `style.css`, `main.js`, `.nojekyll`, etc.) to the repository root (not in a subfolder).

### 2. Enable GitHub Pages
- Go to your repository on GitHub.
- Click on **Settings** > **Pages** (or **Pages** in the sidebar).
- Under **Source**, select the `main` branch and `/ (root)` folder.
- Click **Save**.
- After a few minutes, your site will be available at `https://<your-username>.github.io/<repo-name>/`.

### 3. Set Up Your Custom Domain (vidura.lk)
- In the same **Pages** settings, find the **Custom domain** section.
- Enter `vidura.lk` and click **Save**.
- GitHub will ask you to configure your DNS provider.

#### DNS Configuration
- Go to your domain registrar's DNS management panel.
- Add or update the following DNS records:

  **For apex domain (vidura.lk):**
  - Type: `A`
  - Name/Host: `@`
  - Value: `185.199.108.153`
  - Value: `185.199.109.153`
  - Value: `185.199.110.153`
  - Value: `185.199.111.153`

  **For www subdomain (optional):**
  - Type: `CNAME`
  - Name/Host: `www`
  - Value: `<your-username>.github.io.`

- Remove any old A or CNAME records for `vidura.lk` that point elsewhere.

### 4. Add a CNAME File (Optional but Recommended)
- In your repository root, create a file named `CNAME` (no extension).
- The file should contain only your domain name:

  ```
  vidura.lk
  ```

- Commit and push this file. GitHub will use it to configure your custom domain.

### 5. Wait for DNS Propagation
- DNS changes may take a few minutes to 24 hours to propagate.
- Once complete, visiting `https://vidura.lk` should show your GitHub Pages site.

### 6. (Recommended) Enforce HTTPS
- In the GitHub Pages settings, check **Enforce HTTPS** once it is available.

---

## Notes
- The `.nojekyll` file disables Jekyll processing, ensuring all files/folders are served as-is.
- For more help, see the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

---

If you have any issues, check your DNS settings and GitHub Pages configuration, or contact your domain registrar for DNS help.
