# Multi-Step Form Application

## 📌 Overview

This project is a **Multi-Step Form Application** built using **React.js** and **Tailwind CSS (v3)**. The form collects child information, service needs, and parent details in a clean, user-friendly, step-by-step interface.

The UI is fully responsive, visually appealing, and designed with a professional theme using Tailwind.

---

## 🚀 Features

* 3-step multi-step form workflow
* Clean and modern UI using TailwindCSS
* Form validation (basic input handling)
* Navigation between steps
* Final form submission
* Automatic form reset after successful submission
* Smooth transitions and professional layout

---

## 🏗 Tech Stack

* **React.js** (Vite recommended)
* **TailwindCSS v3**
* **JavaScript (ES6+)**

---

## 📁 Project Structure

```
project-folder/
│── src/
│   │── components/
│   │   │── Step1.jsx
│   │   │── Step2.jsx
│   │   │── Step3.jsx
│   │── App.jsx
│   │── main.jsx
│   │── index.css
│── public/
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd project-folder
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Install Tailwind CSS v3

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### 4️⃣ Add Tailwind to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5️⃣ Run the project

```bash
npm run dev
```

---

## 🧩 Component Breakdown

### **Step 1 – Child Details**

Contains fields like:

* Child Name
* Child Age

### **Step 2 – Service Requirements**

Includes:

* Select service type
* Timings / Schedule

### **Step 3 – Parent Information**

Includes:

* Parent Name
* Email
* Phone
* **Submit Button**

---

## ✅ Form Submission Logic

On clicking **Submit**:

* Shows success alert
* Clears the form values
* Returns user to **Step 1**

Code snippet:

```jsx
alert("Form submitted successfully!");
setFormData({ childName: "", childAge: "", serviceType: "", schedule: "", parentName: "", parentEmail: "", parentPhone: "" });
setStep(1);
```

---

## 🎨 UI/UX Highlights

* Rounded modern card layout
* Soft colors and focus rings
* Consistent padding & spacing
* Smooth button transitions
* Professional layout structure

---

## 📦 Build for Production

```bash
npm run build
```

The production-ready output will be inside the **dist/** folder.

---

## 📝 Author

**Priyanka Sharma**
Frontend Developer

If you need help deploying this project or creating documentation in PDF, feel free to ask!
