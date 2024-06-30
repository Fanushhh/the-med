/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://themed.ro',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,
  
}