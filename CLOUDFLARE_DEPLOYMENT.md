# Deploy ZOON CORP Website to Cloudflare Pages

Cloudflare Pages is a fast, secure, and scalable way to deploy static websites. Follow these steps to deploy your ZOON CORP website.

## Prerequisites

- Cloudflare account (free or paid) - [Sign up here](https://dash.cloudflare.com/sign-up)
- GitHub account with your repository pushed (already done ✓)
- Your GitHub repository URL: `https://github.com/bbn7/zooncorp-website`

---

## Step 1: Connect Your GitHub Repository to Cloudflare Pages

1. **Log in to Cloudflare Dashboard**
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in with your Cloudflare account

2. **Navigate to Pages**
   - In the left sidebar, click on **"Pages"**
   - Click the blue **"Create a project"** button

3. **Select GitHub Connection**
   - Choose **"Connect to Git"**
   - You'll be prompted to authorize Cloudflare to access your GitHub account
   - Click **"Authorize Cloudflare"** and sign in to GitHub if needed
   - Grant permissions for Cloudflare to access your repositories

4. **Select Your Repository**
   - Search for **"zooncorp-website"** in the repository list
   - Click on your repository to select it
   - Click **"Begin setup"**

---

## Step 2: Configure Build Settings

1. **Project Name**
   - Enter a name like `zooncorp-website` (or choose your preferred name)
   - This becomes your initial subdomain: `zooncorp-website.pages.dev`

2. **Production Branch**
   - Set to **`main`** (this is already your primary branch)

3. **Build Settings**
   - **Framework preset**: Select **"None"** (since this is a static site with no build process)
   - **Build command**: Leave **empty** (no build step needed)
   - **Build output directory**: Leave **empty** or enter `./` (files are already in root)

4. **Environment Variables** (Optional)
   - You can skip this for now unless you have specific config needs

5. **Click "Save and Deploy"**

---

## Step 3: Deployment Begins

- Cloudflare will automatically build and deploy your site
- You'll see a deployment progress indicator
- Once complete, your site will be live at: `https://zooncorp-website.pages.dev`

---

## Step 4: Connect Your Custom Domain (Recommended)

To use your own domain (e.g., `www.zooncorp.com`):

### Option A: Using an Existing Cloudflare-Managed Domain

1. **In Cloudflare Pages dashboard**, click on your project
2. Go to the **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain (e.g., `zooncorp.com`)
5. Cloudflare will automatically configure the DNS records
6. Click **"Activate domain"**

### Option B: Update DNS Records (If Domain is Elsewhere)

If your domain is registered elsewhere (GoDaddy, Namecheap, etc.):

1. Get your Cloudflare Pages deployment URL from the project dashboard
2. In your domain registrar's DNS settings, add a CNAME record:
   - **Name**: `www` (or `@` for root)
   - **Type**: CNAME
   - **Value**: `zooncorp-website.pages.dev`
   - **TTL**: 3600 (or automatic)

3. Add an A record for root domain (`@`):
   - **Name**: `@`
   - **Type**: A
   - **Value**: Use Cloudflare's IP addresses:
     - `192.0.2.1` (primary)
     - `198.51.100.1` (secondary)

4. DNS changes may take 24-48 hours to propagate

---

## Step 5: Automatic Deployments

Your site is now set up for **automatic deployments**:

- Every time you push to the `main` branch on GitHub, Cloudflare automatically rebuilds and deploys
- View deployment history in the **"Deployments"** tab
- You can also manually trigger deployments or preview pull requests

### How Automatic Deployments Work

1. You make changes to your code
2. Push to GitHub: `git push origin main`
3. Cloudflare automatically detects the push
4. Your site rebuilds and deploys (usually within 1-2 minutes)
5. Your live site updates automatically

---

## Step 6: SSL/HTTPS Certificate

Cloudflare Pages automatically provides:
- ✅ Free SSL/HTTPS certificate
- ✅ Automatic certificate renewal
- ✅ Full encryption of all traffic
- ✅ HTTP to HTTPS redirect

No additional setup needed!

---

## Step 7: Monitor and Manage Your Site

**In your Cloudflare Pages Dashboard:**

- **Deployments tab**: View all deployment history and rollback if needed
- **Analytics**: Track page views, requests, and performance
- **Settings**: Configure caching, security, and redirects
- **Functions**: Add serverless backend functionality (if needed)
- **Environment Variables**: Store secrets and configuration

---

## Performance & Features Included

Cloudflare Pages automatically provides:

✅ **Global CDN** - Content delivered from locations worldwide  
✅ **Automatic Caching** - Static assets cached for fast delivery  
✅ **DDoS Protection** - Protection against attacks  
✅ **Free SSL/TLS** - Secure HTTPS for all traffic  
✅ **HTTP/3 Support** - Latest web standards  
✅ **Automatic Redirects** - Configure 301/302 redirects  
✅ **Custom Headers** - Set security headers and more  
✅ **Request Logging** - Monitor traffic patterns  

---

## Troubleshooting

### Deployment Fails
- Check the **"Deployments"** tab for error messages
- Most common issue: incorrect build settings (for static sites, leave build command empty)
- Common issue: if you have a `package.json`, Pages might try to build it as an npm project

### Site Not Updating After Push
- Wait 1-2 minutes for Cloudflare to detect and deploy
- Check **"Deployments"** tab to confirm the latest push is deployed
- Clear your browser cache or hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Custom Domain Not Working
- DNS changes take 24-48 hours to propagate globally
- Verify DNS records are correctly set in your domain registrar
- Check "Custom domains" tab in Cloudflare Pages for status

### HTTPS Certificate Not Working
- Cloudflare automatically issues certificates
- May take up to 48 hours for first-time domains
- Check "Custom domains" tab to see certificate status

---

## Next Steps

1. **SEO & Metadata**: Verify all `<title>`, meta descriptions, and Open Graph tags are correct
2. **Analytics**: Set up Cloudflare Analytics for traffic insights
3. **Monitoring**: Enable email notifications for deployment failures
4. **Backups**: Your code is safe in GitHub - always keep it up to date
5. **Performance**: Use Cloudflare's Speed Insights to optimize further

---

## Useful Links

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Getting Started with Pages](https://developers.cloudflare.com/pages/get-started/)
- [Custom Domains Guide](https://developers.cloudflare.com/pages/platform/custom-domains/)
- [Troubleshooting Deployments](https://developers.cloudflare.com/pages/platform/troubleshooting/)

---

## Quick Reference: Your Site Info

- **Repository**: https://github.com/bbn7/zooncorp-website
- **Cloudflare Pages URL**: `https://zooncorp-website.pages.dev` (after deployment)
- **Production Branch**: `main`
- **Build Command**: (none - static site)
- **Output Directory**: (root)

---

**Status**: Ready for deployment ✅

Your website is fully production-ready and can be deployed to Cloudflare Pages in under 10 minutes!
