![20250610_1435_React-Frontend to Flask_simple_compose_01jxcha9tfe2k9wra1hyzh15v4 (1)](https://github.com/user-attachments/assets/4930f5f4-451e-4433-8de9-d804a8dfdaca)

# CompliTru AI — React + Flask Integration

**CompliTru AI** is a cloud compliance platform that leverages the flexibility of a React-based frontend and the power of a Flask backend API.
This project demonstrates how to **build a React UI**, generate a **production-ready build**, and integrate it seamlessly with a **Flask (Python) web application**, including management of **static assets** (JS, CSS, images).

---

## ✨ Project Structure

```plaintext
/GMS-AI/                      # Flask application root
  ├── app/
  │   ├── static/
  │   │   ├── js/             # React build JS copied here
  │   │   ├── css/            # React build CSS copied here
  │   │   ├── assets/images/  # Images for React UI copied here
  │   ├── templates/
  │   │   ├── product_details.html  # Modified React index.html used in Flask route
/project/                     # React project root
  ├── src/components/
  ├── public/assets/images/   # Original image sources
  ├── dist/                   # React production build output
```

---

## ⚙️ How It Works

### 1️⃣ React Frontend

* The UI is developed in React (TypeScript + Vite build).
* Components like `ProductPillars.tsx` import images via static paths.
* The React app uses Lucide-react icons and modern UI design.

```tsx
import cost_page from '/assets/images/cost_assessment.png';
import vul_scan from '/assets/images/vul_page.png';
import compliance from '/assets/images/compliance.png';
```

### 2️⃣ React Build Process

* Run:

```bash
npm run build
```

* Output is generated in `/project/dist/`.
* Output includes:

  * JS: `/project/dist/assets/index-xxx.js`
  * CSS: `/project/dist/assets/index-xxx.css`
  * Images remain referenced via `/static/assets/images/...` in final HTML.

### 3️⃣ Flask Backend Integration

* The Flask app serves the UI via `/product-detail` route:

```python
@app.route("/product-detail")
def product_detail():
    return render_template("product_details.html")
```

* The `product_details.html` template is a modified version of the React `index.html`, with links updated to reference Flask static paths:

```html
<script type="module" src="/static/js/index-xxx.js"></script>
<link rel="stylesheet" href="/static/css/index-xxx.css">
<img src="/static/assets/images/compliance.png" alt="Compliance">
```

### 4️⃣ Static Assets

* React build JS and CSS are manually copied into:

  * `/app/static/js/`
  * `/app/static/css/`

* All images used by React components are copied to:

  * `/app/static/assets/images/`

---

## 🚀 Benefits of This Approach

✅ Full flexibility of React component-driven UI
✅ Final build is static → easy to deploy with Flask
✅ Python backend controls routes and serves the UI
✅ Static assets are organized and served via Flask `/static/`
✅ No need for running React dev server in production
✅ Simple architecture — easy to debug and maintain

---

## 🔍 Development Workflow

### Local Development (React only)

```bash
cd project
npm run dev
# Open http://localhost:5173
```

### Build for Flask Integration

```bash
cd project
npm run build

# Manually copy:
# - dist/assets/index-xxx.js → /app/static/js/
# - dist/assets/index-xxx.css → /app/static/css/
# - public/assets/images/* → /app/static/assets/images/
```

### Run Flask App

```bash
cd GMS-AI
flask run --host=0.0.0.0 --port=1100
# Open http://localhost:1100/product-detail
```

---

## 🖼 Example Result

When visiting `/product-detail`, the Flask server serves a React-based page that uses:

✅ React components
✅ Static JS & CSS from `/static/`
✅ Images served via `/static/assets/images/`

---

## 🌟 Key Lessons

* When integrating React with Flask, avoid importing images in JS using ES6 import.
* Use **static paths** for images and serve them via Flask `/static/` folder.
* React build artifacts can easily be served by Flask once the paths are correctly adjusted.
* You can leverage this approach for hybrid apps where React is used for UI but Python/Flask handles APIs and routing.

---

## 📝 License

MIT License.
Feel free to fork and adapt this architecture for your own React + Flask projects.

---

## 📢 Credits

Project implemented by **Sarvadnya Jawle**.
