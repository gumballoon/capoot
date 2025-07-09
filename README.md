# CAPOOT 🎸

**From power chords to open chords in 0.capo seconds!**

CAPOOT is a capo calculator web application that helps guitarists transpose power chord progressions into open chord patterns. Simply input your power chord sequence, and CAPOOT will tell you which fret to place your capo on and what open chords to play.

🔗 **[Try CAPOOT Live](https://gumballoon.github.io/capoot/)**

![CAPOOT Logo](assets/CAPOOT_Logo.svg)

## 🎯 About This Project

This is my very first project after completing the frontend portion of a full-stack bootcamp. CAPOOT represents a completely original concept, design, and implementation - from the initial idea to the final UI/UX design and functionality.

## ✨ Features

- **Two Playing Modes:**
  - **Classic Mode**: Uses all natural notes (C-D-E-F-G-A-B)
  - **Filtered Mode**: Uses campfire-friendly chords (C-D-E-G-A)

- **Interactive Interface:**
  - Visual chord selection with responsive button feedback
  - Real-time chord progression display
  - Animated help system with mode explanations

- **Smart Capo Calculator:**
  - Calculates optimal capo placement (up to 12th fret)
  - Displays the resulting open chord progression
  - Handles impossible progressions with helpful error messages

- **Responsive Design:**
  - Mobile-first approach
  - Optimized for all screen sizes
  - Touch-friendly interface

## 🚀 How to Use

1. **Choose Your Mode:**
   - **Classic**: Full range of natural notes
   - **Filtered**: Simplified chord set for easier playing

2. **Select Your Chords:**
   - Click on the note buttons to build your power chord progression
   - Add up to 9 chords to your sequence

3. **Get Your Result:**
   - Click "CONFIRM" to calculate capo placement
   - See which fret to place your capo on
   - View your new open chord progression

4. **Start Playing:**
   - Place your capo on the suggested fret
   - Play the displayed open chords
   - Enjoy your transposed progression!

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Bootstrap 5.3.3 + Custom CSS
- **Fonts**: Google Fonts (Luckiest Guy)
- **Graphics**: Custom SVG illustrations
- **Responsive**: Mobile-first design approach

## 🎨 Design Features

- **Custom Color Scheme**: Vibrant blue (#3FA6C3) background with high contrast elements
- **Typography**: Playful "Luckiest Guy" font for a fun, approachable feel
- **Interactive Elements**: Smooth hover effects and button animations
- **Visual Feedback**: Color-coded chord displays and state changes
- **Accessibility**: High contrast text and keyboard navigation support

## 📁 Project Structure

```
CAPOOT/
├── index.html              # Main HTML structure
├── script.js               # Core application logic
├── styles.css              # Custom styling and responsive design
├── capoot.js               # Legacy console version (not used)
├── assets/                 # Visual assets
│   ├── CAPOOT_Logo.svg     # Main logo
│   ├── CAPOOT_Dots.svg     # Decorative elements
│   ├── CAPOOT_Help.svg     # Help icon
│   ├── CAPOOT_Whoops.svg   # Error state illustration
│   └── CAPOOT_BrowserLogo.png # Favicon
└── design/                 # Design mockups and references
    ├── CAPOOT_01Main.png   # Main interface mockup
    ├── CAPOOT_02Active.png # Active state mockup
    ├── CAPOOT_03Result.png # Result view mockup
    ├── CAPOOT_04Error.png  # Error state mockup
    └── CAPOOT_Mockup.pdf   # Complete design document
```

## 🎵 The Music Theory Behind CAPOOT

CAPOOT uses music theory principles to transpose chord progressions:

1. **Chromatic Scale**: Works with all 12 semitones (C, C#, D, D#, E, F, F#, G, G#, A, A#, B)
2. **Capo Simulation**: Mathematically shifts each chord up the fretboard
3. **Open Chord Matching**: Finds the optimal capo position where all chords become playable as open chords
4. **Range Limitation**: Searches up to the 12th fret for practical playability

## 🎸 Why Use CAPOOT?

- **Simplify Complex Progressions**: Convert difficult power chord sequences into beginner-friendly open chords
- **Campfire Ready**: Perfect for acoustic guitar sessions and group singing
- **Learning Tool**: Understand the relationship between power chords and open chords
- **Practice Aid**: Explore different voicings of the same progression

## 🌟 Future Enhancements

- Chord diagram visualization
- Audio playback for chord progressions
- Save/load favorite progressions
- Extended chord support (7th, suspended, etc.)
- Tuning variations support

## 📝 Development Notes

This project showcases fundamental web development skills learned during bootcamp:
- **DOM Manipulation**: Dynamic content updates and event handling
- **Responsive Design**: Mobile-first CSS with media queries
- **User Experience**: Intuitive interface design and visual feedback
- **Problem Solving**: Mathematical algorithms for music theory implementation
- **Code Organization**: Clean, maintainable JavaScript structure

## 🎯 Project Goals Achieved

- ✅ Created an original, useful web application
- ✅ Implemented responsive design principles
- ✅ Applied music theory concepts programmatically
- ✅ Designed intuitive user interface
- ✅ Built interactive, animated elements
- ✅ Demonstrated proficiency in vanilla JavaScript
- ✅ Created custom graphics and branding

## 📄 License

This project is original work created during my full-stack development bootcamp. All design elements, code, and concepts are my own creation.

---

*"Because everything's better with a capo!"* 🎸
