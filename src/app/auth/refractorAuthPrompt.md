You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/home/sj/Downloads/drivehospital/src/app/auth
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `auth_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved auth version`

---

## 🌲 Full Project Structure (cwd)

```bash
/home/sj/Downloads/drivehospital
├── bun.lock
├── developer.md
├── docs
│   └── updateLottie.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── problemSolve.js
├── problemsolve.mp4
├── public
│   ├── CNAME
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── serviceData.json
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.jsx
│   │   ├── actions
│   │   │   └── auth
│   │   │       ├── loginUser.js
│   │   │       └── registerUser.js
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   └── [...nextauth]
│   │   │   │       └── route.js
│   │   │   ├── my-bookings
│   │   │   │   ├── [id]
│   │   │   │   │   ├── [bookingAPI].hurl
│   │   │   │   │   └── route.js
│   │   │   │   ├── my-bookingsAPI.hurl
│   │   │   │   └── route.js
│   │   │   └── services
│   │   │       ├── [id]
│   │   │       │   ├── route.js
│   │   │       │   └── [serviceAPI].hurl
│   │   │       ├── route.js
│   │   │       └── servicesAPI.hurl
│   │   ├── auth
│   │   │   ├── components
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── register
│   │   │   │   ├── components
│   │   │   │   │   └── SignupForm.jsx
│   │   │   │   └── page.jsx
│   │   │   └── signin
│   │   │       ├── page.jsx
│   │   │       └── SignInForm.jsx
│   │   ├── blogs
│   │   │   ├── [blogId]
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── checkout
│   │   │   └── [id]
│   │   │       └── page.jsx
│   │   ├── components
│   │   │   ├── CheckoutForm.jsx
│   │   │   ├── Footer
│   │   │   │   └── Footer.jsx
│   │   │   ├── HomeSection
│   │   │   │   ├── AboutSection.jsx
│   │   │   │   ├── CallToAction.jsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   └── WhyChooseUs.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotFoundAnime.jsx
│   │   │   ├── OrderReview.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ServicesSection.jsx
│   │   ├── contact
│   │   │   └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   ├── my-bookings
│   │   │   ├── [bookingId]
│   │   │   │   └── page.jsx
│   │   │   ├── components
│   │   │   │   ├── BookingUpdateForm.jsx
│   │   │   │   └── UpdateLottieAnime.jsx
│   │   │   └── page.jsx
│   │   ├── not-found.jsx
│   │   ├── page.js
│   │   ├── register
│   │   │   └── page.jsx
│   │   └── services
│   │       ├── [id]
│   │       │   └── page.jsx
│   │       └── page.jsx
│   ├── docs
│   │   └── cli_commands.md
│   ├── lib
│   │   ├── authOptions.js
│   │   ├── dbConnect.js
│   │   ├── LottieAnime.jsx
│   │   └── useAuth.jsx
│   ├── notfoundLottie.json
│   ├── providers
│   │   └── NextAuthProvider.jsx
│   └── updateLottie.json
└── structure.md

37 directories, 74 files
```

## 📁 Target Module Tree (auth)

```bash
/home/sj/Downloads/drivehospital/src/app/auth
├── components
│   └── SocialLogin.jsx
├── layout.jsx
├── register
│   ├── components
│   │   └── SignupForm.jsx
│   └── page.jsx
└── signin
    ├── page.jsx
    └── SignInForm.jsx

5 directories, 6 files
```

## 📄 Module Files & Contents

### `layout.jsx`
```javascript
export const Authlayout = ({ childrend }) => {
  return <div>{children}</div>;
};

export default Authlayout;
```

### `signin/SignInForm.jsx`
```javascript
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function SignInForm() {
  const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({
      email,
      password,
    });

    try {
      const res = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/",
        redirect: false,
      });
      console.log(res, "[1;31mres in SignInForm.jsx at line 20[0m");

      if (res?.ok) {
        toast.success("Sign in successful!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      toast.error("Sign in failed: " + (error?.message || "Unknown error"));
      console.log("error from signin ", error);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="w-full max-w-md mx-auto space-y-6 p-6 border rounded-lg shadow border-purple-500"
    >
      <h2 className="text-2xl font-bold text-center">Sign In</h2>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-bold py-2 btn btn-info rounded-full btn-outline"
      >
        Sign In
      </button>
    </form>
  );
}
```

### `signin/page.jsx`
```javascript
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
```

### `components/SocialLogin.jsx`
```javascript
"use client";

import { signIn } from "next-auth/react";
import { Github, Chrome } from "lucide-react"; // Google icon isn't in Lucide, so we’ll use Chrome for simplicity

export default function SocialLogin() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      {/* GitHub Login */}
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 text-gray-200 transition"
      >
        <Github className="w-5 h-5" />
        <span>Continue with GitHub</span>
      </button>

      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 text-gray-200 transition"
      >
        <Chrome className="w-5 h-5 text-red-400" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
```

### `register/components/SignupForm.jsx`
```javascript
"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";
import toast from "react-hot-toast";
// import { registerUser } from "@/app/actions/auth/registerUser";

export default function SignupForm() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Call your server action
      const res = await registerUser({ username, email, password });

      if (res?.insertedId) {
        toast.success("Registration successful!");
      } else {
        toast.error(
          "Registration failed: " + (res?.message || "Unknown error"),
        );
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("⚠️ Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md mx-auto space-y-6 p-6 border rounded-lg shadow border-purple-500"
    >
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <button
        type="submit"
        className="w-full  text-white font-bold py-2  btn btn-info rounded-full btn-outline"
      >
        Sign Up
      </button>
    </form>
  );
}
```

### `register/page.jsx`
```javascript
import SignupForm from "./components/SignupForm";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <SignupForm />
    </div>
  );
};

export default RegisterPage;
```
