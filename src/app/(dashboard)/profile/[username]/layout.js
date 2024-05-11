"use client";
import Link from "next/link";
import "./profile_layout.css";
import Profile from "@/components/profile.js";  

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className="profile_container">
        <Profile />
        <div className="profile_menu">
          <ul>
            <Link href="/profile/coolsem/">
              <li>Posts</li>
            </Link>
            <Link href="/profile/coolsem/work">
              <li>Work</li>
            </Link>
            <Link href="/profile/coolsem/achievements">
              <li>Achivements</li>
            </Link>
          </ul>
        </div>
        <div className="user_posts_content">{children}</div>
      </div>
    </>
  );
}
