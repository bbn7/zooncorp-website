# Website Animations Implementation TODO

## Information Gathered
- **index.html**: Main page with hero, services-preview, testimonials, why sections. Hero has static image, services have cards with basic hover, testimonials have avatars.
- **assets/css/style.css**: Comprehensive CSS with existing animations (fadeInUp, slideInLeft), hover effects on cards and hero image, Intersection Observer setup.
- **assets/js/main.js**: Has Intersection Observer for fade-in animations, mobile menu, smooth scroll, etc. No carousel or parallax yet.
- **assets/img/**: Images available for carousel (hero-1.jpg), services, testimonials. May need additional images for seasonal rotations.

## Plan
### 1. Hero Image Carousel
- Update hero section HTML to include multiple images in a carousel container
- Add carousel CSS with fade transitions and navigation dots
- Implement JS carousel logic with auto-play and manual controls

### 2. Parallax Background Images
- Add parallax CSS classes for background images on testimonials and about sections
- Implement JS scroll handlers for parallax effects using transform translateY

### 3. Image Hover Transformations
- Enhance existing card hover effects with advanced transforms (rotate, zoom, reveal overlay)
- Add animated borders/shadows on hover

### 4. Testimonial Avatar Animations
- Add scale/glow effects and animated popups to testimonial avatars
- Implement hover-triggered animations with smooth transitions

### 5. Staggered Card Animations
- Extend Intersection Observer to add staggered timing for service cards
- Implement sequential appearance with bounce/slide effects

### 6. Scroll-Triggered Animations
- Expand Intersection Observer for more animation types (slide, scale, rotate)
- Add different animation classes for various elements

### 7. Background Pattern Animations
- Create CSS/SVG animated patterns for section backgrounds
- Add subtle particle/movement effects using CSS animations

### 8. Animated Service Icons
- Replace static service images with animated SVG icons
- Create SVG animations illustrating processes/features

### 9. Seasonal Image Rotations
- Add JS logic for dynamic image switching based on date/season
- Implement smooth crossfade animations between themes

## Dependent Files to be Edited
- index.html: Update hero, testimonials, services sections
- assets/css/style.css: Add new animation classes and keyframes
- assets/js/main.js: Extend Intersection Observer, add carousel/parallax logic
- assets/img/: May need additional seasonal images

## Followup Steps
- Test animations on different devices/browsers
- Optimize performance (reduce motion for accessibility)
- Verify animations don't interfere with usability
- Add loading states for images
