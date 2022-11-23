/* eslint-disable react/no-unescaped-entities */
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const LoggedIn = () => {
  const [profilePic, setProfilePic] = useState("/profile-1.png");
  const { user } = useKindeAuth();

  useEffect(() => {
    switch (user.first_name) {
      case "Helena":
        setProfilePic("/profile-1.png");
        break;
      case "Mark":
        setProfilePic("/profile-3.png");
        break;
      case "Dylan":
        setProfilePic("/profile-4.png");
        break;
      case "Irving":
        setProfilePic("/profile-2.png");
        break;
      default:
        break;
    }
  }, [user]);
  return (
    <div className="logged-in-layout">
      <main className="container">
        <div className="flip-card">
          <div className="flip-card-inner ">
            <article className="access-card">
              <div className="access-card__logo">
                <Image
                  src="/logo-green.png"
                  alt="Lumon logo"
                  width={260}
                  height={38}
                />
              </div>
              <dl>
                <dt>hello, my name is</dt>
                <dd className="flex-between">
                  <span>
                    {user.first_name} {user.last_name}
                  </span>
                  <span>SVR'D ACCESS</span>
                </dd>
                <dt>employee code</dt>
                <dd>08-{user.id.substr(-3)}</dd>
                <dt className="float-right">signature</dt>
              </dl>
              <div className="access-card__profile-pic">
                <Image
                  src={profilePic}
                  alt="Profile picture"
                  width={280}
                  height={240}
                />
              </div>
            </article>

            <article className="access-card access-card--back">
              <Image
                src={"/qr-code.png"}
                width={200}
                height={200}
                alt="qr code"
              />
            </article>
          </div>
        </div>
      </main>
      <footer className="logged-in-footer">
        <Link href="/api/auth/logout">
          <button autoFocus className="retro-button">
            <span className="retro-button__inner">
              <span className="retro-button__text">Sign out</span>
            </span>
          </button>
        </Link>
      </footer>
    </div>
  );
};
