# Video Optimization Guide for Cloudflare Pages

## 🚨 Issue: File Size Limit Exceeded

Cloudflare Pages has a **25MB file size limit** per file. Your videos exceed this limit:
- `dev_pipeline__kray_-_social_media (720p).mp4` - 40MB ❌
- `devpipeline-amee-social-media.mp4` - 77MB ❌
- `DevPipeline Changing Lives in Rural America.mp4` - 11MB ✅

## 🎯 Solutions

### **Option 1: External Video Hosting (Recommended)**

#### A. YouTube (Free)
1. Upload videos to YouTube as "Unlisted"
2. Use YouTube embed URLs
3. Benefits: Free, reliable, optimized delivery

#### B. Vimeo (Free tier available)
1. Upload to Vimeo
2. Use Vimeo embed URLs
3. Benefits: Professional, customizable

#### C. Cloudflare Stream (Paid)
1. Upload to Cloudflare Stream
2. Use Stream URLs
3. Benefits: Integrated with Cloudflare, optimized

### **Option 2: Video Compression**

#### Using FFmpeg (Command Line)
```bash
# Compress video to under 25MB
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 128k output.mp4

# For web optimization
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

#### Using Online Tools
- [HandBrake](https://handbrake.fr/) - Free, open-source
- [CloudConvert](https://cloudconvert.com/) - Online conversion
- [FFmpeg Online](https://ffmpeg-online.com/) - Web-based

### **Option 3: Replace with Placeholder Content**

Temporarily replace videos with:
- Image placeholders
- "Video coming soon" messages
- Contact forms for video access

## 🔧 Implementation

### **Current Video References**

1. **About Page**: Kray's Story video
2. **Home Page**: Rural America video
3. **Partners Page**: Amee video

### **Recommended Actions**

1. **Immediate Fix**: Replace large videos with placeholders
2. **Long-term**: Upload to YouTube/Vimeo and embed
3. **Alternative**: Compress videos to under 25MB

## 📋 Quick Fix Commands

### **Remove Large Videos (Temporary)**
```bash
# Move large videos to a separate folder
mkdir -p large-videos-backup
mv assets/videos/dev_pipeline__kray_-_social_media\ \(720p\).mp4 large-videos-backup/
mv assets/videos/devpipeline-amee-social-media.mp4 large-videos-backup/
```

### **Compress Videos (If you have FFmpeg)**
```bash
# Install FFmpeg (macOS)
brew install ffmpeg

# Compress videos
ffmpeg -i "assets/videos/dev_pipeline__kray_-_social_media (720p).mp4" -c:v libx264 -crf 28 -c:a aac -b:a 128k "assets/videos/kray-story-compressed.mp4"
ffmpeg -i "assets/videos/devpipeline-amee-social-media.mp4" -c:v libx264 -crf 28 -c:a aac -b:a 128k "assets/videos/amee-story-compressed.mp4"
```

## 🎥 YouTube Upload Instructions

### **Step 1: Upload to YouTube**
1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Click "Create" → "Upload videos"
3. Upload your videos
4. Set visibility to "Unlisted"
5. Copy the video IDs

### **Step 2: Update HTML**
Replace video elements with YouTube embeds:

```html
<!-- Instead of video tag -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

## 🚀 Immediate Deployment Fix

To deploy immediately, I'll update the HTML files to remove the large video references and add placeholders. This will allow the site to deploy successfully while you work on video optimization.

## 📞 Next Steps

1. **Choose a video hosting solution**
2. **Upload videos to external platform**
3. **Update HTML with new video URLs**
4. **Test the site functionality**
5. **Deploy to Cloudflare Pages**

---

**Note**: The site will deploy successfully once the large video files are removed or replaced with external links. 