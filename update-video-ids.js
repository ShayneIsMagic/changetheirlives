// Script to update YouTube video IDs in HTML files
// Run this after uploading videos to YouTube and getting the video IDs

const fs = require('fs');
const path = require('path');

// Replace these with your actual YouTube video IDs
const VIDEO_IDS = {
  kray: 'YfjpjXCMSx0', // Kray's Story video ID
  amee: 'c8dl0IOMDN4'  // Amee's Story video ID
};

// Update about.html (Kray's video)
function updateAboutPage() {
  const aboutPath = path.join(__dirname, 'pages', 'about.html');
  let content = fs.readFileSync(aboutPath, 'utf8');
  
  content = content.replace(
    /YOUR_KRAY_VIDEO_ID_HERE/g,
    VIDEO_IDS.kray
  );
  
  fs.writeFileSync(aboutPath, content);
  console.log('✅ Updated about.html with Kray video ID');
}

// Update partners.html (Amee's video)
function updatePartnersPage() {
  const partnersPath = path.join(__dirname, 'pages', 'partners.html');
  let content = fs.readFileSync(partnersPath, 'utf8');
  
  content = content.replace(
    /YOUR_AMEE_VIDEO_ID_HERE/g,
    VIDEO_IDS.amee
  );
  
  fs.writeFileSync(partnersPath, content);
  console.log('✅ Updated partners.html with Amee video ID');
}

// Main function
function updateVideoIds() {
  console.log('🎥 Updating YouTube video IDs...');
  
  if (VIDEO_IDS.kray === 'YOUR_KRAY_VIDEO_ID_HERE') {
    console.log('❌ Please update the VIDEO_IDS object with your actual YouTube video IDs');
    console.log('📝 Instructions:');
    console.log('1. Upload videos to YouTube');
    console.log('2. Get video IDs from URLs (part after v=)');
    console.log('3. Update VIDEO_IDS object in this file');
    console.log('4. Run: node update-video-ids.js');
    return;
  }
  
  updateAboutPage();
  updatePartnersPage();
  
  console.log('🎉 All video IDs updated successfully!');
  console.log('📤 Don\'t forget to commit and push your changes');
}

// Run the update
updateVideoIds(); 